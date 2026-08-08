import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Accordion } from "@/components/ui/Accordion";
import { Button } from "@/components/ui/Button";
import { RelatedArticles } from "@/components/product/RelatedArticles";
import { JsonLd } from "@/components/seo/JsonLd";
import { getArticle, articles } from "@/data/articles";
import { articleSchema, breadcrumbSchema, faqSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site";
import { getArticleContent } from "@/i18n/content/articles";
import { getResourcesUiMessages, getCommonMessages } from "@/i18n/messages";
import { isLocale, defaultLocale, Locale } from "@/i18n/config";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale, slug } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : defaultLocale;
  const article = getArticle(slug);
  if (!article) return {};
  const content = getArticleContent(slug, locale, article);
  return {
    title: article.metaTitle ? { absolute: article.metaTitle } : content.title,
    description: content.excerpt,
    alternates: { canonical: `/resources/blog/${article.slug}` },
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale: rawLocale, slug } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : defaultLocale;
  const article = getArticle(slug);
  if (!article) notFound();

  const content = getArticleContent(slug, locale, article);
  const t = getResourcesUiMessages(locale);
  const common = getCommonMessages(locale);

  const breadcrumbItems = [
    { label: common.nav.home, href: "/" },
    { label: common.nav.resources, href: "/resources" },
    { label: content.title },
  ];
  const url = `${siteConfig.url}/resources/blog/${article.slug}`;

  return (
    <div className="bg-white">
      <JsonLd
        data={[
          articleSchema({
            title: content.title,
            description: content.excerpt,
            datePublished: article.publishedAt,
            url,
          }),
          faqSchema(content.faqs),
          breadcrumbSchema(breadcrumbItems.map((i) => ({ label: i.label, href: i.href ?? `/resources/blog/${article.slug}` }))),
        ]}
      />

      <div className="hero-band">
        <div className="container-page">
          <Breadcrumbs items={breadcrumbItems} />
          <p className="eyebrow mt-6 mb-3">{content.category}</p>
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight max-w-3xl">
            {content.title}
          </h1>
          <p className="mt-4 text-white/60 text-sm">
            {article.publishedAt} · {content.readingTime}
          </p>
        </div>
      </div>

      <div className="container-page py-16 md:py-20">
        <article className="max-w-3xl space-y-10">
          {content.body.map((section) => (
            <div key={section.heading}>
              <h2 className="text-2xl font-semibold text-ink-900">{section.heading}</h2>
              <p className="mt-4 text-ink-600 leading-relaxed">{section.content}</p>
            </div>
          ))}
        </article>

        {article.ctaLinks?.length ? (
          <div className="max-w-3xl mt-10 flex flex-wrap gap-3">
            {article.ctaLinks.map((link, i) => (
              <Button key={link.href} href={link.href} variant={i === 0 ? "solid" : "outline"}>
                {link.label}
              </Button>
            ))}
          </div>
        ) : null}

        <div className="max-w-3xl mt-16">
          <h2 className="text-2xl font-semibold text-ink-900 mb-6">{t.faqTitle}</h2>
          <Accordion items={content.faqs} />
        </div>

        {article.relatedArticleSlugs?.length ? (
          <div className="mt-16">
            <p className="eyebrow mb-2">{t.relatedArticlesEyebrow}</p>
            <h2 className="text-2xl font-semibold text-ink-900 mb-6">{t.relatedArticlesTitle}</h2>
            <RelatedArticles slugs={article.relatedArticleSlugs} locale={locale} />
          </div>
        ) : null}

        <div className="max-w-3xl mt-16 rounded-2xl border border-navy-700 bg-navy-900 text-white p-8 text-center">
          <h3 className="text-xl font-semibold">{t.ctaTitle}</h3>
          <div className="mt-6 flex justify-center">
            <Button href="/contact">{t.ctaButton}</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
