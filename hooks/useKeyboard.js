"use client";

import { useEffect } from "react";

// Connects physical keyboard input to calculator actions for a faster and more accessible experience
export default function useKeyboard({
  onNumber,
  onOperator,
  onCalculate,
  onClear,
  onBackspace,
}) {
  useEffect(() => {
    const handleKeyDown = (event) => {
      const { key } = event;

      if (/^\d$/.test(key)) {
        onNumber(key);
        return;
      }

      if (["+", "-", "*", "/"].includes(key)) {
        const operatorMap = {
          "+": "+",
          "-": "−",
          "*": "×",
          "/": "÷",
        };

        onOperator(operatorMap[key]);
        return;
      }

      if (key === "Enter" || key === "=") {
        onCalculate();
        return;
      }

      if (key === "Backspace") {
        onBackspace();
        return;
      }

      if (key === "Escape") {
        onClear();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onNumber, onOperator, onCalculate, onClear, onBackspace]);
}
