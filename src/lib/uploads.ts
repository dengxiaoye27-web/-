import fs from "node:fs/promises";
import path from "node:path";

// Storage for files uploaded through /admin/uploads (sales collateral shared
// with customers via /downloads/<filename>). Kept outside the repo in
// production — set ADMIN_UPLOADS_DIR on the server — so uploaded binaries
// never collide with `git pull` during a deploy. Falls back to a local,
// gitignored directory outside production so the feature is testable without
// that env var set.
export function uploadsDir(): string {
  const configured = process.env.ADMIN_UPLOADS_DIR;
  if (configured) return configured;
  if (process.env.NODE_ENV !== "production") {
    return path.join(process.cwd(), ".local-uploads");
  }
  throw new Error("ADMIN_UPLOADS_DIR is not set.");
}

export const MAX_UPLOAD_BYTES = 100 * 1024 * 1024;

// Only bare filenames (no path separators or traversal) that look like a
// PDF we generated are ever read back from disk.
export const SAFE_FILENAME = /^[a-zA-Z0-9][a-zA-Z0-9._-]*\.pdf$/;

export function sanitizeBaseName(originalName: string) {
  const ext = path.extname(originalName).toLowerCase();
  const stem = path
    .basename(originalName, ext)
    .replace(/[^a-zA-Z0-9-_]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80);
  return stem || "file";
}

export interface UploadedFile {
  name: string;
  size: number;
  uploadedAt: string;
  url: string;
}

export async function listUploadedFiles(): Promise<UploadedFile[]> {
  const dir = uploadsDir();
  await fs.mkdir(dir, { recursive: true });
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = await Promise.all(
    entries
      .filter((entry) => entry.isFile() && SAFE_FILENAME.test(entry.name))
      .map(async (entry) => {
        const stat = await fs.stat(path.join(dir, entry.name));
        return {
          name: entry.name,
          size: stat.size,
          uploadedAt: stat.mtime.toISOString(),
          url: `/downloads/${encodeURIComponent(entry.name)}`,
        };
      })
  );
  files.sort((a, b) => b.uploadedAt.localeCompare(a.uploadedAt));
  return files;
}
