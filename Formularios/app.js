/*const regExp = /braian/i; // notacion literal

 const regExp = /[ai]/i;

 const regExp = /brian|braian/gi; concidencias en ambos lados de |
 const regExp = /[a-zA-Z0-9]/gi; alfanumerico
const regExp = /^\d+$/gi; // solo numeros
const regExp = /^[a-zA-Z ]*$/; // solo letras

const regExpObjeto = new RegExp("Braian", "i"); // notacion de objeto
 console.log(regExp.test("ednckosancoi BR AI  AN ltgjbiort"));
console.log(regExp.test("mlktji dfgbhbbn bb"));*/

const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("formulario procesado");
});
