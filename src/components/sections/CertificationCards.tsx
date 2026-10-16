import fs from "node:fs";
import path from "node:path";
import Image from "next/image";
import { certificateRecords } from "@/data/certifications";
import { IconQuality } from "@/components/ui/SectionIcons";

function slugify(name: string) {
  return name
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function getMarkImage(name: string) {
  const relPath = `/certifications/marks/${slugify(name)}.png`;
  const absPath = path.join(process.cwd(), "public", relPath);
  return fs.existsSync(absPath) ? relPath : null;
}

// One summary card per distinct certification mark actually on file in
// src/data/certifications.ts (see CertificateGallery below for the full,
// per-document detail). Counts and scopes are derived from those real
// records, not hand-written.
function markSummaries() {
  const byMark = new Map<string, typeof certificateRecords>();
  for (const cert of certificateRecords) {
    if (!byMark.has(cert.mark)) byMark.set(cert.mark, []);
    byMark.get(cert.mark)!.push(cert);
  }
  return [...byMark.entries()].map(([mark, certs]) => ({
    mark,
    count: certs.length,
    scopes: [...new Set(certs.map((c) => c.productScope))],
  }));
}

export function CertificationCards({ heldByPartnerLabel }: { heldByPartnerLabel: string }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {markSummaries().map(({ mark, count, scopes }) => {
        const markImage = getMarkImage(mark);
        return (
          <div
            key={mark}
            className="group flex h-full flex-col overflow-hidden rounded-xl border border-line-200 px-5 py-6 text-center transition-all duration-300 hover:border-accent-500 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_-12px_rgba(11,13,18,0.15)]"
          >
            <div className="mx-auto mb-3 flex h-12 w-20 items-center justify-center">
              {markImage ? (
                <Image src={markImage} alt={`${mark} mark`} width={80} height={48} className="max-h-12 w-auto object-contain" />
              ) : (
                <IconQuality className="h-8 w-8 text-ink-600/20" />
              )}
            </div>
            <p className="text-lg font-semibold text-ink-900">{mark}</p>
            <p className="mt-1 text-xs text-ink-600">
              {count} certificate{count > 1 ? "s" : ""} on file — {scopes.join(", ")}
            </p>
            <p className="mt-auto pt-3 text-[11px] text-ink-600/60">{heldByPartnerLabel}</p>
          </div>
        );
      })}
    </div>
  );
}
