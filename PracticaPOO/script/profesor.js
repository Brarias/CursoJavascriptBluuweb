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
import { Persona } from "./persona.js";
import { templateProfesores, cardProfesores } from "./app.js";
export { Profesor };
