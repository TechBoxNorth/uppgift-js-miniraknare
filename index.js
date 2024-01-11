alert("Welcome to Calc3000 Pro");
let firstNumber = prompt("Enter the first number");
let secondNumber = prompt("Enter the second number");
let mathChoice = prompt("Enter the desired math operator (+, -, * or /");
let answer;

switch (mathChoice) {
  case "+":
    answer = parseInt(firstNumber) + parseInt(secondNumber);
    break;
  case "-":
    answer = parseInt(firstNumber) - parseInt(secondNumber);
    break;
  case "*":
    answer = parseInt(firstNumber) * parseInt(secondNumber);
    break;
  case "/":
    answer = parseInt(firstNumber) / parseInt(secondNumber);
    break;
  default:
    alert("No vaild math operator was chosen!");
}

if (isNaN(answer)) {
  alert(
    "Something went wrong, perhaps one of your choices was not a valid number?"
  );
} else {
  alert(`The result is: ${answer}`);
}

alert("Thank you for using Calc3000 Pro!");
