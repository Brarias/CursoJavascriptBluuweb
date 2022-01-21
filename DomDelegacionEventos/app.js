/*const cajitas = document.querySelectorAll(".border");


// STOP PROPAGATION: ejemplo
cajitas.forEach((item) =>
  item.addEventListener("click", (e) => {
    e.stopPropagation();
    console.log("Me diste click");
  })
);*/

/*const formulario = document.querySelector("form");


// PREVENTDEFAULT: ejemplo
formulario.addEventListener("submit", (e) => {
  console.log("Me diste click");
  e.preventDefault();
});*/

// DELEGACION DE EVENTOS: ejemplo del uso de target
const container = document.querySelector(".container");

// container.addEventListener("click", (e) => {
//   // console.log(e.target.id);

//   if (e.target.id === "padre") {
//     console.log("Diste click al padre");
//   }
// });

// mismo ejemplo pero con MATCHES()
// container.addEventListener("click", (e) => {
//   if (e.target.matches(".border-secondary")) {
//     console.log("Me diste click");
//   }
// });

// mismo ejemplo pero con DATASET
container.addEventListener("click", (e) => {
  console.log(e.target.dataset.div); // con .div accedo al elemento

  if (e.target.dataset.div === "divNieto") {
    console.log("Diste click al NIETO");
  }
});
