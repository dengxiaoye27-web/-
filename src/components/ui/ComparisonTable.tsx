export function ComparisonTable({
  columns,
  rows,
}: {
  columns: string[];
  rows: { label: string; values: string[] }[];
}) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-line-200">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-paper-50 border-b border-line-200">
            <th className="text-left font-semibold text-ink-900 px-5 py-3 whitespace-nowrap">&nbsp;</th>
            {columns.map((col) => (
              <th key={col} className="text-left font-semibold text-ink-900 px-5 py-3">
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={row.label} className={i % 2 === 0 ? "bg-white" : "bg-paper-50/60"}>
              <th className="text-left font-medium text-ink-600 px-5 py-3 align-top whitespace-nowrap">
                {row.label}
              </th>
              {row.values.map((value, j) => (
                <td key={j} className="px-5 py-3 text-ink-900 align-top">
                  {value}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
