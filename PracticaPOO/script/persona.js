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
export { Persona };
