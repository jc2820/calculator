//new version

const storage = {
    displayValue: "",
    firstOperand: null,
    waitingForSecondOperand: false,
    operator: null,
};

function input(digit) {
    const displayValue = storage.displayValue;
    storage.displayValue = displayValue === '0' ? digit : displayValue + digit;
  }

function updateDisplay() {
    const display = document.querySelector('.screen');
    display.value = storage.displayValue;
}
  
updateDisplay();

const keys = document.querySelector('.keys');
keys.addEventListener('click', (event) => {
  const target = event.target;
  if (!target.matches('button')) {
    return;
  }

  if (target.classList.contains('operator')) {
    input(target.value);
    updateDisplay();
    return;
  }

  if (target.classList.contains('decimal')) {
    input(target.value);
    updateDisplay();
    return;
  }

  if (target.classList.contains('all-clear')) {
    input(target.value);
    updateDisplay();
    return;
  }

  input(target.value);
    updateDisplay();
});