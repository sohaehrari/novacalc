import CalculatorButtons from "./CalculatorButtons";

const buttons = [
  { label: "AC", type: "action" },
  { label: "⌫", type: "action" },
  { label: "%", type: "action" },
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

  { label: "0", type: "number", wide: true },
  { label: "=", type: "equals", wide: true },
];

export default function Keypad({
  onNumber,
  onOperator,
  onCalculate,
  onClear,
  onBackspace,
}) {
  // Maps calculator buttons to calculator actions
  const handleButtonClick = (button) => {
    // Numbers
    if (button.type === "number") {
      onNumber(button.label);
      return;
    }

    // Action buttons
    if (button.type === "action") {
      if (button.label === "AC") {
        onClear();
        return;
      }

      if (button.label === "⌫") {
        onBackspace();
        return;
      }

     
    }

    // Operators
    if (button.type === "operator") {
      onOperator(button.label);
      return;
    }

    // Equals
    if (button.type === "equals") {
      onCalculate();
      return;
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