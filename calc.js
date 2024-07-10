let displayValue = '';
let operator = '';
let firstOperand = '';
let secondOperand = '';

function appendNumber(num) {
  displayValue += num;
  updateDisplay();
}

function appendDecimal(decimal) {
  if (!displayValue.includes(decimal)) {
    displayValue += decimal;
    updateDisplay();
  }
}

function setOperator(op) {
  operator = op;
  if (firstOperand === '') {
    firstOperand = displayValue;
    displayValue = '';
  } else {
    calculate();
  }
}

function calculate() {
  secondOperand = displayValue;
  let result = '';
  switch (operator) {
    case '+':
      result = parseFloat(firstOperand) + parseFloat(secondOperand);
      break;
    case '-':
      result = parseFloat(firstOperand) - parseFloat(secondOperand);
      break;
    case '*':
      result = parseFloat(firstOperand) * parseFloat(secondOperand);
      break;
    case '/':
      result = parseFloat(firstOperand) / parseFloat(secondOperand);
      break;
    default:
      return;
  }
  displayValue = result.toString();
  firstOperand = displayValue;
  updateDisplay();
}

function clearDisplay() {
  displayValue = '';
  firstOperand = '';
  secondOperand = '';
  operator = '';
  updateDisplay();
}

function updateDisplay() {
  document.getElementById('display').value = displayValue;
}
