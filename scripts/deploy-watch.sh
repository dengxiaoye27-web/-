#!/usr/bin/env bash
# Polling auto-deploy for wandtung.com.
#
# Run this on the production server on a schedule (see UPDATE_WORKFLOW.md for
# the crontab setup). It checks whether origin/<BRANCH> has moved since the
# last successful deploy; if so, it pulls, rebuilds, and restarts the app.
# Safe to run repeatedly — it's a no-op whenever there's nothing new.
#
# Required one-time setup (see UPDATE_WORKFLOW.md):
#   - Set PROJECT_DIR and PM2_APP_NAME below to match your server.
#   - chmod +x scripts/deploy-watch.sh
#   - Add a crontab entry that runs this on an interval.

set -euo pipefail

# ---- Configuration: edit these two lines for your server ----
PROJECT_DIR="/home/admin/wandtung-app"
PM2_APP_NAME="wandtung-app"
BRANCH="claude/claude-md-docs-81a9sj"
# ---------------------------------------------------------------

LOG_PREFIX="[deploy-watch $(date '+%Y-%m-%d %H:%M:%S')]"

cd "$PROJECT_DIR"

git fetch origin "$BRANCH" --quiet

LOCAL_SHA=$(git rev-parse HEAD)
REMOTE_SHA=$(git rev-parse "origin/$BRANCH")

if [ "$LOCAL_SHA" = "$REMOTE_SHA" ]; then
  # Nothing new — exit quietly, don't spam the log.
  exit 0
fi

echo "$LOG_PREFIX New commit detected: $LOCAL_SHA -> $REMOTE_SHA"

git pull origin "$BRANCH"
# Full install (not --omit=dev): the Next.js build needs devDependencies
# like @tailwindcss/postcss at build time, even though they're unused at runtime.
npm ci --no-audit --no-fund || npm install --no-audit --no-fund
npm run build

pm2 restart "$PM2_APP_NAME"

echo "$LOG_PREFIX Deployed $REMOTE_SHA and restarted $PM2_APP_NAME"
