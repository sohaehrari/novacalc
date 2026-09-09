import CalculatorButtons from "./CalculatorButtons";

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
  { label: "=", type: "equals", wide: true },
];

export default function Keypad({
  onClear,
  onNumber,
  onBackspace,
  onOperator,
  onDecimal,
  onCalculate,
}) {
  const handleButtonClick = (button) => {
    switch (button.type) {
      case "number":
        onNumber(button.label);
        break;

      case "clear":
        onClear();
        break;

      case "backspace":
        onBackspace();
        break;

      case "operator":
        onOperator(button.label);
        break;

      case "decimal":
        onDecimal();
        break;

      case "equals":
        onCalculate();
        break;

      default:
        break;
    }
  };

  return (
    <div className="grid grid-cols-4 gap-3">
      {buttons.map((button, index) => (
        <CalculatorButtons
          key={`${button.label}-${index}`}
          label={button.label}
          type={button.type}
          wide={button.wide}
          onClick={() => handleButtonClick(button)}
        />
      ))}
    </div>
  );
}