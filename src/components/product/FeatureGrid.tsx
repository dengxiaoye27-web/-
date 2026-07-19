export function FeatureGrid({ items }: { items: string[] }) {
  return (
    <ul className="grid gap-4 sm:grid-cols-2">
      {items.map((item) => (
        <li
          key={item}
          className="flex items-start gap-3 rounded-xl border border-line-200 px-4 py-3 text-sm text-ink-900"
        >
          <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-500" aria-hidden />
          {item}
        </li>
      ))}
    </ul>
  );
}
