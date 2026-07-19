import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ProductFilterGrid } from "@/components/product/ProductFilterGrid";
import { productCategories } from "@/data/categories";
import { products } from "@/data/products";

export const metadata: Metadata = {
  title: "Data Center Infrastructure Products",
  description:
    "Browse Haisen's full range of data center infrastructure products — PDUs, UPS systems, network and server cabinets, micro modular and containerized data centers, cooling and liquid cooling, raised flooring, cable management and energy storage.",
  alternates: { canonical: "/products" },
};

export default function ProductsPage() {
  return (
    <div className="bg-white">
      <div className="bg-navy-950 text-white py-16 md:py-24">
        <div className="container-page">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Products" }]} />
          <h1 className="mt-6 text-4xl md:text-6xl font-semibold tracking-tight max-w-3xl">
            Data Center Infrastructure Products
          </h1>
          <p className="mt-4 max-w-2xl text-white/70 text-lg">
            Power distribution, UPS, cabinets, modular and containerized data
            centers, cooling, flooring, cable management and energy storage —
            manufactured by Haisen for data center, telecom and industrial
            deployment.
          </p>
        </div>
      </div>

      <div className="container-page py-20">
        <SectionHeading eyebrow="Categories" title="Browse by Category" />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {productCategories.map((c) => (
            <a
              key={c.slug}
              href={`/products/${c.slug}`}
              className="rounded-2xl border border-line-200 p-6 hover:border-accent-500/60 transition-colors"
            >
              <h2 className="text-lg font-semibold text-ink-900">{c.name}</h2>
              <p className="mt-2 text-sm text-ink-600 leading-relaxed">{c.shortDescription}</p>
            </a>
          ))}
        </div>

        <div className="mt-20">
          <SectionHeading eyebrow="Full Catalog" title="All Products" />
          <div className="mt-8">
            <ProductFilterGrid products={products} categories={productCategories} />
          </div>
        </div>
      </div>
    </div>
  );
}
