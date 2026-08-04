import type { Metadata } from "next";
import Image from "next/image";
import fs from "node:fs";
import path from "node:path";
import Link from "@/components/ui/LocaleLink";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StatTile } from "@/components/ui/StatTile";
import { Reveal } from "@/components/ui/Reveal";
import { ArchitectureDiagram } from "@/components/sections/ArchitectureDiagram";
import { HeroCarousel } from "@/components/sections/HeroCarousel";
import { CertificationCards } from "@/components/sections/CertificationCards";
import {
  coreSolutionIcons,
  whyWandtungIcons,
  IconFactory,
  IconModule,
  IconAntenna,
  IconQuality,
  IconCabinet,
  IconBattery,
  IconGlobe,
  IconChip,
  IconPin,
} from "@/components/ui/SectionIcons";
import { getFeaturedProducts } from "@/data/products";
import { articles } from "@/data/articles";
import { getArticleContent } from "@/i18n/content/articles";
import { getHomeMessages, getCommonMessages } from "@/i18n/messages";
import { isLocale, defaultLocale, Locale } from "@/i18n/config";

export const metadata: Metadata = {
  title: "Data Center Infrastructure & Critical Power Solutions",
  description:
    "Wandtung is a China-based manufacturer of data center infrastructure and critical power solutions — PDUs, UPS, cabinets, micro modular and containerized data centers, liquid cooling and energy storage — for data center, telecom, government and industrial customers worldwide.",
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

// Matches coreSolutionHrefs order.
const coreSolutionSlugs = [
  "critical-power",
  "power-distribution",
  "network-cabinets",
  "micro-modular",
  "containerized",
  "liquid-cooling",
  "energy-storage",
];

function getCoreSolutionImage(slug: string) {
  const relPath = `/images/core-solutions/${slug}.jpg`;
  const absPath = path.join(process.cwd(), "public", relPath);
  return fs.existsSync(absPath) ? relPath : null;
}

// Matches t.architecture.nodes order: Grid Power, UPS, PDU, Rack, Cooling,
// Monitoring, Fire Protection, Liquid Cooling, Energy Storage
const architectureNodeHrefs = [
  "/solutions/critical-power",
  "/products/ups-systems",
  "/products/power-distribution",
  "/products/network-server-cabinets",
  "/products/cooling-solutions",
  "/solutions/smart-power-distribution",
  "/solutions/data-center-infrastructure",
  "/solutions/liquid-cooling",
  "/products/energy-storage",
];

// Matches t.industries.items order: Data Centers, Telecommunications,
// Banking, Government, Energy, Industrial, Cloud Computing, Edge Computing
const industrySlugs = ["datacenter", "telecom", "finance", "government", "energy", "industry", "cloud", "edge"];
const industryIcons = [IconModule, IconAntenna, IconQuality, IconCabinet, IconBattery, IconFactory, IconGlobe, IconChip];

function getIndustryImage(slug: string) {
  const relPath = `/images/industries/${slug}.jpg`;
  const absPath = path.join(process.cwd(), "public", relPath);
  return fs.existsSync(absPath) ? relPath : null;
}

function getFactoryImage() {
  const relPath = `/images/factory/01-exterior.png`;
  const absPath = path.join(process.cwd(), "public", relPath);
  return fs.existsSync(absPath) ? relPath : null;
}

function getGlobalMarketImage() {
  const relPath = `/images/global-market/banner.png`;
  const absPath = path.join(process.cwd(), "public", relPath);
  return fs.existsSync(absPath) ? relPath : null;
}

const exhibitionImages = [
  "/images/exhibitions/03-booth-presentation.png",
  "/images/exhibitions/08-liquid-cooling-booth.png",
  "/images/exhibitions/05-equipment-briefing.png",
  "/images/exhibitions/04-energy-storage-briefing.png",
  "/images/exhibitions/07-booth-visit.png",
  "/images/exhibitions/01-hall-networking.png",
  "/images/exhibitions/02-conference-networking.png",
  "/images/exhibitions/06-industry-networking.png",
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
      {/* 01 Hero Carousel (combines visual hero + primary CTAs) */}
      <h1 className="sr-only">{t.hero.title}</h1>
      <HeroCarousel ctaPrimary={t.hero.ctaPrimary} ctaSecondary={t.hero.ctaSecondary} />

      {/* 02 Trusted Partner */}
      <section className="bg-white py-20 md:py-28">
        <div className="container-page">
          <Reveal>
            <div className="grid gap-10 md:grid-cols-2 md:items-center">
              <SectionHeading
                eyebrow={t.trustedPartner.eyebrow}
                title={t.trustedPartner.title}
                description={t.trustedPartner.description}
              />
              <div className="relative aspect-[4/3] rounded-2xl bg-paper-50 shadow-lg shadow-ink-900/10 overflow-hidden flex items-center justify-center">
                {getFactoryImage() ? (
                  <Image
                    src={getFactoryImage()!}
                    alt={t.trustedPartner.title}
                    fill
                    className="object-cover"
                    sizes="(min-width: 768px) 50vw, 100vw"
                  />
                ) : (
                  <div className="flex flex-col items-center gap-2 text-ink-600/50">
                    <IconFactory className="h-12 w-12" />
                    <span className="text-sm">{t.trustedPartner.factoryPhotoPlaceholder}</span>
                  </div>
                )}
              </div>
            </div>
          </Reveal>
          <div className="mt-16 md:mt-20 flex flex-wrap gap-4">
            {t.trustedPartner.stats.map((stat) => (
              <div
                key={stat.label}
                className="flex-1 min-w-[150px] rounded-2xl bg-paper-50 px-6 py-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-ink-900/10"
              >
                <StatTile value={stat.value} label={stat.label} />
              </div>
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
            {t.coreSolutions.items.map((item, i) => {
              const Icon = coreSolutionIcons[i] ?? coreSolutionIcons[0];
              const image = getCoreSolutionImage(coreSolutionSlugs[i]);
              return (
                <Card key={item.title} href={coreSolutionHrefs[i]}>
                  <div className="relative mb-5 -mx-6 -mt-6 md:-mx-8 md:-mt-8 aspect-video rounded-t-2xl bg-paper-50 overflow-hidden flex items-center justify-center">
                    {image ? (
                      <Image
                        src={image}
                        alt={item.title}
                        fill
                        className="object-cover"
                        sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                      />
                    ) : (
                      <Icon className="h-10 w-10 text-ink-600/20" />
                    )}
                  </div>
                  <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent-500/10 text-accent-500 transition-colors group-hover:bg-accent-500 group-hover:text-white">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-ink-900">{item.title}</h3>
                  <p className="mt-2 text-sm text-ink-600 leading-relaxed">{item.description}</p>
                  <span className="mt-4 inline-block text-sm font-medium text-accent-500 group-hover:translate-x-1 transition-transform">
                    {common.nav.learnMore} →
                  </span>
                </Card>
              );
            })}
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
                {product.images?.[0] ? (
                  <div className="relative mb-4 aspect-square -mx-6 -mt-6 md:-mx-8 md:-mt-8 bg-paper-50 rounded-t-2xl overflow-hidden flex items-center justify-center">
                    <Image
                      src={product.images[0]}
                      alt={product.name}
                      fill
                      className="object-contain p-6"
                      sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    />
                  </div>
                ) : null}
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
      <section className="bg-navy-950 py-12 md:py-16 grid-texture">
        <div className="container-page">
          <Reveal>
            <SectionHeading
              light
              eyebrow={t.architecture.eyebrow}
              title={t.architecture.title}
              description={t.architecture.description}
            />
          </Reveal>
          <div className="mt-8">
            <ArchitectureDiagram
              nodes={t.architecture.nodes}
              hrefs={architectureNodeHrefs}
              caption={t.architecture.caption}
            />
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
            {t.industries.items.map((industry, i) => {
              const image = getIndustryImage(industrySlugs[i]);
              const Icon = industryIcons[i] ?? industryIcons[0];
              return (
                <div
                  key={industry.name}
                  className="group relative aspect-[4/3] overflow-hidden rounded-xl border border-transparent transition-all duration-300 hover:border-accent-500 hover:-translate-y-1 hover:shadow-[0_12px_32px_-12px_rgba(11,13,18,0.25)]"
                >
                  {image ? (
                    <Image
                      src={image}
                      alt={industry.name}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(min-width: 768px) 25vw, 50vw"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-navy-800 to-navy-950">
                      <Icon className="h-10 w-10 text-white/15" />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1220] via-[#0B1220]/40 to-transparent transition-opacity duration-300 group-hover:opacity-90" />
                  <div className="absolute inset-x-0 bottom-0 p-4">
                    <p className="text-base font-bold text-white">{industry.name}</p>
                    <p className="mt-0.5 text-xs text-accent-500">{industry.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 07 Why Wandtung */}
      <section className="bg-paper-50 py-20 md:py-28">
        <div className="container-page">
          <Reveal>
            <SectionHeading eyebrow={t.whyWandtung.eyebrow} title={t.whyWandtung.title} />
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {t.whyWandtung.items.map((item, i) => {
              const Icon = whyWandtungIcons[i] ?? whyWandtungIcons[0];
              return (
                <Card key={item.title}>
                  <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent-500/10 text-accent-500 transition-colors group-hover:bg-accent-500 group-hover:text-white">
                    <Icon className="h-5.5 w-5.5" />
                  </div>
                  <h3 className="text-lg font-semibold text-ink-900">{item.title}</h3>
                  <p className="mt-2 text-sm text-ink-600 leading-relaxed">{item.description}</p>
                </Card>
              );
            })}
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
          {getGlobalMarketImage() ? (
            <div className="relative mt-10 aspect-[2/1] md:aspect-[21/9] w-full overflow-hidden rounded-2xl">
              <Image src={getGlobalMarketImage()!} alt={t.globalProjects.title} fill className="object-cover" sizes="100vw" />
            </div>
          ) : null}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-4">
            {t.globalProjects.markets.map((market) => (
              <div
                key={market}
                className="group flex items-center justify-center gap-2 rounded-xl border border-navy-700 bg-navy-900 px-5 py-6 text-center transition-all duration-300 hover:border-accent-500 hover:-translate-y-0.5"
              >
                <IconPin className="h-4 w-4 shrink-0 text-accent-500" />
                <p className="font-medium">{market}</p>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Link href="/contact" className="text-sm font-medium text-accent-400 hover:text-accent-500">
              {t.globalProjects.viewProjects} →
            </Link>
          </div>
        </div>
      </section>

      {/* 08b Exhibition Footprints */}
      <section className="bg-paper-50 py-20 md:py-28">
        <div className="container-page">
          <Reveal>
            <SectionHeading
              eyebrow={t.exhibitions.eyebrow}
              title={t.exhibitions.title}
              description={t.exhibitions.description}
            />
          </Reveal>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
            {exhibitionImages.map((src) => (
              <div key={src} className="group relative aspect-[4/3] overflow-hidden rounded-xl bg-navy-900">
                <Image
                  src={src}
                  alt={t.exhibitions.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(min-width: 768px) 25vw, 50vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 09 Certifications */}
      <section className="bg-white py-20 md:py-28">
        <div className="container-page">
          <Reveal>
            <SectionHeading
              eyebrow={t.certifications.eyebrow}
              title={t.certifications.title}
              description={t.certifications.description}
            />
          </Reveal>
          <div className="mt-12">
            <CertificationCards heldByPartnerLabel={t.certifications.heldByPartner} />
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
            {latestArticles.map((article) => {
              const content = getArticleContent(article.slug, locale, article);
              return (
                <Card key={article.slug} href={`/resources/blog/${article.slug}`}>
                  <p className="eyebrow mb-2">{content.category}</p>
                  <h3 className="text-lg font-semibold text-ink-900">{content.title}</h3>
                  <p className="mt-2 text-sm text-ink-600 leading-relaxed">{content.excerpt}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* 11 Final CTA */}
      <section className="relative overflow-hidden bg-navy-950 py-20 md:py-28 text-white text-center grid-texture">
        <div
          className="absolute inset-0 opacity-50"
          style={{
            backgroundImage:
              "radial-gradient(circle at 50% 120%, rgba(0,145,255,0.25), transparent 55%)",
          }}
          aria-hidden
        />
        <div className="container-page relative">
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
