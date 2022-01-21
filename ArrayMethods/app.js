// const frutas = ["🍌", "🍏", "🍓"];
// const nuevoArray = frutas.map((item) => item);
// frutas.push("Sandia");

// console.log(frutas);
// console.log(nuevoArray);

// const users = [
//   { name: "Jhon", age: 34 },
//   { name: "Amy", age: 20 },
//   { name: "CamperCat", age: 10 },
// ];

// const names = users.map((user) => {
//   return user.name;
// });

// console.log(names);

// const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const doble = numeros.map((numero) => {
//   return numero * 2;
// });

// console.log(numeros);
// console.log(doble);

// const users = [
//   { uid: 1, name: "John", age: 34 },
//   { uid: 2, name: "Amy", age: 20 },
//   { uid: 3, name: "camperCat", age: 10 },
// ];

// const mayores = users.filter((user) => {
//   return user.age > 30;
// });

// console.log(mayores);
// const userFiltrado = users.filter((user) => user.uid !== 3);
// console.log(userFiltrado);

// const amy = users.find((user) => user.uid === 2);
// console.log(amy);

// DESTRUCTURING
// const { age } = users.find((user) => user.uid === 2);
// console.log(age);

// const existe = users.some((user) => user.uid === 2);
// console.log(existe);

// const indice = users.findIndex((user) => user.uid === 3);
// console.log(indice);

// const arr = ["Cat", "Dog", "Tiger", "Zebra"];

// const nuevoArray = arr.slice(1, 3);
// console.log(nuevoArray);

// const array1 = ["a", "b", "c"];
// const array2 = ["d", "e", "f"];

// const array3 = array1.concat(array2);
// console.log(array3);

// SPREAD SYNTXIS

// const array3 = [...array1, ...array2];
// console.log(array3);

// REDUCE
// El valor devuelto de la función reductora se asigna al acumulador, cuyo valor se recuerda en cada iteración de la matriz y, en última instancia, se convierte en el valor final, único y resultante.

// const numeros = [1, 2, 3, 4, 5];

// const sumaTodos = numeros.reduce((acc, valorActual) => acc + valorActual);
// console.log(sumaTodos);

// const mascotas = [
//   { nombre: "Pelusa", edad: 12, tipo: "gato" },
//   { nombre: "Puchini", edad: 12, tipo: "perro" },
//   { nombre: "Pulga", edad: 10, tipo: "perro" },
//   { nombre: "Chanchito feliz", edad: 3, tipo: "perro" },
// ];

// const indexed = mascotas.reduce(
//   (acc, valorActual) => ({
//     ...acc,
//     [valorActual.nombre]: valorActual,
//   }),
//   {}
// );
// console.log(indexed);
// console.log(indexed["Pulga"]);

// const anidado = [1, [2, 3], 4, [5]];
// // [1,2,3,4,5]

// const plano = anidado.reduce((acc, el) => acc.concat(el), []);
// console.log(plano);

const cadenaMeses = "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec";

const arrayMeses = cadenaMeses.split(",");
console.log("Split: " + arrayMeses);

const nuevoTexto = arrayMeses.join("--> ");
console.log("Join: " + nuevoTexto);
