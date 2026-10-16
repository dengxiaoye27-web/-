import { Locale } from "@/i18n/config";
import { getSolutionContent } from "@/i18n/content/solutions";
import { Card } from "@/components/ui/Card";
import { getSolution } from "@/data/solutions";

export function RelatedSolutions({ slugs, locale }: { slugs: string[]; locale: Locale }) {
  const items = slugs.map((s) => getSolution(s)).filter((item): item is NonNullable<typeof item> => Boolean(item)).map((item) => ({ ...item, ...getSolutionContent(item.slug, locale, item) }));
  if (items.length === 0) return null;

  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {items.map((solution) => (
        <Card key={solution!.slug} href={`/solutions/${solution!.slug}`} dark>
          <h3 className="text-lg font-semibold text-white">{solution!.name}</h3>
          <p className="mt-2 text-sm text-white/60 leading-relaxed">{solution!.tagline}</p>
        </Card>
      ))}
    </div>
  );
}
