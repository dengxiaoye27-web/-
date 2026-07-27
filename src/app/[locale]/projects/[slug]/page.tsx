import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { JsonLd } from "@/components/seo/JsonLd";
import { getProject, projects } from "@/data/projects";
import { breadcrumbSchema } from "@/lib/schema";
import { getProjectContent } from "@/i18n/content/projects";
import { getProjectsUiMessages, getCommonMessages } from "@/i18n/messages";
import { isLocale, defaultLocale, Locale } from "@/i18n/config";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale, slug } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : defaultLocale;
  const project = getProject(slug);
  if (!project) return {};
  const content = getProjectContent(slug, locale, project);
  return {
    title: content.title,
    description: content.summary,
    alternates: { canonical: `/projects/${project.slug}` },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale: rawLocale, slug } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : defaultLocale;
  const project = getProject(slug);
  if (!project) notFound();

  const content = getProjectContent(slug, locale, project);
  const t = getProjectsUiMessages(locale);
  const common = getCommonMessages(locale);

  const breadcrumbItems = [
    { label: common.nav.home, href: "/" },
    { label: common.nav.projects, href: "/projects" },
    { label: content.title },
  ];

  return (
    <div className="bg-white">
      <JsonLd
        data={breadcrumbSchema(
          breadcrumbItems.map((i) => ({ label: i.label, href: i.href ?? `/projects/${project.slug}` }))
        )}
      />

      <div className="hero-band">
        <div className="container-page">
          <Breadcrumbs items={breadcrumbItems} />
          <p className="eyebrow mt-6 mb-3">
            {content.industry} · {content.location}
          </p>
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight max-w-3xl">
            {content.title}
          </h1>
          <p className="mt-4 max-w-2xl text-white/70 text-lg">{content.summary}</p>
        </div>
      </div>

      <div className="container-page py-16 md:py-20 space-y-16">
        <section className="grid gap-10 md:grid-cols-2">
          <div>
            <SectionHeading eyebrow={t.backgroundEyebrow} title={t.backgroundTitle} />
            <p className="mt-6 text-ink-600 leading-relaxed">{content.background}</p>
          </div>
          <div>
            <SectionHeading eyebrow={t.challengeEyebrow} title={t.challengeTitle} />
            <p className="mt-6 text-ink-600 leading-relaxed">{content.challenge}</p>
          </div>
        </section>

        <section>
          <SectionHeading eyebrow={t.requirementsEyebrow} title={t.requirementsTitle} />
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {content.requirements.map((r) => (
              <li key={r} className="flex items-start gap-3 rounded-xl border border-line-200 px-4 py-3 text-sm text-ink-900">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-500" aria-hidden />
                {r}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <SectionHeading eyebrow={t.solutionEyebrow} title={t.solutionTitle} />
          <p className="mt-6 max-w-3xl text-ink-600 leading-relaxed">{content.solution}</p>
        </section>

        <section className="grid gap-10 md:grid-cols-2">
          <div>
            <SectionHeading eyebrow={t.productsEyebrow} title={t.productsTitle} />
            <div className="mt-6 flex flex-wrap gap-3">
              {content.productsUsed.map((p) => (
                <span key={p} className="rounded-full border border-line-200 px-4 py-1.5 text-sm font-medium text-ink-900">
                  {p}
                </span>
              ))}
            </div>
          </div>
          <div>
            <SectionHeading eyebrow={t.configEyebrow} title={t.configTitle} />
            <dl className="mt-6 divide-y divide-line-200 border-y border-line-200">
              {content.technicalConfiguration.map((item) => (
                <div key={item.label} className="flex justify-between py-3 text-sm">
                  <dt className="text-ink-600">{item.label}</dt>
                  <dd className="font-mono text-ink-900">{item.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section>
          <SectionHeading eyebrow={t.implementationEyebrow} title={t.implementationTitle} />
          <p className="mt-6 max-w-3xl text-ink-600 leading-relaxed">{content.implementation}</p>
        </section>

        <section>
          <SectionHeading eyebrow={t.resultsEyebrow} title={t.resultsTitle} />
          <ul className="mt-6 space-y-2">
            {content.results.map((r) => (
              <li key={r} className="flex items-start gap-2 text-ink-600">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent-500" aria-hidden />
                {r}
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-2xl border border-navy-700 bg-navy-900 text-white p-8 md:p-10 text-center">
          <h3 className="text-2xl font-semibold">{t.ctaTitle}</h3>
          <div className="mt-6 flex justify-center">
            <Button href="/contact">{t.ctaButton}</Button>
          </div>
        </section>
      </div>
    </div>
  );
}
