import { calculateExpression } from "@/utils/calculator";

const initialState = {
  expression: "",
  result: "0",
  memory: 0,
  history: [],
};

// Centralizes calculator state transitions and keeps all calculator
// behavior predictable and maintainable.
export default function calculatorReducer(state, action) {
  switch (action.type) {
    case "INPUT_NUMBER": {
      return {
        ...state,
        expression: state.expression + action.payload,
      };
    }

    case "INPUT_DECIMAL": {
      const parts = state.expression.split(/[\s+\-−×÷%]/);
      const currentNumber = parts[parts.length - 1];

      if (currentNumber.includes(".")) {
        return state;
      }

      // If starting a decimal number, add 0 first.
      if (!currentNumber) {
        return {
          ...state,
          expression: state.expression + "0.",
        };
      }

      return {
        ...state,
        expression: state.expression + ".",
      };
    }

    case "INPUT_OPERATOR": {
      const expression = state.expression.trim();

      // Don't allow an operator as the first input.
      if (!expression) {
        return state;
      }

      const lastCharacter = expression.slice(-1);

      const operators = ["+", "−", "×", "÷"];

      // If the last character is already an operator,
      // replace it with the new operator.
      if (operators.includes(lastCharacter)) {
        return {
          ...state,
          expression:
            expression.slice(0, -1) + action.payload,
        };
      }

      return {
        ...state,
        expression: expression + ` ${action.payload} `,
      };
    }

    case "CALCULATE": {
      const expression = state.expression.trim();

      if (!expression) {
        return state;
      }

      // Don't calculate if the expression ends with an operator.
      const lastCharacter = expression.slice(-1);

      if (["+", "−", "×", "÷"].includes(lastCharacter)) {
        return state;
      }

      try {
        const result = calculateExpression(expression);

        return {
          ...state,
          result: String(result),
          expression: String(result),
          history: [
            ...state.history,
            {
              expression,
              result: String(result),
            },
          ],
        };
      } catch (error) {
        return {
          ...state,
          result: "Error",
        };
      }
    }

    case "CLEAR": {
      return {
        ...initialState,
      };
    }

    case "BACKSPACE": {
      if (!state.expression) {
        return state;
      }

      return {
        ...state,
        expression: state.expression.slice(0, -1).trimEnd(),
      };
    }

    default:
      return state;
  }
}