import CalculatorButtons from "./CalculatorButtons"




const buttons = [
  { label: "AC", type: "clear" },
  { label: "⌫", type: "backspace" },
  { label: "%", type: "operator" },
  { label: "÷", type: "operator" },

  { label: "7", type: "number" },
  { label: "8", type: "number" },
  { label: "9", type: "number" },
  { label: "×", type: "operator" },

  { label: "4", type: "number" },
  { label: "5", type: "number" },
  { label: "6", type: "number" },
  { label: "−", type: "operator" },

  { label: "1", type: "number" },
  { label: "2", type: "number" },
  { label: "3", type: "number" },
  { label: "+", type: "operator" },

  { label: "0", type: "number" },
  { label: ".", type: "decimal" },
  { label: "=", type: "equals" },
];

export default function Keypad({
  onClear,
  onNumber,
  onBackspace,
  onOperator,
  onDecimal,
  onEquals,
}) {
  const handleButtonClick = (button) => {
    if (button.type === "number") {
      onNumber(button.label);
      return;
    }

    if (button.type === "clear") {
      onClear();
      return;
    }

    if (button.type === "backspace") {
      onBackspace();
      return;
    }

    if (button.type === "operator") {
      onOperator(button.label);
      return;
    }

    if (button.type === "decimal") {
      onDecimal();
      return;
    }

    if (button.type === "equals") {
      onEquals();
      return;
    }
  };

  return (
    <div className="grid grid-cols-4 gap-3">
      {buttons.map((button, index) => (
        <CalculatorButtons
          key={`${button.label}-${index}`}
          type="button"
          onClick={() => handleButtonClick(button)}
          className={`
            flex h-14 items-center justify-center
            rounded-2xl
            border border-white/5
            bg-white/[0.05]
            text-sm font-medium
            text-zinc-200
            transition duration-200
            hover:bg-white/10
            active:scale-[0.97]

            ${
              button.type === "equals"
                ? "col-span-2 bg-indigo-500 text-white hover:bg-indigo-400"
                : ""
            }
          `}
        >
          {button.label}
        </CalculatorButtons>
      ))}
    </div>
  );
}
