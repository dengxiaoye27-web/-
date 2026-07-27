import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Accordion } from "@/components/ui/Accordion";
import { RelatedProducts } from "@/components/product/RelatedProducts";
import { Button } from "@/components/ui/Button";
import { JsonLd } from "@/components/seo/JsonLd";
import { techIllustrations, solutionIllustrationKey } from "@/components/ui/TechIllustration";
import { getSolution, solutions } from "@/data/solutions";
import { getSolutionContent } from "@/i18n/content/solutions";
import { getSolutionsUiMessages, getCommonMessages } from "@/i18n/messages";
import { isLocale, defaultLocale, Locale } from "@/i18n/config";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";

export function generateStaticParams() {
  return solutions.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale, slug } = await params;
  const solution = getSolution(slug);
  if (!solution) return {};
  const locale: Locale = isLocale(rawLocale) ? rawLocale : defaultLocale;
  const content = getSolutionContent(slug, locale, solution);
  return {
    title: content.name,
    description: content.tagline,
    alternates: { canonical: `/solutions/${solution.slug}` },
  };
}

export default async function SolutionPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale: rawLocale, slug } = await params;
  const solution = getSolution(slug);
  if (!solution) notFound();

  const locale: Locale = isLocale(rawLocale) ? rawLocale : defaultLocale;
  const content = getSolutionContent(slug, locale, solution);
  const ui = getSolutionsUiMessages(locale);
  const common = getCommonMessages(locale);

  const breadcrumbItems = [
    { label: common.nav.home, href: "/" },
    { label: common.nav.solutions, href: "/solutions" },
    { label: content.name },
  ];

  return (
    <div className="bg-white">
      <JsonLd
        data={[
          faqSchema(content.faqs),
          breadcrumbSchema(breadcrumbItems.map((i) => ({ label: i.label, href: i.href ?? `/solutions/${solution.slug}` }))),
        ]}
      />

      <div className="bg-navy-950 text-white py-16 md:py-24 grid-texture">
        <div className="container-page">
          <Breadcrumbs items={breadcrumbItems} />
          <h1 className="mt-6 text-4xl md:text-6xl font-semibold tracking-tight max-w-3xl">
            {content.name}
          </h1>
          <p className="mt-4 max-w-2xl text-white/70 text-lg">{content.tagline}</p>
        </div>
      </div>

      <div className="container-page py-16 md:py-20 space-y-20">
        <section className="rounded-2xl border border-line-200 bg-paper-50 grid-texture-light overflow-hidden">
          <div className="relative aspect-[21/9]">
            {(() => {
              const key = solutionIllustrationKey[solution.slug] ?? "module";
              const Illustration = techIllustrations[key];
              return (
                <div className="absolute inset-0 p-10 md:p-16 text-navy-900/70">
                  <Illustration />
                </div>
              );
            })()}
          </div>
        </section>

        <section className="grid gap-10 md:grid-cols-2">
          <div>
            <SectionHeading eyebrow={ui.detail.challengeEyebrow} title={ui.detail.challengeTitle} />
            <p className="mt-6 text-ink-600 leading-relaxed">{content.customerChallenge}</p>
          </div>
          <div>
            <SectionHeading eyebrow={ui.detail.architectureEyebrow} title={ui.detail.architectureTitle} />
            <p className="mt-6 text-ink-600 leading-relaxed">{content.solutionArchitecture}</p>
          </div>
        </section>

        <section>
          <SectionHeading eyebrow={ui.detail.systemEyebrow} title={ui.detail.systemTitle} />
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {content.systemComponents.map((c) => (
              <div key={c.name} className="rounded-2xl border border-line-200 p-6">
                <h3 className="text-lg font-semibold text-ink-900">{c.name}</h3>
                <p className="mt-2 text-sm text-ink-600 leading-relaxed">{c.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-navy-700 bg-navy-950 p-8 md:p-10 text-white">
          <SectionHeading light eyebrow={ui.detail.howEyebrow} title={ui.detail.howTitle} />
          <ol className="mt-8 space-y-4">
            {content.howItWorks.map((step, i) => (
              <li key={step} className="flex gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent-500 text-sm font-semibold">
                  {i + 1}
                </span>
                <p className="text-white/80 leading-relaxed pt-1">{step}</p>
              </li>
            ))}
          </ol>
        </section>

        <section>
          <SectionHeading eyebrow={ui.detail.configEyebrow} title={ui.detail.configTitle} />
          <div className="mt-8">
            <RelatedProducts slugs={solution.relatedProductSlugs} />
          </div>
        </section>

        <section>
          <SectionHeading eyebrow={ui.detail.advantagesEyebrow} title={ui.detail.advantagesTitle} />
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {content.technicalAdvantages.map((a) => (
              <li key={a} className="flex items-start gap-3 rounded-xl border border-line-200 px-4 py-3 text-sm text-ink-900">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-500" aria-hidden />
                {a}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <SectionHeading eyebrow={ui.detail.processEyebrow} title={ui.detail.processTitle} />
          <ol className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {content.deploymentProcess.map((step, i) => (
              <li key={step.step} className="rounded-2xl border border-line-200 p-6">
                <p className="eyebrow mb-2">{ui.detail.stepLabel} {i + 1}</p>
                <h3 className="text-lg font-semibold text-ink-900">{step.step}</h3>
                <p className="mt-2 text-sm text-ink-600 leading-relaxed">{step.description}</p>
              </li>
            ))}
          </ol>
        </section>

        <section>
          <SectionHeading eyebrow={ui.detail.appsEyebrow} title={ui.detail.appsTitle} />
          <div className="mt-6 flex flex-wrap gap-3">
            {content.typicalApplications.map((a) => (
              <span key={a} className="rounded-full border border-line-200 px-4 py-1.5 text-sm font-medium text-ink-900">
                {a}
              </span>
            ))}
          </div>
        </section>

        <section>
          <SectionHeading eyebrow={ui.detail.faqEyebrow} title={ui.detail.faqTitle} />
          <div className="mt-8 max-w-3xl">
            <Accordion items={content.faqs} />
          </div>
        </section>

        <section className="rounded-2xl border border-navy-700 bg-navy-900 text-white p-8 md:p-10 text-center">
          <h3 className="text-2xl font-semibold">{ui.detail.ctaTitle}</h3>
          <p className="mt-2 text-white/60 max-w-xl mx-auto">{ui.detail.ctaDescription}</p>
          <div className="mt-6 flex justify-center">
            <Button href="/contact">{ui.detail.ctaButton}</Button>
          </div>
        </section>
      </div>
    </div>
  );
}
