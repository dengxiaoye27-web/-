import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StatTile } from "@/components/ui/StatTile";
import { Button } from "@/components/ui/Button";
import { certifications } from "@/data/certifications";
import { CertificateGallery } from "@/components/sections/CertificateGallery";
import { getAboutMessages, getCommonMessages } from "@/i18n/messages";
import { isLocale, defaultLocale, Locale } from "@/i18n/config";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Guangdong Haisen New Building Materials Technology Co., Ltd. is a factory-direct manufacturer of data center infrastructure and critical power products, offering OEM/ODM, engineering support and global project delivery.",
  alternates: { canonical: "/about" },
};

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : defaultLocale;
  const t = getAboutMessages(locale);
  const common = getCommonMessages(locale);

  return (
    <div className="bg-white">
      <div className="bg-navy-950 text-white py-16 md:py-24">
        <div className="container-page">
          <Breadcrumbs items={[{ label: common.nav.home, href: "/" }, { label: common.nav.about }]} />
          <h1 className="mt-6 text-4xl md:text-6xl font-semibold tracking-tight max-w-3xl">
            {t.hero.title}
          </h1>
          <p className="mt-4 max-w-2xl text-white/70 text-lg">{t.hero.subtitle}</p>
        </div>
      </div>

      <div className="container-page py-16 md:py-20 space-y-20">
        <section id="overview">
          <SectionHeading eyebrow={t.overview.eyebrow} title={t.overview.title} />
          <div className="mt-8 grid gap-10 md:grid-cols-2">
            <p className="text-ink-600 leading-relaxed">{t.overview.paragraph1}</p>
            <p className="text-ink-600 leading-relaxed">{t.overview.paragraph2}</p>
          </div>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8">
            {t.overview.stats.map((stat) => (
              <StatTile key={stat.label} value={stat.value} label={stat.label} />
            ))}
          </div>
        </section>

        <section id="factory">
          <SectionHeading eyebrow={t.factory.eyebrow} title={t.factory.title} />
          <p className="mt-6 max-w-3xl text-ink-600 leading-relaxed">{t.factory.paragraph}</p>
        </section>

        <section id="quality-control">
          <SectionHeading eyebrow={t.qualityControl.eyebrow} title={t.qualityControl.title} />
          <p className="mt-6 max-w-3xl text-ink-600 leading-relaxed">{t.qualityControl.paragraph}</p>
        </section>

        <section id="certifications">
          <SectionHeading eyebrow={t.certifications.eyebrow} title={t.certifications.title} />
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6">
            {certifications.map((cert) => (
              <div key={cert.name} className="rounded-xl border border-line-200 px-5 py-6 text-center">
                <p className="text-lg font-semibold text-ink-900">{cert.name}</p>
                <p className="mt-1 text-xs text-ink-600">{cert.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <p className="text-sm text-ink-600 mb-6">{t.certifications.caption}</p>
            <CertificateGallery />
          </div>
        </section>

        <section id="global-markets">
          <SectionHeading eyebrow={t.globalMarkets.eyebrow} title={t.globalMarkets.title} />
          <p className="mt-6 max-w-3xl text-ink-600 leading-relaxed">{t.globalMarkets.paragraph}</p>
        </section>

        <section id="history">
          <SectionHeading eyebrow={t.engineering.eyebrow} title={t.engineering.title} />
          <p className="mt-6 max-w-3xl text-ink-600 leading-relaxed">{t.engineering.paragraph}</p>
        </section>

        <section className="rounded-2xl border border-navy-700 bg-navy-900 text-white p-8 md:p-10 text-center">
          <h3 className="text-2xl font-semibold">{t.cta.title}</h3>
          <div className="mt-6 flex justify-center">
            <Button href="/contact">{t.cta.button}</Button>
          </div>
        </section>
      </div>
    </div>
  );
}
