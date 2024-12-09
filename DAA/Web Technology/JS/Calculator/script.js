let operation = null;

function setOperation(op) {
  operation = op;
}

function calculate() {
  const num1 = parseFloat(document.getElementById('num1').value);
  const num2 = parseFloat(document.getElementById('num2').value);
  const resultField = document.getElementById('result');

  if (isNaN(num1) || isNaN(num2)) {
    resultField.value = "Invalid Input";
    return;
  }

  if (!operation) {
    resultField.value = "Select Operation";
    return;
  }

  let result;
  switch (operation) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      result = num2 === 0 ? "Error: Division by 0" : num1 / num2;
      break;
    default:
      result = "Unknown Operation";
  }

  resultField.value = result;
}

function resetCalculator() {
  document.getElementById('num1').value = '';
  document.getElementById('num2').value = '';
  document.getElementById('result').value = '';
  operation = null;
}
