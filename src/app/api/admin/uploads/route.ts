import { NextRequest, NextResponse } from "next/server";
import fs from "node:fs/promises";
import path from "node:path";
import { uploadsDir, sanitizeBaseName, MAX_UPLOAD_BYTES, SAFE_FILENAME, listUploadedFiles } from "@/lib/uploads";

async function fileExists(filePath: string) {
  try {
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
}

async function uniqueFilename(dir: string, stem: string, ext: string) {
  let candidate = `${stem}${ext}`;
  let i = 1;
  while (await fileExists(path.join(dir, candidate))) {
    candidate = `${stem}-${i}${ext}`;
    i++;
  }
  return candidate;
}

export async function GET() {
  try {
    const files = await listUploadedFiles();
    return NextResponse.json({ files });
  } catch {
    return NextResponse.json({ error: "Uploads are not configured on this server." }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  let dir: string;
  try {
    dir = uploadsDir();
  } catch {
    return NextResponse.json({ error: "Uploads are not configured on this server." }, { status: 500 });
  }

  const form = await request.formData().catch(() => null);
  const file = form?.get("file");
  if (!file || !(file instanceof File)) {
    return NextResponse.json({ error: "No file provided." }, { status: 400 });
  }
  if (file.type !== "application/pdf" && !file.name.toLowerCase().endsWith(".pdf")) {
    return NextResponse.json({ error: "Only PDF files are allowed." }, { status: 400 });
  }
  if (file.size > MAX_UPLOAD_BYTES) {
    return NextResponse.json({ error: "File exceeds the 100MB limit." }, { status: 400 });
  }

  await fs.mkdir(dir, { recursive: true });
  const stem = sanitizeBaseName(file.name);
  const filename = await uniqueFilename(dir, stem, ".pdf");
  const buffer = Buffer.from(await file.arrayBuffer());
  await fs.writeFile(path.join(dir, filename), buffer);

  return NextResponse.json({
    file: {
      name: filename,
      size: buffer.length,
      uploadedAt: new Date().toISOString(),
      url: `/downloads/${encodeURIComponent(filename)}`,
    },
  });
}

export async function DELETE(request: NextRequest) {
  let dir: string;
  try {
    dir = uploadsDir();
  } catch {
    return NextResponse.json({ error: "Uploads are not configured on this server." }, { status: 500 });
  }

  const body = await request.json().catch(() => null);
  const name = body?.name;
  if (typeof name !== "string" || !SAFE_FILENAME.test(name)) {
    return NextResponse.json({ error: "Invalid filename." }, { status: 400 });
  }

  const resolvedDir = path.resolve(dir);
  const target = path.resolve(dir, name);
  if (path.dirname(target) !== resolvedDir) {
    return NextResponse.json({ error: "Invalid filename." }, { status: 400 });
  }

  await fs.unlink(target).catch(() => {});
  return NextResponse.json({ ok: true });
}
