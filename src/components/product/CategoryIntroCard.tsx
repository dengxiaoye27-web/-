import { Button } from "@/components/ui/Button";

function CheckIcon() {
  return (
    <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-accent-500/15" aria-hidden>
      <svg viewBox="0 0 12 12" className="h-2.5 w-2.5 text-accent-400" fill="none">
        <path d="M2.5 6.2 5 8.7l4.5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

export function CategoryIntroCard({
  name,
  tagline,
  sellingPoints,
  ctaLabel,
}: {
  name: string;
  tagline: string;
  sellingPoints?: string[];
  ctaLabel: string;
}) {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-navy-700 bg-navy-950 p-6 md:p-8">
      <p className="eyebrow mb-2 text-accent-400">{name}</p>
      <p className="text-sm leading-relaxed text-white/70">{tagline}</p>

      {sellingPoints && sellingPoints.length > 0 ? (
        <ul className="mt-6 space-y-3">
          {sellingPoints.map((point) => (
            <li key={point} className="flex items-start gap-2.5 text-sm text-white/80">
              <CheckIcon />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      ) : null}

      <div className="mt-auto pt-6">
        <Button href="/contact" variant="solid" className="w-full">
          {ctaLabel}
        </Button>
      </div>
    </div>
  );
}
