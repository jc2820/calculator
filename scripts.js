let displayValue = "0";
let firstNum = null;
let secondNumReady = false;
let operator = null;

const input = (num) => {
    if (secondNumReady === true) {
        displayValue = num;
        secondNumReady = false;
    } else {
        if (displayValue === "0") {
            displayValue = num;
        } else {
            displayValue = displayValue + num;
        }
    }
  }

const update = () => {
    let display = document.querySelector('.screen');
    display.value = displayValue;
}

let keys = document.querySelector('.keys');
keys.addEventListener('click', (event) => {
  let target = event.target;
  if (!target.matches('button')) {
    return;
  }
  if (target.classList.contains('operator')) {
    operatorInput(target.value);
    update();
    return;
  }
  if (target.classList.contains('decimal')) {
    if (secondNumReady) {return;}
    if (!displayValue.includes(target.value)) {
        displayValue += target.value;
        update();
        return;
    }
    return;
  }
  if (target.classList.contains('all-clear')) {
    displayValue = "0";
    firstNum = null;
    secondNumReady = false;
    operator = null;
    showOperator("","");
    update();
    return;
  }
  input(target.value);
  update();
});

const operatorInput = (op) => {
    let inputValue = parseFloat(displayValue); //convert string to float!
    if (operator && secondNumReady) {
        operator = op;
        showOperator(firstNum, operator);
        return;
    }
    if (firstNum === null) {
      firstNum = inputValue;
    } else if (operator) {
        let result = calculate(firstNum, inputValue); 
        let roundedResult = round(result, 5);
        displayValue = String(roundedResult);
        firstNum = roundedResult;
        showOperator(firstNum, operator);
    }
    operator = op;
    secondNumReady = true;
    showOperator(firstNum, operator)
}

const calculate = (a, b) => {
    let answer = "";
    switch(operator) {
        case "+":
            answer = a + b;
            break;
        case "-":
            answer = a - b;
            break;
        case "*":
            answer = a * b;
            break;
        case "/":
            answer = a / b;
            break;
        case "=":
            answer = b;
    }
    return answer;
}

const round = (value, decimals) =>  Number(Math.round(value+'e'+decimals)+'e-'+decimals);

const showOperator = (x, y) => {
    let signArea = document.querySelector(".operatorscreen");
    if (operator === "=") {
        signArea.value = y;
    } else {
        let symbol;
        switch(y) {
            case "*":
                symbol = " x";
                break;
            case "/":
                symbol = " ÷";
                break;
            case "+":
                symbol = " +";
                break;
            case "-":
                symbol = " -";
                break;
            default:
                symbol = "";
        }
    signArea.value = x.toString() + symbol;
    }
}