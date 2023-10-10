
let calculate = (num1, num2, operation) => {
  result = 0;
  switch (operation) {
    case "multiply":
      result += num1 * num2;
      break;
    case "divide":
      result += num1 / num2;
      break;
    case "add":
      result += num1 + num2;
      break;
    case "subtract":
      result += num1 - num2;
      break;
  }
  return result;
};
console.log(calculate(10,5,'subtract'));