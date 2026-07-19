import { SpecGroup } from "@/data/types";

export function SpecTable({ groups }: { groups: SpecGroup[] }) {
  return (
    <div className="grid gap-8 md:grid-cols-2">
      {groups.map((group) => (
        <div key={group.title} className="rounded-2xl border border-line-200 overflow-hidden">
          <div className="bg-paper-50 px-5 py-3 border-b border-line-200">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-ink-900">
              {group.title}
            </h3>
          </div>
          <table className="w-full text-sm">
            <tbody>
              {group.specs.map((spec, i) => (
                <tr
                  key={spec.label}
                  className={i % 2 === 0 ? "bg-white" : "bg-paper-50/60"}
                >
                  <th className="text-left font-medium text-ink-600 px-5 py-3 w-1/2 align-top">
                    {spec.label}
                  </th>
                  <td className="px-5 py-3 font-mono text-ink-900 align-top">
                    {spec.value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
}
