// const fragment = document.createDocumentFragment(); // const fragment = new DocumentFragment();

// arrayPaises.forEach((pais) => {
//   lista.innerHTML += `<li>${pais}</li>`;
// });

// arrayPaises.forEach((pais) => {
//   const newNode = document.createElement("li");
//   newNode.textContent = pais;

//   const referenceNode = fragment.firstChild;
//   fragment.insertBefore(newNode, referenceNode);
// });

// lista.appendChild(fragment);

// arrayPaises.forEach((pais) => {
//   const li = document.createElement("li");
//   li.className = "list";
//   const b = document.createElement("b");
//   b.textContent = "Pais: ";
//   const span = document.createElement("span");
//   span.className = "text-primary";
//   span.textContent = pais;

//   li.appendChild(b);
//   li.append(span);
//   fragment.append(li);
// });

// lista.appendChild(fragment);

const lista = document.querySelector("#lista");
const fragment = document.createDocumentFragment();
const arrayPaises = ["Perú", "Bolivia", "Colombia"];
const liTemplate = document.querySelector("#liTemplate");
// const clone = liTemplate.content.cloneNode(true);
// clone.querySelector(".text-primary").textContent =
//   "Agregué a traves de un template";
// lista.appendChild(clone);

const clickPaises = (e) => {
  console.log("Me diste click", e.tartget);
};

arrayPaises.forEach((pais) => {
  const clone = liTemplate.content.firstElementChild.cloneNode(true);
  clone.querySelector("span").textContent = pais;

  clone.addEventListener("click", clickPaises);
  fragment.appendChild(clone);
});

lista.appendChild(fragment);
