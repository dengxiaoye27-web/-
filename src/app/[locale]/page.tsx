import type { Metadata } from "next";
import Link from "@/components/ui/LocaleLink";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StatTile } from "@/components/ui/StatTile";
import { Reveal } from "@/components/ui/Reveal";
import { ArchitectureDiagram } from "@/components/sections/ArchitectureDiagram";
import { getFeaturedProducts } from "@/data/products";
import { articles } from "@/data/articles";
import { certifications } from "@/data/certifications";
import { getHomeMessages, getCommonMessages } from "@/i18n/messages";
import { isLocale, defaultLocale, Locale } from "@/i18n/config";

export const metadata: Metadata = {
  title: "Data Center Infrastructure & Critical Power Solutions",
  description:
    "Haisen is a China-based manufacturer of data center infrastructure and critical power solutions — PDUs, UPS, cabinets, micro modular and containerized data centers, liquid cooling and energy storage — for data center, telecom, government and industrial customers worldwide.",
  alternates: { canonical: "/" },
};

const coreSolutionHrefs = [
  "/solutions/critical-power",
  "/products/power-distribution",
  "/products/network-server-cabinets",
  "/solutions/micro-modular-data-center",
  "/solutions/containerized-data-center",
  "/solutions/liquid-cooling",
  "/solutions/energy-storage",
];

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : defaultLocale;
  const t = getHomeMessages(locale);
  const common = getCommonMessages(locale);

  const featuredProducts = getFeaturedProducts();
  const latestArticles = articles.slice(0, 3);

  return (
    <>
      {/* 01 Hero */}
      <section className="relative overflow-hidden bg-navy-950 text-white">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 20%, rgba(0,145,255,0.25), transparent 45%), radial-gradient(circle at 80% 60%, rgba(34,211,238,0.15), transparent 40%)",
          }}
          aria-hidden
        />
        <div className="container-page relative py-28 md:py-40">
          <p className="eyebrow mb-6">{t.hero.eyebrow}</p>
          <h1 className="max-w-4xl text-5xl md:text-7xl font-semibold tracking-tight">
            {t.hero.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg md:text-xl text-white/70 leading-relaxed">
            {t.hero.subtitle}
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button href="/solutions">{t.hero.ctaPrimary}</Button>
            <Button href="/contact" variant="outline">
              {t.hero.ctaSecondary}
            </Button>
          </div>
        </div>
      </section>

      {/* 02 Trusted Partner */}
      <section className="bg-white py-20 md:py-28">
        <div className="container-page">
          <Reveal>
            <SectionHeading
              eyebrow={t.trustedPartner.eyebrow}
              title={t.trustedPartner.title}
              description={t.trustedPartner.description}
            />
          </Reveal>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8">
            {t.trustedPartner.stats.map((stat) => (
              <StatTile key={stat.label} value={stat.value} label={stat.label} />
            ))}
          </div>
        </div>
      </section>

      {/* 03 Core Solutions */}
      <section className="bg-paper-50 py-20 md:py-28">
        <div className="container-page">
          <Reveal>
            <SectionHeading
              eyebrow={t.coreSolutions.eyebrow}
              title={t.coreSolutions.title}
              description={t.coreSolutions.description}
            />
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {t.coreSolutions.items.map((item, i) => (
              <Card key={item.title} href={coreSolutionHrefs[i]}>
                <h3 className="text-xl font-semibold text-ink-900">{item.title}</h3>
                <p className="mt-2 text-sm text-ink-600 leading-relaxed">{item.description}</p>
                <span className="mt-4 inline-block text-sm font-medium text-accent-500 group-hover:translate-x-1 transition-transform">
                  {common.nav.learnMore} →
                </span>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 04 Featured Products */}
      <section className="bg-white py-20 md:py-28">
        <div className="container-page">
          <Reveal>
            <SectionHeading eyebrow={t.featuredProducts.eyebrow} title={t.featuredProducts.title} />
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {featuredProducts.map((product) => (
              <Card key={product.slug} href={`/products/${product.slug}`}>
                <p className="eyebrow mb-2">{product.shortName}</p>
                <h3 className="text-lg font-semibold text-ink-900">{product.name}</h3>
                <p className="mt-2 text-sm text-ink-600 leading-relaxed">{product.tagline}</p>
              </Card>
            ))}
          </div>
          <div className="mt-10">
            <Link href="/products" className="text-sm font-medium text-accent-500 hover:text-accent-400">
              {t.featuredProducts.viewAll} →
            </Link>
          </div>
        </div>
      </section>

      {/* 05 One-Stop Solution */}
      <section className="bg-navy-950 py-20 md:py-28">
        <div className="container-page">
          <Reveal>
            <SectionHeading
              light
              eyebrow={t.architecture.eyebrow}
              title={t.architecture.title}
              description={t.architecture.description}
            />
          </Reveal>
          <div className="mt-12">
            <ArchitectureDiagram nodes={t.architecture.nodes} caption={t.architecture.caption} />
          </div>
        </div>
      </section>

      {/* 06 Industries */}
      <section className="bg-white py-20 md:py-28">
        <div className="container-page">
          <Reveal>
            <SectionHeading eyebrow={t.industries.eyebrow} title={t.industries.title} />
          </Reveal>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
            {t.industries.items.map((industry) => (
              <div
                key={industry}
                className="rounded-xl border border-line-200 px-5 py-6 text-center hover:border-accent-500/60 transition-colors"
              >
                <p className="font-medium text-ink-900">{industry}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 07 Why Haisen */}
      <section className="bg-paper-50 py-20 md:py-28">
        <div className="container-page">
          <Reveal>
            <SectionHeading eyebrow={t.whyHaisen.eyebrow} title={t.whyHaisen.title} />
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {t.whyHaisen.items.map((item) => (
              <Card key={item.title}>
                <h3 className="text-lg font-semibold text-ink-900">{item.title}</h3>
                <p className="mt-2 text-sm text-ink-600 leading-relaxed">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 08 Global Projects */}
      <section className="bg-navy-950 py-20 md:py-28 text-white">
        <div className="container-page">
          <Reveal>
            <SectionHeading
              light
              eyebrow={t.globalProjects.eyebrow}
              title={t.globalProjects.title}
              description={t.globalProjects.description}
            />
          </Reveal>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-4">
            {t.globalProjects.markets.map((market) => (
              <div key={market} className="rounded-xl border border-navy-700 bg-navy-900 px-5 py-6 text-center">
                <p className="font-medium">{market}</p>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Link href="/projects" className="text-sm font-medium text-accent-400 hover:text-accent-500">
              {t.globalProjects.viewProjects} →
            </Link>
          </div>
        </div>
      </section>

      {/* 09 Certifications */}
      <section className="bg-white py-20 md:py-28">
        <div className="container-page">
          <Reveal>
            <SectionHeading eyebrow={t.certifications.eyebrow} title={t.certifications.title} />
          </Reveal>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
            {certifications.map((cert) => (
              <div key={cert.name} className="rounded-xl border border-line-200 px-5 py-6 text-center">
                <p className="text-lg font-semibold text-ink-900">{cert.name}</p>
                <p className="mt-1 text-xs text-ink-600">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10 Latest Insights */}
      <section className="bg-paper-50 py-20 md:py-28">
        <div className="container-page">
          <Reveal>
            <SectionHeading eyebrow={t.insights.eyebrow} title={t.insights.title} />
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {latestArticles.map((article) => (
              <Card key={article.slug} href={`/resources/blog/${article.slug}`}>
                <p className="eyebrow mb-2">{article.category}</p>
                <h3 className="text-lg font-semibold text-ink-900">{article.title}</h3>
                <p className="mt-2 text-sm text-ink-600 leading-relaxed">{article.excerpt}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 11 Final CTA */}
      <section className="bg-navy-950 py-20 md:py-28 text-white text-center">
        <div className="container-page">
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">
            {t.finalCta.title}
          </h2>
          <p className="mt-4 text-lg text-white/70">{t.finalCta.subtitle}</p>
          <div className="mt-10 flex justify-center gap-4">
            <Button href="/contact">{t.hero.ctaSecondary}</Button>
            <Button href="/solutions" variant="outline">
              {t.hero.ctaPrimary}
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
