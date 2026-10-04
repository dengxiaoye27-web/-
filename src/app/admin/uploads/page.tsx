import { listUploadedFiles } from "@/lib/uploads";
import { UploadsManager } from "./UploadsManager";

export default async function AdminUploadsPage() {
  let initialFiles: Awaited<ReturnType<typeof listUploadedFiles>> = [];
  let configError: string | null = null;
  try {
    initialFiles = await listUploadedFiles();
  } catch {
    configError = "ADMIN_UPLOADS_DIR is not set on this server — uploads are disabled until it is configured.";
  }

  return (
    <div className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="text-2xl font-semibold text-ink-900">Sales File Uploads</h1>
      <p className="mt-2 text-sm text-ink-600">
        Upload a PDF (proposal, catalog, datasheet) to get a permanent wandtung.com link you can send to
        customers. PDF only, 25MB max.
      </p>

      {configError ? (
        <p className="mt-6 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {configError}
        </p>
      ) : (
        <UploadsManager initialFiles={initialFiles} />
      )}
    </div>
  );
}
