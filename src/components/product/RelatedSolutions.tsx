import { Card } from "@/components/ui/Card";
import { getSolution } from "@/data/solutions";

export function RelatedSolutions({ slugs }: { slugs: string[] }) {
  const items = slugs.map((s) => getSolution(s)).filter(Boolean);
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
