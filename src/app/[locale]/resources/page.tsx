import type { Metadata } from "next";
import Link from "@/components/ui/LocaleLink";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { articles } from "@/data/articles";

export const metadata: Metadata = {
  title: "Resources & Knowledge Center",
  description:
    "Technical guides, FAQs and knowledge center articles on PDUs, UPS systems, micro modular and containerized data centers, liquid cooling and data center power design.",
  alternates: { canonical: "/resources" },
};

export default function ResourcesPage() {
  return (
    <div className="bg-white">
      <div className="bg-navy-950 text-white py-16 md:py-24">
        <div className="container-page">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources" }]} />
          <h1 className="mt-6 text-4xl md:text-6xl font-semibold tracking-tight max-w-3xl">
            Resources & Knowledge Center
          </h1>
          <p className="mt-4 max-w-2xl text-white/70 text-lg">
            Technical guides and answers to the questions data center,
            telecom and procurement teams ask most.
          </p>
        </div>
      </div>

      <div className="container-page py-20">
        <SectionHeading eyebrow="Knowledge Center" title="Latest Articles" />
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((a) => (
            <Link
              key={a.slug}
              href={`/resources/blog/${a.slug}`}
              className="group block rounded-2xl border border-line-200 p-6 md:p-8 hover:border-accent-500/60 hover:-translate-y-1 transition-all"
            >
              <p className="eyebrow mb-2">{a.category}</p>
              <h2 className="text-lg font-semibold text-ink-900">{a.title}</h2>
              <p className="mt-2 text-sm text-ink-600 leading-relaxed">{a.excerpt}</p>
              <p className="mt-4 text-xs text-ink-600">{a.readingTime}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
