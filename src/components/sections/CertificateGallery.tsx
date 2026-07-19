import Image from "next/image";
import { certificateRecords } from "@/data/certifications";

export function CertificateGallery() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {certificateRecords.map((cert) => (
        <a
          key={cert.slug}
          href={cert.image}
          target="_blank"
          rel="noopener noreferrer"
          className="group block rounded-2xl border border-line-200 overflow-hidden hover:border-accent-500/60 transition-colors"
        >
          <div className="relative aspect-[4/3] bg-paper-50">
            <Image
              src={cert.image}
              alt={`${cert.title} — ${cert.productScope}`}
              fill
              className="object-contain p-4"
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            />
          </div>
          <div className="p-5">
            <p className="eyebrow mb-1">{cert.mark}</p>
            <h3 className="text-sm font-semibold text-ink-900">{cert.title}</h3>
            <p className="mt-1 text-xs text-ink-600">{cert.productScope}</p>
            <p className="mt-2 text-xs font-mono text-ink-600">{cert.standard}</p>
            <p className="mt-2 text-xs text-ink-600">
              No. {cert.certificateNumber} · {cert.issuer} · {cert.date}
            </p>
          </div>
        </a>
      ))}
    </div>
  );
}
