const formulario = document.getElementById("formulario");
const templateEstudiantes = document.getElementById(
  "template-estudiante"
).content;
const templateProfesores = document.getElementById("template-profesor").content;
const cardEstudiantes = document.getElementById("cardEstudiantes");
const cardProfesores = document.getElementById("cardProfesores");
const alert = document.querySelector(".alert");

const estudiantes = [];
const profesores = [];

document.addEventListener("click", (e) => {
  // console.log(e.target.dataset.nombre);

  if (e.target.dataset.uid) {
    console.log(e.target.matches(".btn-success"));
    if (e.target.matches(".btn-success")) {
      estudiantes.map((item) => {
        if (item.uid === e.target.dataset.uid) {
          item.setEstado = true;
        }
        return item;
      });
    }
    if (e.target.matches(".btn-danger")) {
      estudiantes.map((item) => {
        if (item.uid === e.target.dataset.uid) {
          item.setEstado = false;
        }
        return item;
      });
    }
    Persona.pintarPersonaUI(estudiantes, "Estudiante");
  }
});

formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  alert.classList.add("d-none");

  const datos = new FormData(formulario);
  const [nombre, edad, opcion] = [...datos.values()];

  if (!nombre.trim() || !edad.trim() || !opcion.trim()) {
    console.log("Le falta completar algún dato");
    alert.classList.remove("d-none");
    return;
  }
  if (opcion === "Estudiante") {
    const estudiante = new Estudiante(nombre, edad);
    estudiantes.push(estudiante);
    Persona.pintarPersonaUI(estudiantes, opcion);
  }

  if (opcion === "Profesor") {
    const profesor = new Profesor(nombre, edad);
    profesores.push(profesor);
    Persona.pintarPersonaUI(profesores, opcion);
  }
});
import { Persona } from "./persona.js";
import { Profesor } from "./profesor.js";
import { Estudiante } from "./estudiante.js";
export { templateEstudiantes, cardEstudiantes };
export { templateProfesores, cardProfesores };
