import { Locale } from "@/i18n/config";
import { getProductContent } from "@/i18n/content/products";
import { getProductsUiMessages } from "@/i18n/messages";
import { getProduct } from "@/data/products";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

// Groups link only to real, existing product slugs (verified against
// src/data/products.ts) so this never points at a page that doesn't exist.
const GROUPS: { label: string; slugs: string[] }[] = [
  { label: "By Control & Monitoring Level", slugs: ["metered-pdu", "monitored-pdu", "switched-pdu", "intelligent-pdu"] },
  { label: "By Power Configuration", slugs: ["three-phase-pdu", "ats-pdu", "high-power-pdu"] },
  { label: "By Outlet / Region", slugs: ["iec-pdu", "schuko-pdu", "nema-pdu", "uk-pdu", "multi-function-pdu"] },
];

export function PduSelector({ locale }: { locale: Locale }) {
  const t = getProductsUiMessages(locale);

  return (
    <section>
      <SectionHeading eyebrow={t.pduSelectorEyebrow} title={t.pduSelectorTitle} />
      <div className="mt-8 space-y-10">
        {GROUPS.map((group) => {
          const items = group.slugs
            .map((slug) => getProduct(slug))
            .filter((p): p is NonNullable<typeof p> => Boolean(p))
            .map((p) => ({ ...p, ...getProductContent(p.slug, locale, p) }));
          if (items.length === 0) return null;
          return (
            <div key={group.label}>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-ink-600">{group.label}</h3>
              <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {items.map((item) => (
                  <Card key={item.slug} href={`/products/${item.slug}`} className="p-5">
                    <h4 className="text-base font-semibold text-ink-900">{item.name}</h4>
                    <p className="mt-2 text-sm leading-relaxed text-ink-600">{item.tagline}</p>
                  </Card>
                ))}
              </div>
            </div>
          );
        })}
      </div>
      <div className="mt-8">
        <Button href="/contact">{t.pduSelectorCta}</Button>
      </div>
    </section>
  );
}
