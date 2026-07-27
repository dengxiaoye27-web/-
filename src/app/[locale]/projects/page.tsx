import type { Metadata } from "next";
import Link from "@/components/ui/LocaleLink";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { projects } from "@/data/projects";
import { getProjectContent } from "@/i18n/content/projects";
import { getProjectsUiMessages, getCommonMessages } from "@/i18n/messages";
import { isLocale, defaultLocale, Locale } from "@/i18n/config";

export const metadata: Metadata = {
  title: "Projects & Case Studies",
  description:
    "Wandtung data center infrastructure project case studies across data center, telecom, government, banking, industrial, energy and overseas deployments.",
  alternates: { canonical: "/projects" },
};

export default async function ProjectsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : defaultLocale;
  const t = getProjectsUiMessages(locale);
  const common = getCommonMessages(locale);

  return (
    <div className="bg-white">
      <div className="hero-band">
        <div className="container-page">
          <Breadcrumbs items={[{ label: common.nav.home, href: "/" }, { label: common.nav.projects }]} />
          <h1 className="mt-6 text-4xl md:text-6xl font-semibold tracking-tight max-w-3xl">
            {t.hubTitle}
          </h1>
          <p className="mt-4 max-w-2xl text-white/70 text-lg">{t.hubSubtitle}</p>
        </div>
      </div>

      <div className="container-page py-20">
        <SectionHeading eyebrow={t.hubEyebrow} title={t.hubTitle} />
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => {
            const content = getProjectContent(p.slug, locale, p);
            return (
              <Link
                key={p.slug}
                href={`/projects/${p.slug}`}
                className="group block rounded-2xl border border-line-200 p-6 md:p-8 transition-all duration-300 hover:border-accent-500/60 hover:-translate-y-1 hover:shadow-[0_12px_32px_-12px_rgba(11,13,18,0.18)]"
              >
                <p className="eyebrow mb-2">
                  {content.industry} · {content.location}
                </p>
                <h2 className="text-lg font-semibold text-ink-900">{content.title}</h2>
                <p className="mt-2 text-sm text-ink-600 leading-relaxed">{content.summary}</p>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
