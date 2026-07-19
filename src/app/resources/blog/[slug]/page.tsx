import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Accordion } from "@/components/ui/Accordion";
import { Button } from "@/components/ui/Button";
import { JsonLd } from "@/components/seo/JsonLd";
import { getArticle, articles } from "@/data/articles";
import { articleSchema, breadcrumbSchema, faqSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.excerpt,
    alternates: { canonical: `/resources/blog/${article.slug}` },
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Resources", href: "/resources" },
    { label: article.title },
  ];
  const url = `${siteConfig.url}/resources/blog/${article.slug}`;

  return (
    <div className="bg-white">
      <JsonLd
        data={[
          articleSchema({
            title: article.title,
            description: article.excerpt,
            datePublished: article.publishedAt,
            url,
          }),
          faqSchema(article.faqs),
          breadcrumbSchema(breadcrumbItems.map((i) => ({ label: i.label, href: i.href ?? `/resources/blog/${article.slug}` }))),
        ]}
      />

      <div className="bg-navy-950 text-white py-16 md:py-24">
        <div className="container-page">
          <Breadcrumbs items={breadcrumbItems} />
          <p className="eyebrow mt-6 mb-3">{article.category}</p>
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight max-w-3xl">
            {article.title}
          </h1>
          <p className="mt-4 text-white/60 text-sm">
            {article.publishedAt} · {article.readingTime}
          </p>
        </div>
      </div>

      <div className="container-page py-16 md:py-20">
        <article className="max-w-3xl space-y-10">
          {article.body.map((section) => (
            <div key={section.heading}>
              <h2 className="text-2xl font-semibold text-ink-900">{section.heading}</h2>
              <p className="mt-4 text-ink-600 leading-relaxed">{section.content}</p>
            </div>
          ))}
        </article>

        <div className="max-w-3xl mt-16">
          <h2 className="text-2xl font-semibold text-ink-900 mb-6">Frequently Asked Questions</h2>
          <Accordion items={article.faqs} />
        </div>

        <div className="max-w-3xl mt-16 rounded-2xl border border-navy-700 bg-navy-900 text-white p-8 text-center">
          <h3 className="text-xl font-semibold">Have a related project?</h3>
          <div className="mt-6 flex justify-center">
            <Button href="/contact">Talk to Our Engineering Team</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
