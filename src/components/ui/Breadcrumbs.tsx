import Link from "@/components/ui/LocaleLink";

export function Breadcrumbs({
  items,
}: {
  items: { label: string; href?: string }[];
}) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm text-ink-600">
      <ol className="flex flex-wrap items-center gap-1.5">
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-1.5">
            {item.href ? (
              <Link href={item.href} className="hover:text-accent-500">
                {item.label}
              </Link>
            ) : (
              <span className="text-ink-900">{item.label}</span>
            )}
            {i < items.length - 1 ? <span className="text-line-200">/</span> : null}
          </li>
        ))}
      </ol>
    </nav>
  );
}
