const buttons = [
    "AC",
    "⌫",
    "%",
    "÷",
    "7",
    "8",
    "9",
    "×",
    "4",
    "5",
    "6",
    "−",
    "1",
    "2",
    "3",
    "+",
    "0",
    ".",
    "=",
  ];
  
  export default function Keypad() {
    return (
      // Calculator keypad: organizes the calculator controls into a responsive grid
      <div className="grid grid-cols-4 gap-3">
        {buttons.map((button, index) => (
          <button
            key={`${button}-${index}`}
            type="button"
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
                button === "="
                  ? "col-span-2 bg-indigo-500 text-white hover:bg-indigo-400"
                  : ""
              }
            `}
          >
            {button}
          </button>
        ))}
      </div>
    );
  }