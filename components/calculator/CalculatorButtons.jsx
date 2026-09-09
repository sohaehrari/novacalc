export default function CalculatorButtons({
  label,
  type = "number",
  wide = false,
  onClick,
}) {
  const isOperator = type === "operator";
  const isAction =
    type === "action" ||
    type === "clear" ||
    type === "backspace";
  const isEquals = type === "equals";

  const buttonStyles = `
    flex h-14 items-center justify-center
    rounded-2xl
    border border-zinc-200
    text-sm font-medium
    transition duration-200
    active:scale-[0.97]
    focus:outline-none
    focus:ring-2 focus:ring-indigo-500/50

    ${wide ? "col-span-2" : ""}

    ${
      isEquals
        ? "bg-indigo-500 text-white hover:bg-indigo-400"
        : isOperator
        ? "bg-indigo-50 text-indigo-700 hover:bg-indigo-100"
        : isAction
        ? "bg-zinc-200 text-zinc-800 hover:bg-zinc-300"
        : "bg-zinc-100 text-zinc-900 hover:bg-zinc-200"
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
  );
}