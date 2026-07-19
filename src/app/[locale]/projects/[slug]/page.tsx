import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { JsonLd } from "@/components/seo/JsonLd";
import { getProject, projects } from "@/data/projects";
import { breadcrumbSchema } from "@/lib/schema";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.summary,
    alternates: { canonical: `/projects/${project.slug}` },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Projects", href: "/projects" },
    { label: project.title },
  ];

  return (
    <div className="bg-white">
      <JsonLd
        data={breadcrumbSchema(
          breadcrumbItems.map((i) => ({ label: i.label, href: i.href ?? `/projects/${project.slug}` }))
        )}
      />

      <div className="bg-navy-950 text-white py-16 md:py-24">
        <div className="container-page">
          <Breadcrumbs items={breadcrumbItems} />
          <p className="eyebrow mt-6 mb-3">
            {project.industry} · {project.location}
          </p>
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight max-w-3xl">
            {project.title}
          </h1>
          <p className="mt-4 max-w-2xl text-white/70 text-lg">{project.summary}</p>
        </div>
      </div>

      <div className="container-page py-16 md:py-20 space-y-16">
        <section className="grid gap-10 md:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Background" title="Project Background" />
            <p className="mt-6 text-ink-600 leading-relaxed">{project.background}</p>
          </div>
          <div>
            <SectionHeading eyebrow="Problem" title="Customer Challenge" />
            <p className="mt-6 text-ink-600 leading-relaxed">{project.challenge}</p>
          </div>
        </section>

        <section>
          <SectionHeading eyebrow="Scope" title="Project Requirements" />
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {project.requirements.map((r) => (
              <li key={r} className="flex items-start gap-3 rounded-xl border border-line-200 px-4 py-3 text-sm text-ink-900">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-500" aria-hidden />
                {r}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <SectionHeading eyebrow="Approach" title="Haisen Solution" />
          <p className="mt-6 max-w-3xl text-ink-600 leading-relaxed">{project.solution}</p>
        </section>

        <section className="grid gap-10 md:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Products" title="Products Used" />
            <div className="mt-6 flex flex-wrap gap-3">
              {project.productsUsed.map((p) => (
                <span key={p} className="rounded-full border border-line-200 px-4 py-1.5 text-sm font-medium text-ink-900">
                  {p}
                </span>
              ))}
            </div>
          </div>
          <div>
            <SectionHeading eyebrow="Configuration" title="Technical Configuration" />
            <dl className="mt-6 divide-y divide-line-200 border-y border-line-200">
              {project.technicalConfiguration.map((item) => (
                <div key={item.label} className="flex justify-between py-3 text-sm">
                  <dt className="text-ink-600">{item.label}</dt>
                  <dd className="font-mono text-ink-900">{item.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section>
          <SectionHeading eyebrow="Delivery" title="Implementation" />
          <p className="mt-6 max-w-3xl text-ink-600 leading-relaxed">{project.implementation}</p>
        </section>

        <section>
          <SectionHeading eyebrow="Outcome" title="Results" />
          <ul className="mt-6 space-y-2">
            {project.results.map((r) => (
              <li key={r} className="flex items-start gap-2 text-ink-600">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent-500" aria-hidden />
                {r}
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-2xl border border-navy-700 bg-navy-900 text-white p-8 md:p-10 text-center">
          <h3 className="text-2xl font-semibold">Planning a Similar Project?</h3>
          <div className="mt-6 flex justify-center">
            <Button href="/contact">Talk to Our Engineering Team</Button>
          </div>
        </section>
      </div>
    </div>
  );
}
