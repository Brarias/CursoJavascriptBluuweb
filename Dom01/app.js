console.log(document.getElementsByClassName("text - danger"));
// document.addEventListener("DOMContentLoaded", () => {

// });

// console.log(document.getElementById("tituloWeb"));
// // console.log(document.getElementById("tituloWeb").textContent);
// // console.log(document.getElementById("tituloWeb").innerHTML);

// console.log(document.querySelector("#tituloWeb"));
// console.log(document.querySelector(".text-danger")); // querySelector devuelve el primer elemento que encuentra
// console.log(document.querySelectorAll(".text-danger")); // me selecciona todos los elementos con ese selector y me los retorna en un array
// console.log(document.querySelectorAll(".container .text-danger"));
// console.log(document.getElementsByClassName("text - danger"));

const h1 = document.getElementById("tituloWeb"); // asigno el elemento a una constante asi es mas facil su trabajo
// h1.textContent = "Nuevo texto desde Js";
// h1.style.backgroundColor = "red";
// h1.style.color = "yellow";
const boton = document.querySelector(".btn-primary");

boton.addEventListener("click", () => {
  console.log("Me diste click");
  h1.textContent = "Cambiar a js";
});
