// FUNCION  CONSTRUCTORA = PLANTILLA = CLASS
/*function Persona(nombre){ 
this.nombre = nombre;
this.saludar = function(){
    return `${this.nombre} dice hola`
}
}

Persona.prototype.saludarIngles = function(){
    return `${this.nombre} says hi!`
}

const juanito = new Persona('Juanito');
const pedrito = new Persona('Pedrito');
console.log(juanito.saludar());
console.log(pedrito.saludar());
console.log(pedrito.saludarIngles());
*/

// Palabra reservada CLASS. es lo mismo que lo anterior. Azúcar sintáctica

class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  get getNombre() {
    return this.nombre;
  }

  set setNombre(nombre) {
    this.nombre = nombre;
  }

  saludar() {
    return `${this.nombre} dice hola`;
  }

  static probarSaludo(nombre) {
    return `${nombre} probando saludo`;
  }
}

class Estudiante extends Persona {
  #notas = [];
  set setNotas(nota) {
    this.#notas.push(nota);
  }

  get getNotas() {
    return this.#notas;
  }
}

const juanito = new Estudiante("Juanito", 25);

juanito.setNotas = 7;
juanito.setNotas = 5;
juanito.setNotas = 3;
