//new version

let storage = {
    displayValue: "",
    firstNum: null,
    secondNumReady: false,
    operator: null,
};

const input = (num) => {
    let displayValue = storage.displayValue;
    let secondNumReady = storage.secondNumReady;
    if (secondNumReady === true) {
        storage.displayValue = num;
        storage.secondNumReady = false;
    } else {
    storage.displayValue = displayValue + num;
    }
  }

const update = () => {
    let display = document.querySelector('.screen');
    display.value = storage.displayValue;
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
    if (!storage.displayValue.includes(target.value)) {
        storage.displayValue += target.value;
        update();
        return;
    }
    return;
  }
  if (target.classList.contains('all-clear')) {
    storage.displayValue = "";
    storage.firstOperand = null;
    storage.secondNumReady = false;
    storage.operator = null;
    update();
    return;
  }
  input(target.value);
    update();
});

const operatorInput = (op) => {
    let firstNum = storage.firstNum
    let displayValue = storage.displayValue
    let operator = storage.operator
    let inputValue = parseFloat(displayValue); //convert string to float!
    if (firstNum === null) {
      storage.firstNum = inputValue;
    } else if (operator) {
        let result = calculate(firstNum, inputValue); 
        storage.displayValue = String(result);
        storage.firstNum = result;
    }
    storage.operator = op;
    storage.secondNumReady = true;
    console.log(storage);
}

const calculate = (a, b) => {
    let answer = "";
    let operator = storage.operator;
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

// make equals button run calculaation function
// make operators run calculation function on the fly.