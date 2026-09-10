


"use client";

import HistoryItem from "./HistoryItem";

export default function History({ history = [], onClear }) {
  // Renders persistent calculation history with a clear action and an informative empty state
  return (
    <section className="w-full max-w-md">
      <div className="mb-5 flex items-end justify-between gap-4">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-indigo-400">
            Activity
          </p>

          <h2 className="mt-1 text-xl font-semibold tracking-tight text-white">
            Calculation History
          </h2>
        </div>

        {history.length > 0 && (
          <button
            type="button"
            onClick={onClear}
            className="rounded-xl border border-white/10 bg-white/[0.035] px-3 py-2 text-xs font-medium text-zinc-500 transition-all duration-200 hover:border-red-400/20 hover:bg-red-500/[0.08] hover:text-red-300 active:scale-95"
          >
            Clear all
          </button>
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
          {history
            .slice()
            .reverse()
            .map((item, index) => (
              <HistoryItem
                key={`${item.expression}-${item.result}-${index}`}
                expression={item.expression}
                result={item.result}
              />
            ))}
        </div>
      )}
    </section>
  );
}
