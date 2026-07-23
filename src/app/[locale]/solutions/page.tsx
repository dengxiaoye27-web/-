import type { Metadata } from "next";
import Link from "@/components/ui/LocaleLink";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { solutionIcons } from "@/components/ui/SectionIcons";
import { solutions } from "@/data/solutions";
import { getSolutionContent } from "@/i18n/content/solutions";
import { getSolutionsUiMessages, getCommonMessages } from "@/i18n/messages";
import { isLocale, defaultLocale, Locale } from "@/i18n/config";

export const metadata: Metadata = {
  title: "Data Center & Critical Power Solutions",
  description:
    "Wandtung designs complete data center infrastructure, micro modular, containerized, edge, telecom, AI, liquid cooling, critical power, smart power distribution and energy storage solutions.",
  alternates: { canonical: "/solutions" },
};

export default async function SolutionsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : defaultLocale;
  const ui = getSolutionsUiMessages(locale);
  const common = getCommonMessages(locale);

  return (
    <div className="bg-white">
      <div className="bg-navy-950 text-white py-16 md:py-24 grid-texture">
        <div className="container-page">
          <Breadcrumbs items={[{ label: common.nav.home, href: "/" }, { label: common.nav.solutions }]} />
          <h1 className="mt-6 text-4xl md:text-6xl font-semibold tracking-tight max-w-3xl">
            {ui.hub.title}
          </h1>
          <p className="mt-4 max-w-2xl text-white/70 text-lg">{ui.hub.subtitle}</p>
        </div>
      </div>

      <div className="container-page py-20">
        <SectionHeading eyebrow={ui.hub.eyebrow} title={ui.hub.browseTitle} />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {solutions.map((s) => {
            const content = getSolutionContent(s.slug, locale, s);
            const Icon = solutionIcons[s.slug];
            return (
              <Link
                key={s.slug}
                href={`/solutions/${s.slug}`}
                className="group block rounded-2xl border border-line-200 p-6 md:p-8 transition-all duration-300 hover:border-accent-500/60 hover:-translate-y-1 hover:shadow-[0_12px_32px_-12px_rgba(11,13,18,0.18)]"
              >
                {Icon ? (
                  <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent-500/10 text-accent-500 transition-colors group-hover:bg-accent-500 group-hover:text-white">
                    <Icon className="h-5.5 w-5.5" />
                  </div>
                ) : null}
                <h2 className="text-lg font-semibold text-ink-900">{content.name}</h2>
                <p className="mt-2 text-sm text-ink-600 leading-relaxed">{content.tagline}</p>
                <span className="mt-4 inline-block text-sm font-medium text-accent-500 group-hover:translate-x-1 transition-transform">
                  {ui.hub.viewSolution} →
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
