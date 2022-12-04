const textInput = document.querySelector("#font-size-control");

textInput.addEventListener("input", () => {
  textInput.insertAdjacentHTML(
    "beforebegin",
    `<style>#text{font-size: ${textInput.value}px;}</style>`
  );
});
