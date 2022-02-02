// const frutas = [
//   {
//     nombre: "🍌",
//     color: "amarillo",
//   },
//   {
//     nombre: "🍒",
//     color: "rojo",
//   },
//   {
//     nombre: "🍏",
//     color: "verde",
//   },
// ];

// //para convertir un array de objetos en string
// localStorage.setItem("frutas", JSON.stringify(frutas));

//para leer desde localStorage y convertirlo en un array de objetos
// if (localStorage.getItem("frutas")) {
//   const frutasDesdeLocal = JSON.parse(localStorage.getItem("frutas"));
//   console.log(frutasDesdeLocal);
// }

// PRACTICA LOCALSTORAGE
const alert = document.querySelector(".alert");
const templateTodo = document.getElementById("templateTodo").content;
const pintarTodo = document.getElementById("pintarTodo");
const formulario = document.getElementById("formulario");

let toDos = [];

const agregarTodo = (todo) => {
  const objetoTodo = {
    nombre: todo,
    id: `${Date.now()}`,
  };

  toDos.push(objetoTodo);
};

const pintarToDos = () => {
  localStorage.setItem("toDos", JSON.stringify(toDos));
  pintarTodo.textContent = ""; // para sobreescribir, lo vaciamos primero
  const fragment = document.createDocumentFragment(); // creamos un fragment para evitar el reflow y guardamos todos los elementos
  toDos.forEach((item) => {
    const clone = templateTodo.cloneNode(true); // clonamos el template fuera del DOM
    clone.querySelector(".lead").textContent = item.nombre;
    clone.querySelector(".btn").dataset.id = item.id; // le agregamos el data-id para generar id automaticamente. El dataset guarda strings

    fragment.appendChild(clone); // guardamos los elementos del clone en el fragment
  });

  pintarTodo.appendChild(fragment); // guardamos los elementos del fragment en pintarTodo y se agrega al DOM
};

document.addEventListener("click", (e) => {
  // usamos delegación de eventos para manipular el boton Borrar

  // console.log(e.target.matches(".btn-danger"));

  if (e.target.matches(".btn-danger")) {
    // mostramos solo cuando se da click al botón Borrar
    console.log(e.target.dataset.id);
    // console.log("diste click a borrar");

    toDos = toDos.filter((item) => item.id !== e.target.dataset.id);

    pintarToDos();
  }
});

formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  alert.classList.add("d-none");

  // console.log("Funcionando formulario");

  const data = new FormData(formulario); // capturamos el input
  const [todo] = [...data.values()]; // desestructuramos el value del input

  if (!todo.trim()) {
    console.log("Te equivocaste lo mandaste vacío");
    alert.classList.remove("d-none");
    return;
  }

  agregarTodo(todo);
  pintarToDos();
});

document.addEventListener("DOMContentLoaded", (e) => {
  if (localStorage.getItem("toDos")) {
    toDos = JSON.parse(localStorage.getItem("toDos"));
    pintarToDos();
  }
});
