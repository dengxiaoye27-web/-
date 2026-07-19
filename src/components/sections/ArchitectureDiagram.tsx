export function ArchitectureDiagram({ nodes, caption }: { nodes: string[]; caption: string }) {
  return (
    <div className="rounded-2xl border border-navy-700 bg-navy-900 p-6 md:p-10">
      <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-9 gap-3">
        {nodes.map((node, i) => (
          <div key={node} className="flex items-center">
            <div className="flex-1 rounded-lg border border-navy-700 bg-navy-800 px-3 py-4 text-center">
              <p className="text-xs md:text-sm font-medium text-white/90">{node}</p>
            </div>
            {i < nodes.length - 1 ? (
              <span
                aria-hidden
                className="hidden md:block mx-1 text-accent-500/60 text-lg"
              >
                →
              </span>
            ) : null}
          </div>
        ))}
      </div>
      <p className="mt-6 text-sm text-white/50">{caption}</p>
    </div>
  );
}
