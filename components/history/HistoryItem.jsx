export default function HistoryItem({
    expression,
    result,
    onSelect,
  }) {
    // Presents each calculation as a refined history card
    // with a clear visual hierarchy.
    return (
      <button
        type="button"
        onClick={onSelect}
        className="
          group relative w-full overflow-hidden rounded-2xl
          border border-white/10
          bg-white/[0.035]
          p-4 text-left
          backdrop-blur-xl
          transition-all duration-300
          hover:-translate-y-0.5
          hover:border-indigo-400/20
          hover:bg-white/[0.06]
          hover:shadow-lg
          hover:shadow-indigo-500/5
          active:scale-[0.99]
        "
      >
        {/* Hover gradient */}
        <div
          className="
            absolute inset-0
            bg-gradient-to-r
            from-indigo-500/[0.04]
            via-transparent
            to-transparent
            opacity-0
            transition-opacity duration-300
            group-hover:opacity-100
          "
        />
  
        {/* Content */}
        <div className="relative flex items-center justify-between gap-4">
          {/* Calculation details */}
          <div className="min-w-0 flex-1">
            <p
              className="
                mb-1 truncate
                text-xs font-medium
                uppercase tracking-[0.18em]
                text-zinc-600
              "
            >
              Calculation
            </p>
  
            <p
              className="
                truncate
                text-sm font-medium
                text-zinc-300
              "
            >
              {expression}
            </p>
          </div>
  
          {/* Result */}
          <div className="shrink-0 text-right">
            <p
              className="
                mb-1
                text-xs font-medium
                uppercase tracking-[0.18em]
                text-zinc-600
              "
            >
              Result
            </p>
  
            <p
              className="
                max-w-[180px]
                truncate
                text-base font-semibold
                text-indigo-400
              "
            >
              {result}
            </p>
          </div>
        </div>
      </button>
    );
  }
  