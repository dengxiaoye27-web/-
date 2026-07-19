"use client";

import { useState } from "react";
import { Card } from "@/components/ui/Card";
import { Product, ProductCategory } from "@/data/types";
import { useLocale } from "@/i18n/LocaleContext";
import { getProductContent } from "@/i18n/content/products";
import { getCommonMessages } from "@/i18n/messages";

export function ProductFilterGrid({
  products,
  categories,
}: {
  products: Product[];
  categories: ProductCategory[];
}) {
  const locale = useLocale();
  const common = getCommonMessages(locale);
  const [active, setActive] = useState<string>("all");

  const filtered = active === "all" ? products : products.filter((p) => p.category === active);

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setActive("all")}
          className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
            active === "all"
              ? "bg-navy-950 text-white"
              : "border border-line-200 text-ink-600 hover:border-accent-500"
          }`}
        >
          {common.nav.products}
        </button>
        {categories.map((c) => (
          <button
            key={c.slug}
            type="button"
            onClick={() => setActive(c.slug)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
              active === c.slug
                ? "bg-navy-950 text-white"
                : "border border-line-200 text-ink-600 hover:border-accent-500"
            }`}
          >
            {c.name}
          </button>
        ))}
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((product) => {
          const content = getProductContent(product.slug, locale, product);
          return (
            <Card key={product.slug} href={`/products/${product.slug}`}>
              <p className="eyebrow mb-2">{content.shortName}</p>
              <h3 className="text-lg font-semibold text-ink-900">{content.name}</h3>
              <p className="mt-2 text-sm text-ink-600 leading-relaxed">{content.tagline}</p>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
