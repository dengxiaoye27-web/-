"use client";

import { useRef, useState } from "react";

interface UploadedFile {
  name: string;
  size: number;
  uploadedAt: string;
  url: string;
}

function formatBytes(bytes: number) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

export function UploadsManager({ initialFiles }: { initialFiles: UploadedFile[] }) {
  const [files, setFiles] = useState(initialFiles);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [copiedName, setCopiedName] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  async function handleUpload(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const input = fileInputRef.current;
    const file = input?.files?.[0];
    if (!file) return;

    setUploading(true);
    setError(null);
    try {
      const form = new FormData();
      form.append("file", file);
      const res = await fetch("/api/admin/uploads", { method: "POST", body: form });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? "Upload failed.");
      if (input) input.value = "";
      setFiles((current) => [data.file, ...current]);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Upload failed.");
    } finally {
      setUploading(false);
    }
  }

  async function handleDelete(name: string) {
    if (!window.confirm(`Delete ${name}? This can't be undone.`)) return;
    try {
      const res = await fetch("/api/admin/uploads", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name }),
      });
      if (!res.ok) throw new Error("Delete failed.");
      setFiles((current) => current.filter((f) => f.name !== name));
    } catch (err) {
      setError(err instanceof Error ? err.message : "Delete failed.");
    }
  }

  async function handleCopy(file: UploadedFile) {
    const fullUrl = `${window.location.origin}${file.url}`;
    await navigator.clipboard.writeText(fullUrl);
    setCopiedName(file.name);
    setTimeout(() => setCopiedName((current) => (current === file.name ? null : current)), 2000);
  }

  return (
    <>
      <form onSubmit={handleUpload} className="mt-8 flex items-center gap-3 rounded-2xl border border-line-200 p-4">
        <input ref={fileInputRef} type="file" accept="application/pdf" required className="flex-1 text-sm" />
        <button
          type="submit"
          disabled={uploading}
          className="rounded-lg bg-navy-900 px-4 py-2 text-sm font-medium text-white disabled:opacity-50"
        >
          {uploading ? "Uploading…" : "Upload"}
        </button>
      </form>

      {error ? <p className="mt-4 text-sm text-red-600">{error}</p> : null}

      <div className="mt-10">
        <h2 className="text-lg font-semibold text-ink-900">Uploaded Files</h2>
        {files.length === 0 ? (
          <p className="mt-4 text-sm text-ink-600">No files uploaded yet.</p>
        ) : (
          <ul className="mt-4 divide-y divide-line-200 rounded-2xl border border-line-200">
            {files.map((file) => (
              <li key={file.name} className="flex items-center justify-between gap-4 px-4 py-3">
                <div className="min-w-0">
                  <p className="truncate text-sm font-medium text-ink-900">{file.name}</p>
                  <p className="text-xs text-ink-600">
                    {formatBytes(file.size)} · {new Date(file.uploadedAt).toLocaleString()}
                  </p>
                </div>
                <div className="flex shrink-0 items-center gap-2">
                  <button
                    type="button"
                    onClick={() => handleCopy(file)}
                    className="rounded-lg border border-line-200 px-3 py-1.5 text-xs font-medium text-ink-900 hover:border-accent-500"
                  >
                    {copiedName === file.name ? "Copied!" : "Copy link"}
                  </button>
                  <button
                    type="button"
                    onClick={() => handleDelete(file.name)}
                    className="rounded-lg border border-line-200 px-3 py-1.5 text-xs font-medium text-red-600 hover:border-red-400"
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}
