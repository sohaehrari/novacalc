import HistoryItem from "./HistoryItem";

export default function History({ history = [], onSelect }) {
  return (
    <section className="w-full max-w-md">
      <div className="mb-4 flex items-end justify-between">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-indigo-400">
            Activity
          </p>

          <h2 className="mt-1 text-xl font-semibold tracking-tight text-white">
            Calculation History
          </h2>
        </div>

        {history.length > 0 && (
          <span className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-xs text-zinc-500">
            {history.length}{" "}
            {history.length === 1 ? "calculation" : "calculations"}
          </span>
        )}
      </div>

      {history.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-white/10 bg-white/[0.02] px-6 py-10 text-center">
          <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-zinc-500">
            ∑
          </div>

          <h3 className="text-sm font-medium text-zinc-300">
            No calculations yet
          </h3>

          <p className="mt-1 text-xs leading-5 text-zinc-600">
            Your recent calculations will appear here.
          </p>
        </div>
      ) : (
        <div className="space-y-2.5">
          {history.map((item, index) => (
            <HistoryItem
              key={`${item.expression}-${index}`}
              expression={item.expression}
              result={item.result}
              onSelect={() => onSelect?.(item)}
            />
          ))}
        </div>
      )}
    </section>
  );
}
