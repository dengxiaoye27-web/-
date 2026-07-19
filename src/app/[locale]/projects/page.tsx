import type { Metadata } from "next";
import Link from "@/components/ui/LocaleLink";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects & Case Studies",
  description:
    "Haisen data center infrastructure project case studies across data center, telecom, government, banking, industrial, energy and overseas deployments.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <div className="bg-white">
      <div className="bg-navy-950 text-white py-16 md:py-24">
        <div className="container-page">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Projects" }]} />
          <h1 className="mt-6 text-4xl md:text-6xl font-semibold tracking-tight max-w-3xl">
            Projects & Case Studies
          </h1>
          <p className="mt-4 max-w-2xl text-white/70 text-lg">
            Real deployments across data center, telecom and edge
            infrastructure projects worldwide.
          </p>
        </div>
      </div>

      <div className="container-page py-20">
        <SectionHeading eyebrow="Case Studies" title="Project Center" />
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <Link
              key={p.slug}
              href={`/projects/${p.slug}`}
              className="group block rounded-2xl border border-line-200 p-6 md:p-8 hover:border-accent-500/60 hover:-translate-y-1 transition-all"
            >
              <p className="eyebrow mb-2">
                {p.industry} · {p.location}
              </p>
              <h2 className="text-lg font-semibold text-ink-900">{p.title}</h2>
              <p className="mt-2 text-sm text-ink-600 leading-relaxed">{p.summary}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
