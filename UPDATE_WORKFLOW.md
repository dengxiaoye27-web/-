# Update Workflow

How day-to-day updates (mainly images/assets) get from "you hand Claude a file" to "live on wandtung.com", with as little manual work on your side as possible.

## What Claude can and can't do directly

- **GitHub**: Claude has direct push/merge access to this repository. No manual upload, no PR links to click.
- **Production server (47.77.215.159)**: Claude runs in a sandboxed environment that can only make outbound HTTPS calls through a proxy — it cannot open a raw SSH connection to any server, including this one, regardless of what credentials are provided. This isn't a permissions setting Claude can enable; it's a hard limit of the execution environment. So Claude cannot `git pull` or restart the app on your server directly.
- **What closes that gap**: a small polling script installed on the server (`scripts/deploy-watch.sh` in this repo) that checks for new commits every few minutes and deploys automatically. Set up once (see below), it replaces the manual `git pull` step for good.

## How to hand Claude a file now

Just give Claude the image (drag it into chat, or tell Claude which local/GitHub folder it's in) and say what it's for. No need to upload to GitHub yourself first.

## What happens automatically vs. what still needs your OK

| Change type | Claude's process |
|---|---|
| Image/static asset updates — swapping a photo, cropping, adding a new image file, renaming | Commits, pushes, and **merges immediately** — no PR link, no "合并" needed from you. |
| Anything touching code logic, page structure, data fields, or copy/content | Still opens a PR and **waits for your explicit "合并"** before merging, same as before. |

The line: if the change is "a different file at the same path/reference" with no code changes, it auto-merges. If Claude has to edit a `.ts`/`.tsx` file for anything beyond wiring up an image path, or change what text/data is on the site, that's a PR.

Once merged, the deploy-watch script (see below) picks it up on its own within a few minutes — Claude will tell you the change is merged and roughly when to expect it live, but won't claim it's live until you've had a chance to check.

## One-time server setup (you or whoever has SSH access needs to do this once)

1. Pull the latest `claude/claude-md-docs-81a9sj` so `scripts/deploy-watch.sh` is on the server.
2. Make it executable:
   ```bash
   chmod +x scripts/deploy-watch.sh
   ```
3. Add a crontab entry to run it every 3 minutes — **set `PROJECT_DIR` and `PM2_APP_NAME` as environment variables on the crontab line itself, don't edit the script file**. The script is tracked in git and overwritten by `git pull` on every run, so any values hardcoded directly in the file will conflict with the next update and silently stop deploys.
   ```bash
   crontab -e
   ```
   Add this line (adjust the path and PM2 app name — run `pm2 list` if unsure):
   ```
   */3 * * * * PROJECT_DIR=/home/admin/wandtung-app PM2_APP_NAME=wandtung-app /home/admin/wandtung-app/scripts/deploy-watch.sh >> /home/admin/wandtung-app/deploy.log 2>&1
   ```
4. Verify it's working: make any small merge, then watch `deploy.log` — you should see a `New commit detected` / `Deployed ... and restarted ...` line appear within 3 minutes, with no action from you.

The script is idempotent and quiet when there's nothing new, so it's safe to leave running indefinitely. If a deploy ever fails (bad `npm run build`, etc.), `set -euo pipefail` stops the script before `pm2 restart`, so the site keeps running the last-good build — check `deploy.log` for the error.

## Sales file uploads (/admin/uploads)

A small internal tool at `/admin/uploads` lets you upload a PDF (proposal, catalog, datasheet) and get back a permanent `wandtung.com/downloads/...` link to send customers, instead of a third-party file-sharing link. It's gated by a shared password (HTTP Basic Auth) and stores files outside the repo so they survive `git pull` deploys untouched.

**One-time server setup** (in addition to the deploy-watch cron job above):

1. Create a directory for uploads, outside the project directory, and make sure the PM2 process can write to it:
   ```bash
   mkdir -p /home/admin/wandtung-uploads
   ```
2. Add two environment variables alongside `PROJECT_DIR`/`PM2_APP_NAME` wherever the app's process environment is set (e.g. in PM2's env config or an `.env.local` file in `PROJECT_DIR` — **not** committed to git):
   - `ADMIN_UPLOAD_PASSWORD` — the shared password for `/admin/uploads`. Pick something you wouldn't mind a colleague using; it is not tied to an individual account.
   - `ADMIN_UPLOADS_DIR` — the absolute path to the directory created in step 1 (e.g. `/home/admin/wandtung-uploads`).
3. Restart the app once (`pm2 restart wandtung-app`) so it picks up the new environment variables.

Without `ADMIN_UPLOADS_DIR` set, the page shows a clear "uploads are disabled" message instead of erroring — so it's safe to deploy this feature before doing the server-side setup, and safe to leave `/admin/uploads` unconfigured if you decide not to use it.

Once set up: visit `https://www.wandtung.com/admin/uploads`, log in with the shared password when the browser prompts, upload a PDF (25MB max), and copy the link it gives you. Files you delete there are gone for good — there's no trash/undo.

## What to expect going forward

- Send Claude an image (or point it at a folder) → Claude crops/renames/wires it up → pushes and merges (image-only) or opens a PR and asks you to say "合并" (anything else) → within a few minutes of merge, the server auto-deploys → Claude tells you it's done and to go check.
- You never need to touch GitHub's web UI or SSH into the server for routine image/content updates again, once the cron job above is running.
