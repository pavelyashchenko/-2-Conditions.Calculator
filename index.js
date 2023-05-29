const firstNumber = +prompt("Enter your first number");
const operation = prompt("Enter your operation");
const secondNumber = +prompt("Enter your second number");
let result;

if (isNaN(firstNumber) || isNaN(secondNumber)) {
  console.log("Invalid number input!");
}

switch (operation) {
  case "+":
  case "plus":
    result = firstNumber + secondNumber;
    console.log(result);
    break;
  case "-":
  case "minus":
    result = firstNumber - secondNumber;
    console.log(result);
    break;
  case "*":
  case "multiply":
    result = firstNumber * secondNumber;
    console.log(result);
    break;
  case "/":
  case "division":
    result = firstNumber / secondNumber;
    console.log(result);
    break;
  case "**":
  case "degree":
    result = firstNumber ** secondNumber;
    console.log(result);
    break;
  default:
    console.log("Invalid operation!");
    break;
}
