//new version

const storage = {
    displayValue: "",
    firstOperand: null,
    waitingForSecondOperand: false,
    operator: null,
};

function input(num) {
    const displayValue = storage.displayValue;
    storage.displayValue = displayValue === '0' ? num : displayValue + num;
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
    if (!storage.displayValue.includes(target.value)) {
        storage.displayValue += target.value;
        updateDisplay();
        return;
    }
    return;
  }

  if (target.classList.contains('all-clear')) {
    storage.displayValue = "";
    storage.firstOperand = null;
    storage.waitingForSecondOperand = false;
    storage.operator = null;
    updateDisplay();
    return;
  }

  input(target.value);
    updateDisplay();
});