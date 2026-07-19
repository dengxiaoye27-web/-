import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Accordion } from "@/components/ui/Accordion";
import { RelatedProducts } from "@/components/product/RelatedProducts";
import { Button } from "@/components/ui/Button";
import { JsonLd } from "@/components/seo/JsonLd";
import { getSolution, solutions } from "@/data/solutions";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";

export function generateStaticParams() {
  return solutions.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const solution = getSolution(slug);
  if (!solution) return {};
  return {
    title: solution.name,
    description: solution.tagline,
    alternates: { canonical: `/solutions/${solution.slug}` },
  };
}

export default async function SolutionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const solution = getSolution(slug);
  if (!solution) notFound();

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Solutions", href: "/solutions" },
    { label: solution.name },
  ];

  return (
    <div className="bg-white">
      <JsonLd
        data={[
          faqSchema(solution.faqs),
          breadcrumbSchema(breadcrumbItems.map((i) => ({ label: i.label, href: i.href ?? `/solutions/${solution.slug}` }))),
        ]}
      />

      <div className="bg-navy-950 text-white py-16 md:py-24">
        <div className="container-page">
          <Breadcrumbs items={breadcrumbItems} />
          <h1 className="mt-6 text-4xl md:text-6xl font-semibold tracking-tight max-w-3xl">
            {solution.name}
          </h1>
          <p className="mt-4 max-w-2xl text-white/70 text-lg">{solution.tagline}</p>
        </div>
      </div>

      <div className="container-page py-16 md:py-20 space-y-20">
        <section className="grid gap-10 md:grid-cols-2">
          <div>
            <SectionHeading eyebrow="The Problem" title="Customer Challenge" />
            <p className="mt-6 text-ink-600 leading-relaxed">{solution.customerChallenge}</p>
          </div>
          <div>
            <SectionHeading eyebrow="The Approach" title="Solution Architecture" />
            <p className="mt-6 text-ink-600 leading-relaxed">{solution.solutionArchitecture}</p>
          </div>
        </section>

        <section>
          <SectionHeading eyebrow="System" title="System Components" />
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {solution.systemComponents.map((c) => (
              <div key={c.name} className="rounded-2xl border border-line-200 p-6">
                <h3 className="text-lg font-semibold text-ink-900">{c.name}</h3>
                <p className="mt-2 text-sm text-ink-600 leading-relaxed">{c.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-navy-700 bg-navy-950 p-8 md:p-10 text-white">
          <SectionHeading light eyebrow="Architecture" title="How It Works" />
          <ol className="mt-8 space-y-4">
            {solution.howItWorks.map((step, i) => (
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
          <SectionHeading eyebrow="Configuration" title="Product Configuration" />
          <div className="mt-8">
            <RelatedProducts slugs={solution.relatedProductSlugs} />
          </div>
        </section>

        <section>
          <SectionHeading eyebrow="Advantages" title="Technical Advantages" />
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {solution.technicalAdvantages.map((a) => (
              <li key={a} className="flex items-start gap-3 rounded-xl border border-line-200 px-4 py-3 text-sm text-ink-900">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-500" aria-hidden />
                {a}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <SectionHeading eyebrow="Process" title="Deployment Process" />
          <ol className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {solution.deploymentProcess.map((step, i) => (
              <li key={step.step} className="rounded-2xl border border-line-200 p-6">
                <p className="eyebrow mb-2">Step {i + 1}</p>
                <h3 className="text-lg font-semibold text-ink-900">{step.step}</h3>
                <p className="mt-2 text-sm text-ink-600 leading-relaxed">{step.description}</p>
              </li>
            ))}
          </ol>
        </section>

        <section>
          <SectionHeading eyebrow="Deployment" title="Typical Applications" />
          <div className="mt-6 flex flex-wrap gap-3">
            {solution.typicalApplications.map((a) => (
              <span key={a} className="rounded-full border border-line-200 px-4 py-1.5 text-sm font-medium text-ink-900">
                {a}
              </span>
            ))}
          </div>
        </section>

        <section>
          <SectionHeading eyebrow="FAQ" title="Frequently Asked Questions" />
          <div className="mt-8 max-w-3xl">
            <Accordion items={solution.faqs} />
          </div>
        </section>

        <section className="rounded-2xl border border-navy-700 bg-navy-900 text-white p-8 md:p-10 text-center">
          <h3 className="text-2xl font-semibold">Request This Solution</h3>
          <p className="mt-2 text-white/60 max-w-xl mx-auto">
            Tell us about your project and our engineering team will propose a
            configuration matched to your site requirements.
          </p>
          <div className="mt-6 flex justify-center">
            <Button href="/contact">Request Solution</Button>
          </div>
        </section>
      </div>
    </div>
  );
}
