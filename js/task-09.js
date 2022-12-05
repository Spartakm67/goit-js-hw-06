function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnChangeColor = document.querySelector(".change-color");
btnChangeColor.addEventListener("click", bodyChangeColor);
const spanColorValue = document.querySelector(".color");
const bodyColorValue = document.body;

function bodyChangeColor() {
  const randomColor = getRandomHexColor();
  bodyColorValue.style.backgroundColor = randomColor;
  spanColorValue.textContent = randomColor;
}
