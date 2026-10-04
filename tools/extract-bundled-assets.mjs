import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { gunzipSync } from 'node:zlib';

const sourceUrl = new URL('../standalone-manifest.js', import.meta.url);
const outputUrl = new URL('../bundled-assets/', import.meta.url);
const mapUrl = new URL('../standalone-asset-map.js', import.meta.url);
const source = await readFile(sourceUrl, 'utf8');
const start = source.indexOf('{');
const end = source.lastIndexOf('};');
if (start < 0 || end < start) throw new Error('Bundled manifest was not found');

const manifest = JSON.parse(source.slice(start, end + 1));
const extensions = {
  'application/javascript': 'js',
  'text/javascript': 'js',
  'font/woff2': 'woff2',
  'image/jpeg': 'jpg',
};
const assetMap = {};
let totalBytes = 0;

await mkdir(outputUrl, { recursive: true });
for (const [id, entry] of Object.entries(manifest)) {
  if (!/^[a-f\d-]{36}$/i.test(id)) throw new Error(`Unexpected asset id: ${id}`);
  const extension = extensions[entry.mime];
  if (!extension) throw new Error(`Unexpected MIME type: ${entry.mime}`);
  const encodedBytes = Buffer.from(entry.data, 'base64');
  const bytes = entry.compressed ? gunzipSync(encodedBytes) : encodedBytes;
  const filename = `${id}.${extension}`;
  await writeFile(new URL(filename, outputUrl), bytes);
  assetMap[id] = { mime: entry.mime, url: `bundled-assets/${filename}` };
  totalBytes += bytes.length;
}

await writeFile(mapUrl, `window.__GS_BUNDLER_ASSETS__ = ${JSON.stringify(assetMap)};\n`);
console.log(`Extracted ${Object.keys(assetMap).length} assets (${totalBytes} bytes)`);
