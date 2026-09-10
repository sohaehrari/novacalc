export default function MemoryButtons({
    onMemoryClear,
    onMemoryRecall,
    onMemoryAdd,
    onMemorySubtract,
  }) {
    const buttons = [
      { label: "MC", onClick: onMemoryClear },
      { label: "MR", onClick: onMemoryRecall },
      { label: "M+", onClick: onMemoryAdd },
      { label: "M−", onClick: onMemorySubtract },
    ];
  
    return (
      <div className="grid grid-cols-4 gap-2">
        {buttons.map((button) => (
          <button
            key={button.label}
            type="button"
            onClick={button.onClick}
            className="
              rounded-xl
              border border-slate-200
              bg-slate-100
              px-3 py-2.5
              text-sm font-semibold text-slate-700
              shadow-sm
              transition-all duration-150
              hover:bg-slate-200
              hover:shadow
              active:scale-95
              focus:outline-none
              focus:ring-2
              focus:ring-blue-500/40
            "
          >
            {button.label}
          </button>
        ))}
      </div>
    );
  }
  