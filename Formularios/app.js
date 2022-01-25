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
const userName = document.getElementById("userName");
const userEmail = document.getElementById("userEmail");

const regUserName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
const regUserEmail =
  /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/;
formulario.addEventListener("submit", (e) => {
  e.preventDefault();

  console.log("userName: " + userName.value);
  console.log("userEmail: " + userEmail.value);

  if (
    !(regUserName.test(userName.value) && regUserEmail.test(userEmail.value))
  ) {
    console.log("Formato no válido");
    return;
  }

  console.log("formulario enviado");
});
