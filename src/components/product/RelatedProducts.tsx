import { Card } from "@/components/ui/Card";
import { getProduct } from "@/data/products";

export function RelatedProducts({ slugs }: { slugs: string[] }) {
  const items = slugs.map((s) => getProduct(s)).filter(Boolean);
  if (items.length === 0) return null;

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((product) => (
        <Card key={product!.slug} href={`/products/${product!.slug}`}>
          <h3 className="text-lg font-semibold text-ink-900">{product!.name}</h3>
          <p className="mt-2 text-sm text-ink-600 leading-relaxed">{product!.tagline}</p>
        </Card>
      ))}
    </div>
  );
}
