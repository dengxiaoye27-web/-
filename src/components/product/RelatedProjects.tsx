import { Card } from "@/components/ui/Card";
import { projects } from "@/data/projects";
import { getProjectContent } from "@/i18n/content/projects";
import { Locale } from "@/i18n/config";

// Reuse the exact product-name relationship already published on case pages.
export function RelatedProjects({ productName, locale }: { productName: string; locale: Locale }) {
  const items = projects.filter((project) => project.productsUsed.includes(productName));
  if (!items.length) return null;
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((project) => {
        const content = getProjectContent(project.slug, locale, project);
        return (
          <Card key={project.slug} href={`/projects/${project.slug}`}>
            <p className="eyebrow mb-2">{content.location}</p>
            <h3 className="text-lg font-semibold text-ink-900">{content.title}</h3>
            <p className="mt-2 text-sm text-ink-600 leading-relaxed">{content.summary}</p>
          </Card>
        );
      })}
    </div>
  );
}
