class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
    this.uid = `${Date.now()}`;
  }

  static pintarPersonaUI(persona, tipo) {
    if (tipo === "Estudiante") {
      cardEstudiantes.textContent = "";
      const fragment = document.createDocumentFragment();

      persona.forEach((item) => {
        fragment.appendChild(item.agregarNuevoEstudiante());
      });

      cardEstudiantes.appendChild(fragment);
    }
    if (tipo === "Profesor") {
      cardProfesores.textContent = "";
      const fragment = document.createDocumentFragment();

      persona.forEach((item) => {
        fragment.appendChild(item.agregarNuevoProfesor());
      });

      cardProfesores.appendChild(fragment);
    }
  }
}

class Estudiante extends Persona {
  #estado = false;
  #estudiante = "Estudiante";

  set setEstado(estado) {
    this.#estado = estado;
  }
  get getEstudiante() {
    return this.#estudiante;
  }
  agregarNuevoEstudiante() {
    const clone = templateEstudiantes.cloneNode(true);
    clone.querySelector("h5 .text-primary").textContent = this.nombre;
    clone.querySelector("h6").textContent = this.getEstudiante;
    clone.querySelector("#edadEst").textContent = this.edad;

    if (this.#estado) {
      clone.querySelector(".badge").className = "badge bg-success";
      clone.querySelector(".btn-success").disabled = true;
      clone.querySelector(".btn-danger").disabled = false;
    } else {
      clone.querySelector(".badge").className = "badge bg-danger";
      clone.querySelector(".btn-danger").disabled = true;
      clone.querySelector(".btn-success").disabled = false;
    }

    clone.querySelector(".badge").textContent = this.#estado
      ? "Aprobado"
      : "Reprobado";

    clone.querySelector(".btn-success").dataset.uid = this.uid;
    clone.querySelector(".btn-danger").dataset.uid = this.uid;

    return clone;
  }
}

class Profesor extends Persona {
  #profesor = "Profesor";
  get getProfesor() {
    return this.#profesor;
  }
  agregarNuevoProfesor() {
    const clone = templateProfesores.cloneNode(true);
    clone.querySelector("h5 .text-secondary").textContent = this.nombre;
    clone.querySelector("h6").textContent = this.getProfesor;
    clone.querySelector("#edadPro").textContent = this.edad;

    return clone;
  }
}

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
