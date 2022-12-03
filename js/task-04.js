let counterValue = 0;

const btnDecrement = document.querySelector('[data-action="decrement"]');
const btnIncrement = document.querySelector('[data-action="increment"]');
const pressValue = document.querySelector('#value');

btnDecrement.addEventListener("click", clickDecrement);
btnIncrement.addEventListener("click", clickIncrement);

function clickDecrement() {
    counterValue -= 1;
    pressValue.textContent = counterValue;
};

function clickIncrement() {
    counterValue += 1;
    pressValue.textContent = counterValue;
};

