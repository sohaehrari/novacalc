export default function CalculatorButtons({
    label,
    type="number",
    wide=false,
    onClick,
}){

    const isOperator=type==="operator"
    const isAction=type==="action"
    const isEquals=type==="equals"

    const buttonStyles = `
    flex h-14 items-center justify-center
    rounded-2xl
    border border-white/5
    text-sm font-medium
    transition duration-200
    active:scale-[0.97]
    focus:outline-none
    focus:ring-2 focus:ring-indigo-500/50
    ${
      wide
        ? "col-span-2"
        : ""
    }
    ${
      isEquals
        ? "bg-indigo-500 text-white hover:bg-indigo-400"
        : isOperator
        ? "bg-indigo-500/20 text-indigo-300 hover:bg-indigo-500/30"
        : isAction
        ? "bg-white/10 text-zinc-300 hover:bg-white/15"
        : "bg-white/[0.05] text-zinc-200 hover:bg-white/10"
    }
  `;

  return (
    <button
      type="button"
      onClick={onClick}
      className={buttonStyles}
      aria-label={label}
    >
      <span>{label}</span>
    </button>
    

    )
}