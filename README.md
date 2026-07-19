# Guo Chongcheng Literary Collection

Static public site deployed by Vercel, with GitHub as the source of truth.

## Deploy

1. Create an empty private GitHub repository and push this folder.
2. Import the repository in Vercel. No build command is needed: this is a static site plus one serverless endpoint.
3. In Vercel, add the environment variables listed in `.env.example`.
4. Set `PUBLISH_CRON_SECRET` in Vercel. Vercel Cron will call `/api/publish-daily` at 08:00 Asia/Taipei (00:00 UTC).
5. When the endpoint creates a GitHub commit, Vercel will deploy the new daily post automatically.

## Editorial gate

Only entries in `content/approved-posts.json` with `status: "approved"` and a due `scheduled_date` may be published. The original manuscript folder is not read by the deployed site.

Before enabling the cron, fill in each approved entry's title, verified text, source note, and image prompt. Keep the original wording untouched; do not ask image generation to render Chinese poem lines inside the image.
