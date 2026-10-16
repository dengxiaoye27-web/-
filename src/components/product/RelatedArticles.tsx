import { Card } from "@/components/ui/Card";
import { getArticle } from "@/data/articles";
import { getArticleContent } from "@/i18n/content/articles";
import { Locale } from "@/i18n/config";

export function RelatedArticles({ slugs, locale }: { slugs: string[]; locale: Locale }) {
  const items = slugs.map((s) => getArticle(s)).filter((a): a is NonNullable<typeof a> => Boolean(a));
  if (items.length === 0) return null;

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((article) => {
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
  );
}
