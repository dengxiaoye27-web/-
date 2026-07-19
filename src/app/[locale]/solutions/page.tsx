import type { Metadata } from "next";
import Link from "@/components/ui/LocaleLink";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { solutions } from "@/data/solutions";

export const metadata: Metadata = {
  title: "Data Center & Critical Power Solutions",
  description:
    "Haisen designs complete data center infrastructure, micro modular, containerized, edge, telecom, AI, liquid cooling, critical power, smart power distribution and energy storage solutions.",
  alternates: { canonical: "/solutions" },
};

export default function SolutionsPage() {
  return (
    <div className="bg-white">
      <div className="bg-navy-950 text-white py-16 md:py-24">
        <div className="container-page">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Solutions" }]} />
          <h1 className="mt-6 text-4xl md:text-6xl font-semibold tracking-tight max-w-3xl">
            Data Center & Critical Power Solutions
          </h1>
          <p className="mt-4 max-w-2xl text-white/70 text-lg">
            Haisen designs systems, not just products — engineered around the
            problem a customer needs to solve, then built from our own
            manufactured power, cooling and enclosure products.
          </p>
        </div>
      </div>

      <div className="container-page py-20">
        <SectionHeading eyebrow="Solutions" title="Browse Solutions" />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {solutions.map((s) => (
            <Link
              key={s.slug}
              href={`/solutions/${s.slug}`}
              className="group block rounded-2xl border border-line-200 p-6 md:p-8 hover:border-accent-500/60 hover:-translate-y-1 transition-all"
            >
              <h2 className="text-lg font-semibold text-ink-900">{s.name}</h2>
              <p className="mt-2 text-sm text-ink-600 leading-relaxed">{s.tagline}</p>
              <span className="mt-4 inline-block text-sm font-medium text-accent-500">
                View solution →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
