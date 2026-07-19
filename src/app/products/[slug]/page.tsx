import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SpecTable } from "@/components/ui/SpecTable";
import { Accordion } from "@/components/ui/Accordion";
import { FeatureGrid } from "@/components/product/FeatureGrid";
import { RelatedProducts } from "@/components/product/RelatedProducts";
import { RelatedSolutions } from "@/components/product/RelatedSolutions";
import { InquiryCTA } from "@/components/product/InquiryCTA";
import { JsonLd } from "@/components/seo/JsonLd";
import { getProduct, getProductsByCategory, products } from "@/data/products";
import { getCategory, productCategories } from "@/data/categories";
import { breadcrumbSchema, faqSchema, productSchema } from "@/lib/schema";

export function generateStaticParams() {
  return [
    ...products.map((p) => ({ slug: p.slug })),
    ...productCategories.map((c) => ({ slug: c.slug })),
  ];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (product) {
    return {
      title: product.name,
      description: product.overview,
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
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (product) return <ProductDetail slug={slug} />;

  const category = getCategory(slug);
  if (category) return <CategoryListing slug={slug} />;

  notFound();
}

function CategoryListing({ slug }: { slug: string }) {
  const category = getCategory(slug)!;
  const items = getProductsByCategory(slug);

  return (
    <div className="bg-white">
      <div className="bg-navy-950 text-white py-16 md:py-24">
        <div className="container-page">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Products", href: "/products" },
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
            {items.map((p) => (
              <Link
                key={p.slug}
                href={`/products/${p.slug}`}
                className="group block rounded-2xl border border-line-200 p-6 md:p-8 hover:border-accent-500/60 hover:-translate-y-1 transition-all"
              >
                <p className="eyebrow mb-2">{p.shortName}</p>
                <h2 className="text-lg font-semibold text-ink-900">{p.name}</h2>
                <p className="mt-2 text-sm text-ink-600 leading-relaxed">{p.tagline}</p>
              </Link>
            ))}
          </div>
        ) : (
          <p className="text-ink-600">
            Detailed product pages for this category are being added. Contact
            our engineering team for current availability and specifications.
          </p>
        )}
      </div>
    </div>
  );
}

function ProductDetail({ slug }: { slug: string }) {
  const product = getProduct(slug)!;
  const category = getCategory(product.category);

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Products", href: "/products" },
    ...(category ? [{ label: category.name, href: `/products/${category.slug}` }] : []),
    { label: product.name },
  ];

  return (
    <div className="bg-white">
      <JsonLd
        data={[
          productSchema(product),
          faqSchema(product.faqs),
          breadcrumbSchema(breadcrumbItems.map((i) => ({ label: i.label, href: i.href ?? `/products/${product.slug}` }))),
        ]}
      />

      <div className="bg-navy-950 text-white py-16 md:py-24">
        <div className="container-page">
          <Breadcrumbs items={breadcrumbItems} />
          <p className="eyebrow mt-6 mb-3">{category?.name}</p>
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight max-w-3xl">
            {product.name}
          </h1>
          <p className="mt-4 max-w-2xl text-white/70 text-lg">{product.tagline}</p>
        </div>
      </div>

      <div className="container-page py-16 md:py-20 space-y-20">
        <section>
          <SectionHeading eyebrow="Overview" title="Product Overview" />
          <p className="mt-6 max-w-3xl text-ink-600 leading-relaxed text-lg">{product.overview}</p>
        </section>

        <section>
          <SectionHeading eyebrow="Capabilities" title="Key Features" />
          <div className="mt-8">
            <FeatureGrid items={product.keyFeatures} />
          </div>
        </section>

        <section>
          <SectionHeading eyebrow="Specifications" title="Technical Specifications" />
          <div className="mt-8">
            <SpecTable groups={product.specGroups} />
          </div>
        </section>

        <section className="grid gap-10 md:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Deployment" title="Applications" />
            <ul className="mt-6 space-y-2">
              {product.applications.map((a) => (
                <li key={a} className="flex items-start gap-2 text-ink-600">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent-500" aria-hidden />
                  {a}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SectionHeading eyebrow="Configuration" title="Customization Options" />
            <ul className="mt-6 space-y-2">
              {product.customizationOptions.map((c) => (
                <li key={c} className="flex items-start gap-2 text-ink-600">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent-500" aria-hidden />
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {product.standards.length > 0 ? (
          <section>
            <SectionHeading eyebrow="Standards" title="Compliance & Standards" />
            <div className="mt-6 flex flex-wrap gap-3">
              {product.standards.map((s) => (
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
          <SectionHeading eyebrow="FAQ" title="Frequently Asked Questions" />
          <div className="mt-8 max-w-3xl">
            <Accordion items={product.faqs} />
          </div>
        </section>

        <section>
          <InquiryCTA productName={product.name} />
        </section>

        {product.relatedSolutionSlugs.length > 0 ? (
          <section>
            <SectionHeading eyebrow="Solutions" title="Related Solutions" />
            <div className="mt-8">
              <RelatedSolutions slugs={product.relatedSolutionSlugs} />
            </div>
          </section>
        ) : null}

        {product.relatedProductSlugs.length > 0 ? (
          <section>
            <SectionHeading eyebrow="Explore More" title="Related Products" />
            <div className="mt-8">
              <RelatedProducts slugs={product.relatedProductSlugs} />
            </div>
          </section>
        ) : null}
      </div>
    </div>
  );
}
