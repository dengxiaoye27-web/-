export function StatTile({
  value,
  label,
  light = false,
}: {
  value: string;
  label: string;
  light?: boolean;
}) {
  return (
    <div>
      <p
        className={`text-3xl md:text-4xl font-semibold tracking-tight ${
          light ? "text-white" : "text-accent-500"
        }`}
      >
        {value}
      </p>
      <p className={`mt-1 text-sm ${light ? "text-white/60" : "text-ink-600"}`}>
        {label}
      </p>
    </div>
  );
}
