import type { Metadata } from "next";
import Link from "@/components/ui/LocaleLink";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { articles } from "@/data/articles";
import { getArticleContent } from "@/i18n/content/articles";
import { getResourcesUiMessages, getCommonMessages } from "@/i18n/messages";
import { isLocale, defaultLocale, Locale } from "@/i18n/config";

export const metadata: Metadata = {
  title: "Resources & Knowledge Center",
  description:
    "Technical guides, FAQs and knowledge center articles on PDUs, UPS systems, micro modular and containerized data centers, liquid cooling and data center power design.",
  alternates: { canonical: "/resources" },
};

export default async function ResourcesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : defaultLocale;
  const t = getResourcesUiMessages(locale);
  const common = getCommonMessages(locale);

  return (
    <div className="bg-white">
      <div className="bg-navy-950 text-white py-16 md:py-24">
        <div className="container-page">
          <Breadcrumbs items={[{ label: common.nav.home, href: "/" }, { label: common.nav.resources }]} />
          <h1 className="mt-6 text-4xl md:text-6xl font-semibold tracking-tight max-w-3xl">
            {t.hubTitle}
          </h1>
          <p className="mt-4 max-w-2xl text-white/70 text-lg">{t.hubSubtitle}</p>
        </div>
      </div>

      <div className="container-page py-20">
        <SectionHeading eyebrow={t.hubEyebrow} title={t.hubTitle} />
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((a) => {
            const content = getArticleContent(a.slug, locale, a);
            return (
              <Link
                key={a.slug}
                href={`/resources/blog/${a.slug}`}
                className="group block rounded-2xl border border-line-200 p-6 md:p-8 hover:border-accent-500/60 hover:-translate-y-1 transition-all"
              >
                <p className="eyebrow mb-2">{content.category}</p>
                <h2 className="text-lg font-semibold text-ink-900">{content.title}</h2>
                <p className="mt-2 text-sm text-ink-600 leading-relaxed">{content.excerpt}</p>
                <p className="mt-4 text-xs text-ink-600">{content.readingTime}</p>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
