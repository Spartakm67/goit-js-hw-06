const textInput = document.querySelector("#validation-input");

textInput.addEventListener("blur", () => {
  if (textInput.value.length !== Number(textInput.dataset.length)) {
    textInput.classList.add("invalid");
  } else textInput.classList.replace("invalid", "valid");
});
