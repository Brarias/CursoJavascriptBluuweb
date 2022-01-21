// const gato = {
//   nombre: "Valiente",
//   duerme: true,
//   edad: 10,
//   enemigos: ["agua", "perros"],
// };
//Distintas formas de leer objetos

// console.log(gato);
// console.log(gato.nombre);
// console.log(gato["nombre"]);
// console.log(gato.duerme);
// console.log(gato["enemigos"]);
// console.log(gato.enemigos[0]);

// Crear propiedades de objeto fuera de la declaracion inicial
// gato.color = "Azul";
// console.log(gato);

//Actualizar propiedades del objeto
// gato.edad = 5;

// Quitar una propiedad del objeto
// delete gato.duerme;
// console.log(gato);

//Consultar si hay una propiedad
// if (gato.hasOwnProperty("nombre")) {
//   gato.nombre = "Flojera";
// }
// console.log(gato);

// OBJETOS ANIDADOS

// const gato = {
//   nombre: "Valiente",
//   duerme: true,
//   edad: 10,
//   enemigos: ["agua", "perros"],
//   otros: {
//     amigos: ["Cobarde", "Timido", "Pegajoso"],
//     favoritos: {
//       comida: {
//         frio: "salmon",
//         caliente: "pollo",
//       },
//     },
//   },
//   // comer(alimento) {
//   //   console.log(`${this.nombre} está comiendo ${alimento}`);
//   // },
//   // listarEnemigos() {
//   //   this.enemigos.forEach((item) => console.log(item)); la funcion flecha solo se puede usar dentro de metodos pero no como metodo
//   // },
// };

// console.log(gato.otros.favoritos.comida.frio); // encadenamiento opcional. Se coloca el signo ? pegado a la propiedad para ver si esta existe o esta bien escrita
// console.log(gato.otros.amigos[0]);

// gato.comer("pez");
// gato.listarEnemigos();

// para iterar objetos necesito for in, for of es para iterar arrays y forEach tambien
// for (let propiedad in gato) {

//   console.log(gato[propiedad]);
// }

// console.log(Object.values(gato)); //el metodo object.values me devuelve el valor de las propiedades del objeto en un array
// Object.values(gato).forEach((item) => console.log(item));

// DESTRUCTURING

// const nombre = gato.nombre;
// console.log(nombre);

// const { nombre: nombreSuperGato, duerme, edad } = gato; // nombreSuperGato es un alias ya que nombre ya existe
// console.log(nombre, duerme, edad);

// const amigoGatos = gato.otros.amigos;
// console.log(amigoGatos);

// const { amigos: amigosGatos } = gato.otros;
// console.log(amigosGatos);

// GETTERS Y SETTERS

const gato = {
  nombre: "valiente",
  duerme: true,
  edad: 10,
  enemigos: ["agua", "perros"],
  get nombreMayuscula() {
    // los getters no reciben parametros
    return this.nombre.toUpperCase();
  },
  set agregarEnemigo(nuevoEnemigo) {
    // Los setters solo tienen un parametro
    return this.enemigos.push(nuevoEnemigo);
  },
};

console.log(gato.nombreMayuscula); // NO se utilizan parentesis para llamar al metodo cuando estos son getters y setters
gato.agregarEnemigo = "Raton"; // Llamada al setter
console.log(gato);
