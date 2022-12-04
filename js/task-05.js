const textInput = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

textInput.addEventListener("input", () => {
  if (textInput.value) {
    output.textContent = textInput.value;
  } else output.textContent = "Anonymous";
});
