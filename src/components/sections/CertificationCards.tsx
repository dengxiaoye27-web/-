import fs from "node:fs";
import path from "node:path";
import Image from "next/image";
import { certifications } from "@/data/certifications";
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

export function CertificationCards({ heldByPartnerLabel }: { heldByPartnerLabel: string }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {certifications.map((cert) => {
        const mark = getMarkImage(cert.name);
        return (
          <div
            key={cert.name}
            className="group flex h-full flex-col overflow-hidden rounded-xl border border-line-200 px-5 py-6 text-center transition-all duration-300 hover:border-accent-500 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_-12px_rgba(11,13,18,0.15)]"
          >
            <div className="mx-auto mb-3 flex h-12 w-20 items-center justify-center">
              {mark ? (
                <Image src={mark} alt={`${cert.name} mark`} width={80} height={48} className="max-h-12 w-auto object-contain" />
              ) : (
                <IconQuality className="h-8 w-8 text-ink-600/20" />
              )}
            </div>
            <p className="text-lg font-semibold text-ink-900">{cert.name}</p>
            <p className="mt-1 text-xs text-ink-600">{cert.description}</p>
            <p className="mt-auto pt-3 text-[11px] text-ink-600/60">{heldByPartnerLabel}</p>
          </div>
        );
      })}
    </div>
  );
}
