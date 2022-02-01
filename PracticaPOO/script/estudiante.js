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
import { Persona } from "./persona.js";
import { templateEstudiantes, cardEstudiantes } from "./app.js";
export { Estudiante };
