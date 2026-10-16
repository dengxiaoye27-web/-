import { NextResponse } from "next/server";
import fs from "node:fs/promises";
import path from "node:path";
import { uploadsDir, SAFE_FILENAME } from "@/lib/uploads";

// Public, unauthenticated file serving for PDFs uploaded through
// /admin/uploads — this is the link that gets shared with customers, so it
// intentionally does not sit behind the admin password.
export async function GET(
  _request: Request,
  { params }: { params: Promise<{ filename: string }> }
) {
  const { filename } = await params;
  if (!SAFE_FILENAME.test(filename)) {
    return new NextResponse("Not found.", { status: 404 });
  }

  let dir: string;
  try {
    dir = uploadsDir();
  } catch {
    return new NextResponse("Not found.", { status: 404 });
  }

  const resolvedDir = path.resolve(dir);
  const filePath = path.resolve(dir, filename);
  if (path.dirname(filePath) !== resolvedDir) {
    return new NextResponse("Not found.", { status: 404 });
  }

  let data: Buffer;
  try {
    data = await fs.readFile(filePath);
  } catch {
    return new NextResponse("Not found.", { status: 404 });
  }

  return new NextResponse(new Uint8Array(data), {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `inline; filename="${filename}"`,
      "Cache-Control": "public, max-age=3600",
    },
  });
}
