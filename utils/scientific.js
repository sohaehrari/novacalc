export function factorial(number) {
    if (!Number.isInteger(number) || number < 0) {
      return null;
    }
  
    if (number > 170) {
      return null;
    }
  
    let result = 1;
  
    for (let index = 2; index <= number; index += 1) {
      result *= index;
    }
  
    return result;
  }
  
  export function calculateScientific(operation, value) {
    const number = Number(value);
  
    if (!Number.isFinite(number)) {
      return null;
    }
  
    switch (operation) {
      case "sqrt":
        return number < 0 ? null : Math.sqrt(number);
  
      case "square":
        return number ** 2;
  
      case "cube":
        return number ** 3;
  
      case "sin":
        return Math.sin((number * Math.PI) / 180);
  
      case "cos":
        return Math.cos((number * Math.PI) / 180);
  
      case "tan":
        return Math.tan((number * Math.PI) / 180);
  
      case "log":
        return number > 0 ? Math.log10(number) : null;
  
      case "ln":
        return number > 0 ? Math.log(number) : null;
  
      case "factorial":
        return factorial(number);
  
      case "reciprocal":
        return number === 0 ? null : 1 / number;
  
      default:
        return null;
    }
  }
  
  
  
  
  
  
  
  