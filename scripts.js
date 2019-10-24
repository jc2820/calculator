//new version

const storage = {
    displayValue: "",
    firstNum: null,
    SecondNum: false,
    operator: null,
};

function input(num) {
    const current = storage.displayValue;
    storage.displayValue = current + num;
  }

function update() {
    const display = document.querySelector('.screen');
    display.value = storage.displayValue;
}

const keys = document.querySelector('.keys');
keys.addEventListener('click', (event) => {
  const target = event.target;
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
    storage.waitingForSecondOperand = false;
    storage.operator = null;
    update();
    return;
  }

  input(target.value);
    update();
});

function operatorInput(op) {
    const firstNum = storage.firstNum
    const displayValue = storage.displayValue
    const operator = storage.operator
    const inputValue = parseFloat(displayValue); //convert string to float!
    if (firstNum === null) {
      storage.firstNum = inputValue;
    }
    storage.operator = op;
    storage.SecondNum = true;
    
}


// add calculation function 
// make equals button run calculaation function
// make operators run calculation function on the fly.