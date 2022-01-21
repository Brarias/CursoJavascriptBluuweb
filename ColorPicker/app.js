const inputColor = document.querySelector("#inputColor");
const btnVisualizar = document.querySelector("#btnVisualizar");
const cardColor = document.querySelector("#cardColor");
const parrafoHexa = document.querySelector("#parrafoHexa");

btnVisualizar.addEventListener("click", () => {
  parrafoHexa.textContent = inputColor.value;
  cardColor.style.backgroundColor = inputColor.value;

  navigator.clipboard
    .writeText(inputColor.value)
    .then(() => console.log("texto copiado"))
    .catch((e) => console.log(e));
});
