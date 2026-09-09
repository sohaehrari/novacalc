const operators = {
    "+": (left, right) => left + right,
  
    "−": (left, right) => left - right,
  
    "×": (left, right) => left * right,
  
    "÷": (left, right) => {
      if (right === 0) {
        throw new Error("Division by zero");
      }
  
      return left / right;
    },
  };
  
  export function calculateExpression(expression) {
    if (!expression) {
      return "0";
    }
  
    try {
      // Example:
      // "12 + 5" -> ["12", "+", "5"]
      const tokens = expression.trim().split(/\s+/);
  
      // If there is only one number, return it directly.
      if (tokens.length === 1) {
        const number = Number(tokens[0]);
  
        return Number.isFinite(number) ? String(number) : "Error";
      }
  
      // A valid binary expression must contain:
      // left value + operator + right value
      if (tokens.length !== 3) {
        return "Error";
      }
  
      const [leftValue, operator, rightValue] = tokens;
  
      const left = Number(leftValue);
      const right = Number(rightValue);
  
      // Make sure both values are valid numbers.
      if (!Number.isFinite(left) || !Number.isFinite(right)) {
        return "Error";
      }
  
      // Find the operation from our safe operators object.
      const operation = operators[operator];
  
      // Unknown operator.
      if (!operation) {
        return "Error";
      }
  
      // Perform the calculation.
      const result = operation(left, right);
  
      // Protect against invalid results such as Infinity or NaN.
      if (!Number.isFinite(result)) {
        return "Error";
      }
  
      return String(result);
    } catch (error) {
      // Handles errors such as division by zero.
      return "Error";
    }
  }