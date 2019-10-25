//Storage for working variables
let displayValue = "0";
let firstNum = null;
let secondNumReady = false;
let operator = null;

//Works out whether to append passed num to existing display or replace it
const input = (num) => {
    if (secondNumReady) {
        if (displayValue === "0.") { //If an operator clicked, then a decimal, appends to 0. 
            displayValue = displayValue + num;
            secondNumReady = false;
        } else {
        displayValue = num; //Otherwise just replace with the new number
        secondNumReady = false;
        }
    } else {
        if (displayValue === "0") { //If no operator, replace default 0 with new number
            displayValue = num;
        } else {
            displayValue = displayValue + num; //Unless there is already a number, then append
        }
    }
  }

//Updates the visible display with whatever the input function worked out
const update = () => {
    let display = document.querySelector('.screen');
    display.value = displayValue;
}

//Event listeners and instructions for button area clicks. 
let keys = document.querySelector('.keys'); //query entire div containing all buttons
keys.addEventListener('click', (event) => {
  let target = event.target; //Record the details of the area where the mouse clicked
  if (!target.matches('button')) { //Don't worry about anything that isn't a button!
    return;
  }
  if (target.classList.contains('operator')) {
    operatorInput(target.value);
    update();
    return;
  }
  if (target.classList.contains('decimal')) {
    if (secondNumReady) {
        displayValue = "0."; //If an operator was last clicked, adds decimal with zero to start 2nd number.
        update();
        return;
    }
    if (!displayValue.includes(target.value)) {
        displayValue += target.value; //Adds decimal to screen but only if there isn't one already
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
  input(target.value); //If it isn't an operator, decimal, or all-clear it must be a number.
  update();
});

//Pass in the clicked operator and either update variables or calculate depending on situation
const operatorInput = (op) => {
    let inputValue = parseFloat(displayValue); //convert string to float
    if (operator && secondNumReady) { 
        operator = op; //Allows alteration of operator before second number is inputted
        showOperator(firstNum, operator);
        return;
    }
    if (firstNum === null) {
      firstNum = inputValue; //If no operator has been pressed yet, save the display value
    } else if (operator) { //Otherwise we can make a calculation
        let result = calculate(firstNum, inputValue); //Using a switch statement function
        let roundedResult = round(result, 5); //Then rounding to 5dp
        displayValue = String(roundedResult); //...and make it a string again then display answer
        firstNum = roundedResult; //Prepare for a further calculation
        showOperator(firstNum, operator);
    }
    operator = op; //Save the operator 
    secondNumReady = true; //and we're ready for the next input
    showOperator(firstNum, operator)
}

//Make calculation based on saved first number, saved operator, and whatever is currently on the screen
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

//Rounds to a given number of dp
const round = (value, decimals) =>  Number(Math.round(value+'e'+decimals)+'e-'+decimals);

//Show the operator or first side of calculation and operator in the screen area.
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

//Add keyboard events
document.onkeydown = (event) => {
    let pressedKey = "";
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
        case 111:
            operatorInput("/");
            break;
        case 109:
            operatorInput("-");
            break;
        case 107:
            operatorInput("+");
            break;
        case 106:
            operatorInput("*");
            break;
        case 187:
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
} 