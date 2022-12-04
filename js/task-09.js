function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnChangeColor = document.querySelector(".change-color");
btnChangeColor.addEventListener("click", bodyChangeColor);
const colorValue = document.querySelector(".color");
const body = document.querySelector("body");
const style = document.querySelector("style");

let bodyColor = "";

function bodyChangeColor() {
  colorValue.textContent = getRandomHexColor();
  bodyColor = `body{background-color: ${getRandomHexColor()};}`;
  style.insertAdjacentHTML("beforeend", bodyColor);
}
