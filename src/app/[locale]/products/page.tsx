import type { Metadata } from "next";
import Link from "@/components/ui/LocaleLink";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { categoryIcons } from "@/components/ui/SectionIcons";
import { ProductFilterGrid } from "@/components/product/ProductFilterGrid";
import { productCategories } from "@/data/categories";
import { products } from "@/data/products";
import { getProductsUiMessages, getCommonMessages } from "@/i18n/messages";
import { isLocale, defaultLocale, Locale } from "@/i18n/config";

export const metadata: Metadata = {
  title: "Data Center Infrastructure Products",
  description:
    "Browse Wandtung's full range of data center infrastructure products — PDUs, UPS systems, network and server cabinets, micro modular and containerized data centers, cooling and liquid cooling, raised flooring, cable management and energy storage.",
  alternates: { canonical: "/products" },
};

export default async function ProductsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : defaultLocale;
  const t = getProductsUiMessages(locale);
  const common = getCommonMessages(locale);

  return (
    <div className="bg-white">
      <div className="hero-band">
        <div className="container-page">
          <Breadcrumbs items={[{ label: common.nav.home, href: "/" }, { label: common.nav.products }]} />
          <h1 className="mt-6 text-4xl md:text-6xl font-semibold tracking-tight max-w-3xl">
            {t.hubTitle}
          </h1>
          <p className="mt-4 max-w-2xl text-white/70 text-lg">{t.hubSubtitle}</p>
        </div>
      </div>

      <div className="container-page py-20">
        <SectionHeading eyebrow={t.categoriesEyebrow} title={t.categoriesTitle} />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {productCategories.map((c) => {
            const Icon = categoryIcons[c.slug];
            return (
              <Link
                key={c.slug}
                href={`/products/${c.slug}`}
                className="group rounded-2xl border border-line-200 p-6 transition-all duration-300 hover:border-accent-500/60 hover:-translate-y-1 hover:shadow-[0_12px_32px_-12px_rgba(11,13,18,0.18)]"
              >
                {Icon ? (
                  <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent-500/10 text-accent-500 transition-colors group-hover:bg-accent-500 group-hover:text-white">
                    <Icon className="h-5.5 w-5.5" />
                  </div>
                ) : null}
                <h2 className="text-lg font-semibold text-ink-900">{c.name}</h2>
                <p className="mt-2 text-sm text-ink-600 leading-relaxed">{c.shortDescription}</p>
              </Link>
            );
          })}
        </div>

        <div className="mt-20">
          <SectionHeading eyebrow={t.catalogEyebrow} title={t.catalogTitle} />
          <div className="mt-8">
            <ProductFilterGrid products={products} categories={productCategories} />
          </div>
        </div>
      </div>
    </div>
  );
}
