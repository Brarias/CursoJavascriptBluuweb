const carrito = document.getElementById("carrito");
const template = document.getElementById("template");
const footer = document.getElementById("footer");
const templateFooter = document.getElementById("templateFooter");
const fragment = document.createDocumentFragment();
const btnesBotones = document.querySelectorAll(".card .btn");

document.addEventListener("click", (e) => {
  //console.log(e.target.matches(".card .btn-outline-primary"));

  if (e.target.matches(".card .btn-outline-primary")) {
    console.log("Ejecutar agregar al carrito");
    agregarAlCarrito(e);
  }

  // console.log(e.target.matches(".list-group-item .btn-success"));
  if (e.target.matches(".list-group-item .btn-success")) {
    btnAumentar(e);
  }

  if (e.target.matches(".list-group-item .btn-danger")) {
    btnDisminuir(e);
  }
});

let carritoObjecto = [];

const agregarAlCarrito = (e) => {
  // console.log(e.target.dataset.fruta);

  const producto = {
    titulo: e.target.dataset.fruta,
    id: e.target.dataset.fruta,
    cantidad: 1,
    precio: parseInt(e.target.dataset.precio),
  };

  const indice = carritoObjecto.findIndex((item) => item.id === producto.id);
  //console.log(indice);

  if (indice === -1) {
    carritoObjecto.push(producto);
  } else {
    carritoObjecto[indice].cantidad++;
    // carritoObjecto[indice].precio =
    //   carritoObjecto[indice].cantidad * producto.precio;
  }

  console.log(carritoObjecto);

  pintarCarrito();
};

const pintarCarrito = () => {
  carrito.textContent = "";

  carritoObjecto.forEach((item) => {
    const clone = template.content.cloneNode(true);
    clone.querySelector(".text-white .lead").textContent = item.titulo;
    clone.querySelector(".badge").textContent = item.cantidad;
    clone.querySelector("div .lead span").textContent =
      item.precio * item.cantidad;
    clone.querySelector(".btn-danger").dataset.id = item.id;
    clone.querySelector(".btn-success").dataset.id = item.id;
    fragment.appendChild(clone);
  });

  carrito.appendChild(fragment);
  pintarFooter();
};

const pintarFooter = () => {
  console.log("pintar footer");
  footer.textContent = "";

  const total = carritoObjecto.reduce(
    (acc, current) => acc + current.cantidad * current.precio,
    0
  );

  const clone = templateFooter.content.cloneNode(true);
  clone.querySelector("span").textContent = total;

  if (total > 0) {
    footer.appendChild(clone);
  }
};

const btnAumentar = (e) => {
  console.log("me diste click", e.target.dataset.id);
  carritoObjecto = carritoObjecto.map((item) => {
    if (item.id === e.target.dataset.id) {
      item.cantidad++;
    }
    return item;
  });
  pintarCarrito();
};

const btnDisminuir = (e) => {
  console.log("me diste click", e.target.dataset.id);
  carritoObjecto = carritoObjecto.filter((item) => {
    if (item.id === e.target.dataset.id) {
      if (item.cantidad > 0) {
        item.cantidad--;
        if (item.cantidad === 0) return;
        return item;
      }
    }
    return { item };
  });
  pintarCarrito();
};
