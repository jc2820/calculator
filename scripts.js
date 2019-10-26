let displayValue = "0";
let firstNum = null;
let secondNumReady = false;
let operator = null;

const update = () => {
    let display = document.querySelector('.screen');
    if (displayValue.length > 9) {
        display.style.fontSize = "1rem";
    } else {
        display.style.fontSize = "2rem";
    }
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
    if (secondNumReady) {
        displayValue = "0.";
        update();
        return;
    }
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

const input = (num) => {
    if (secondNumReady) {
        if (displayValue === "0.") {
            displayValue = displayValue + num;
            secondNumReady = false;
        } else {
        displayValue = num;
        secondNumReady = false;
        }
    } else {
        if (displayValue === "0") {
            displayValue = num;
        } else {
            displayValue = displayValue + num;
        }
    }
}

const operatorInput = (op) => {
    let workingValue = parseFloat(displayValue);
    if (operator && secondNumReady) { 
        operator = op;
        showOperator(firstNum, operator);
        return;
    }
    if (!firstNum) {
      firstNum = workingValue;
    } else if (operator) {
        let result = calculate(firstNum, workingValue);
        let roundedResult = round(result, 5);
        displayValue = String(roundedResult);
        firstNum = roundedResult;
        showOperator(firstNum, operator);
    }
    operator = op;
    secondNumReady = true;
    showOperator(firstNum, operator);
    return;
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

document.addEventListener("keydown", event => {
    switch(event.keyCode) {
        case 48:
            input("0");
            break;
        case 49:
            input("1");
            break;
        case 50:
            input("2");
            break;
        case 51:
            input("3");
            break;
        case 52:
            input("4");
            break;
        case 53:
            input("5");
            break;
        case 54:
            input("6");
            break;
        case 55:
            input("7");
            break;
        case 56:
            input("8");
            break;
        case 57:
            input("9");
            break;
        case 191:
            operatorInput("/");
            break;
        case 189:
            operatorInput("-");
            break;
        case 187:
            operatorInput("+");
            break;
        case 88:
            operatorInput("*");
            break;
        case 69:
            operatorInput("=");
            break;
        case 67:
            displayValue = "0";
            firstNum = null;
            secondNumReady = false;
            operator = null;
            showOperator("","");
            break;
        case 190:
            if (secondNumReady) {
                displayValue = "0."; 
                update();
                return;
                }
                if (!displayValue.includes(".")) {
                displayValue += ".";
                update();
                return;
                }
            return;
    }
    update();
    return;
}); 