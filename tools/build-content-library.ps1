param(
  [string]$SourceRoot = '',
  [string]$OutputRoot = ''
)

$ErrorActionPreference = 'Stop'
$projectRoot = [IO.Path]::GetFullPath((Join-Path $PSScriptRoot '..'))

if (-not $SourceRoot) {
  $candidate = Get-ChildItem -LiteralPath $projectRoot -Directory |
    Where-Object { (Get-ChildItem -LiteralPath $_.FullName -Recurse -File -Filter '*.doc' | Measure-Object).Count -gt 0 } |
    Select-Object -First 1
  if (-not $candidate) { throw 'No source folder with Word documents was found.' }
  $SourceRoot = $candidate.FullName
}
if (-not $OutputRoot) { $OutputRoot = Join-Path $projectRoot 'site-content-library' }

function Get-SourceRank([string]$relativePath) {
  if ($relativePath -match '^.*\\') { return 2 }
  return 1
}

function Get-Category([string]$relativePath) {
  $name = [IO.Path]::GetFileNameWithoutExtension($relativePath)
  if ($name -match 'intro|preface|biography') { return 'intro' }
  if ($name -match 'record|essay|article|history') { return 'essay' }
  return 'poem_or_essay'
}

$source = (Resolve-Path -LiteralPath $SourceRoot).Path
$out = [IO.Path]::GetFullPath($OutputRoot)
$textDir = Join-Path $out 'texts'
$manifestPath = Join-Path $out 'content-manifest.json'

New-Item -ItemType Directory -Force -Path $textDir | Out-Null

$files = Get-ChildItem -LiteralPath $source -Recurse -File |
  Where-Object { $_.Extension -in '.doc', '.docx' } |
  Where-Object { $_.FullName -notmatch 'complete|archive|published' } |
  Sort-Object FullName

if (-not $files) { throw 'No Word documents were found.' }

$word = $null
try {
  $word = New-Object -ComObject Word.Application
  $word.Visible = $false
  $word.DisplayAlerts = 0
  $word.Options.ConfirmConversions = $false
}
catch {
  Write-Warning 'Word automation is unavailable. Building filename inventory only.'
}
$items = [System.Collections.Generic.List[object]]::new()

try {
  $index = 0
  foreach ($file in $files) {
    $index++
    $relative = $file.FullName.Substring($source.Length).TrimStart([char]92)
    $baseTitle = [IO.Path]::GetFileNameWithoutExtension($file.Name).Trim()
    $safeName = ($baseTitle -replace '[\\/:*?"<>|]', '_') -replace '\s+', ' '
    $id = ('{0:D3}-{1}' -f $index, $safeName)
    $textPath = Join-Path $textDir ($id + '.txt')
    $document = $null

    try {
      if (-not $word) {
        $items.Add([PSCustomObject]@{
          id = $id; title = $baseTitle; category = Get-Category $relative
          status = 'needs_text_extraction'; source_rank = Get-SourceRank $relative
          source_file = $relative; text_file = ''; character_count = $null
          image_prompt = ''; scheduled_date = $null
          notes = 'Extract on a machine where Microsoft Word automation is available.'
        })
        Write-Host "[$index/$($files.Count)] $relative (inventory only)"
        continue
      }
      $document = $word.Documents.Open($file.FullName, $false, $true, $false)
      $body = $document.Content.Text
      $body = $body -replace "`r`a", "`n" -replace "`r", "`n"
      $body = $body -replace "[ `t]+`n", "`n"
      $body = $body.Trim()
      $firstLine = ($body -split "`n" | Where-Object { $_.Trim() } | Select-Object -First 1)
      $title = if ($firstLine -and $firstLine.Trim().Length -le 60) { $firstLine.Trim() } else { $baseTitle }
      [IO.File]::WriteAllText($textPath, $body + [Environment]::NewLine, [Text.UTF8Encoding]::new($false))
      $items.Add([PSCustomObject]@{
        id = $id
        title = $title
        category = Get-Category $relative
        status = 'needs_review'
        source_rank = Get-SourceRank $relative
        source_file = $relative
        text_file = ('texts/' + $id + '.txt')
        character_count = $body.Replace("`n", '').Length
        image_prompt = ''
        scheduled_date = $null
        notes = ''
      })
      Write-Host "[$index/$($files.Count)] $relative"
    }
    catch {
      Write-Warning "Skipped: $relative -- $($_.Exception.Message)"
    }
    finally {
      if ($document) { $document.Close(0) | Out-Null; [Runtime.InteropServices.Marshal]::ReleaseComObject($document) | Out-Null }
    }
  }
}
finally {
  if ($word) {
    $word.Quit()
    [Runtime.InteropServices.Marshal]::ReleaseComObject($word) | Out-Null
  }
  [GC]::Collect(); [GC]::WaitForPendingFinalizers()
}

$manifest = [PSCustomObject]@{
  generated_at = (Get-Date).ToString('o')
  editorial_note = 'Original files are unchanged. Review each text before publishing.'
  items = $items
}
$manifest | ConvertTo-Json -Depth 5 | Set-Content -LiteralPath $manifestPath -Encoding utf8
Write-Host "Done: $($items.Count) texts exported to $out"
