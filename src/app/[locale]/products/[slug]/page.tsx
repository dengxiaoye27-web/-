import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "@/components/ui/LocaleLink";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SpecTable } from "@/components/ui/SpecTable";
import { Accordion } from "@/components/ui/Accordion";
import { FeatureGrid } from "@/components/product/FeatureGrid";
import { ProductGallery } from "@/components/product/ProductGallery";
import { RelatedProducts } from "@/components/product/RelatedProducts";
import { RelatedSolutions } from "@/components/product/RelatedSolutions";
import { InquiryCTA } from "@/components/product/InquiryCTA";
import { JsonLd } from "@/components/seo/JsonLd";
import { getProduct, getProductsByCategory, products } from "@/data/products";
import { getCategory, productCategories } from "@/data/categories";
import { breadcrumbSchema, faqSchema, productSchema } from "@/lib/schema";
import { getProductContent } from "@/i18n/content/products";
import { getProductsUiMessages, getCommonMessages } from "@/i18n/messages";
import { isLocale, defaultLocale, Locale } from "@/i18n/config";

export function generateStaticParams() {
  return [
    ...products.map((p) => ({ slug: p.slug })),
    ...productCategories.map((c) => ({ slug: c.slug })),
  ];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale, slug } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : defaultLocale;
  const product = getProduct(slug);
  if (product) {
    const content = getProductContent(slug, locale, product);
    return {
      title: content.name,
      description: content.overview,
      alternates: { canonical: `/products/${product.slug}` },
    };
  }
  const category = getCategory(slug);
  if (category) {
    return {
      title: category.name,
      description: category.shortDescription,
      alternates: { canonical: `/products/${category.slug}` },
    };
  }
  return {};
}

export default async function ProductOrCategoryPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale: rawLocale, slug } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : defaultLocale;
  const product = getProduct(slug);
  if (product) return <ProductDetail slug={slug} locale={locale} />;

  const category = getCategory(slug);
  if (category) return <CategoryListing slug={slug} locale={locale} />;

  notFound();
}

function CategoryListing({ slug, locale }: { slug: string; locale: Locale }) {
  const category = getCategory(slug)!;
  const items = getProductsByCategory(slug);
  const t = getProductsUiMessages(locale);
  const common = getCommonMessages(locale);

  return (
    <div className="bg-white">
      <div className="hero-band">
        <div className="container-page">
          <Breadcrumbs
            items={[
              { label: common.nav.home, href: "/" },
              { label: common.nav.products, href: "/products" },
              { label: category.name },
            ]}
          />
          <h1 className="mt-6 text-4xl md:text-6xl font-semibold tracking-tight max-w-3xl">
            {category.name}
          </h1>
          <p className="mt-4 max-w-2xl text-white/70 text-lg">{category.heroTagline}</p>
          <p className="mt-4 max-w-2xl text-white/60">{category.shortDescription}</p>
        </div>
      </div>

      <div className="container-page py-20">
        {items.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((p) => {
              const content = getProductContent(p.slug, locale, p);
              return (
                <Link
                  key={p.slug}
                  href={`/products/${p.slug}`}
                  className="group block overflow-hidden rounded-2xl border border-line-200 hover:border-accent-500/60 hover:-translate-y-1 transition-all"
                >
                  {p.images?.[0] ? (
                    <div className="relative aspect-square bg-paper-50">
                      <Image
                        src={p.images[0]}
                        alt={content.name}
                        fill
                        className="object-contain p-6"
                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      />
                    </div>
                  ) : null}
                  <div className="p-6 md:p-8">
                    <p className="eyebrow mb-2">{content.shortName}</p>
                    <h2 className="text-lg font-semibold text-ink-900">{content.name}</h2>
                    <p className="mt-2 text-sm text-ink-600 leading-relaxed">{content.tagline}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        ) : (
          <p className="text-ink-600">{t.categoryComingSoon}</p>
        )}
      </div>
    </div>
  );
}

function ProductDetail({ slug, locale }: { slug: string; locale: Locale }) {
  const product = getProduct(slug)!;
  const category = getCategory(product.category);
  const content = getProductContent(slug, locale, product);
  const t = getProductsUiMessages(locale);
  const common = getCommonMessages(locale);

  const breadcrumbItems = [
    { label: common.nav.home, href: "/" },
    { label: common.nav.products, href: "/products" },
    ...(category ? [{ label: category.name, href: `/products/${category.slug}` }] : []),
    { label: content.name },
  ];

  return (
    <div className="bg-white">
      <JsonLd
        data={[
          productSchema({ ...product, ...content }),
          faqSchema(content.faqs),
          breadcrumbSchema(breadcrumbItems.map((i) => ({ label: i.label, href: i.href ?? `/products/${product.slug}` }))),
        ]}
      />

      <div className="hero-band">
        <div className="container-page">
          <Breadcrumbs items={breadcrumbItems} />
          <p className="eyebrow mt-6 mb-3">{category?.name}</p>
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight max-w-3xl">
            {content.name}
          </h1>
          <p className="mt-4 max-w-2xl text-white/70 text-lg">{content.tagline}</p>
        </div>
      </div>

      <div className="container-page py-16 md:py-20 space-y-20">
        <section className={product.images?.length ? "grid gap-10 lg:grid-cols-2 lg:items-start" : undefined}>
          {product.images?.length ? <ProductGallery images={product.images} alt={content.name} /> : null}
          <div>
            <SectionHeading eyebrow={t.overviewEyebrow} title={t.overviewTitle} />
            <p className="mt-6 max-w-3xl text-ink-600 leading-relaxed text-lg">{content.overview}</p>
          </div>
        </section>

        <section>
          <SectionHeading eyebrow={t.featuresEyebrow} title={t.featuresTitle} />
          <div className="mt-8">
            <FeatureGrid items={content.keyFeatures} />
          </div>
        </section>

        <section>
          <SectionHeading eyebrow={t.specsEyebrow} title={t.specsTitle} />
          <div className="mt-8">
            <SpecTable groups={content.specGroups} />
          </div>
        </section>

        <section className="grid gap-10 md:grid-cols-2">
          <div>
            <SectionHeading eyebrow={t.applicationsEyebrow} title={t.applicationsTitle} />
            <ul className="mt-6 space-y-2">
              {content.applications.map((a) => (
                <li key={a} className="flex items-start gap-2 text-ink-600">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent-500" aria-hidden />
                  {a}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SectionHeading eyebrow={t.customizationEyebrow} title={t.customizationTitle} />
            <ul className="mt-6 space-y-2">
              {content.customizationOptions.map((c) => (
                <li key={c} className="flex items-start gap-2 text-ink-600">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent-500" aria-hidden />
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {content.standards.length > 0 ? (
          <section>
            <SectionHeading eyebrow={t.standardsEyebrow} title={t.standardsTitle} />
            <div className="mt-6 flex flex-wrap gap-3">
              {content.standards.map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-line-200 px-4 py-1.5 text-sm font-medium text-ink-900"
                >
                  {s}
                </span>
              ))}
            </div>
          </section>
        ) : null}

        <section>
          <SectionHeading eyebrow={t.faqEyebrow} title={t.faqTitle} />
          <div className="mt-8 max-w-3xl">
            <Accordion items={content.faqs} />
          </div>
        </section>

        <section>
          <InquiryCTA productName={content.name} />
        </section>

        {product.relatedSolutionSlugs.length > 0 ? (
          <section>
            <SectionHeading eyebrow={t.relatedSolutionsEyebrow} title={t.relatedSolutionsTitle} />
            <div className="mt-8">
              <RelatedSolutions slugs={product.relatedSolutionSlugs} />
            </div>
          </section>
        ) : null}

        {product.relatedProductSlugs.length > 0 ? (
          <section>
            <SectionHeading eyebrow={t.relatedProductsEyebrow} title={t.relatedProductsTitle} />
            <div className="mt-8">
              <RelatedProducts slugs={product.relatedProductSlugs} />
            </div>
          </section>
        ) : null}
      </div>
    </div>
  );
}
