// function mostrarVista(vista) {
//   document.getElementById("view-home").classList.remove("active");
//   document.getElementById("view-menu").classList.remove("active");
//   document.getElementById("view-contact").classList.remove("active");

//   document.getElementById("view-" + vista).classList.add("active");
// }

const enlaces = document.querySelectorAll(".nav-link");

enlaces.forEach(function (enlace) {
  enlace.addEventListener("click", function (evento) {
    evento.preventDefault();

    const vista = enlace.dataset.view;

    document.querySelectorAll(".view").forEach(function (seccion) {
      seccion.classList.remove("active");
    });

    document.getElementById("view-" + vista).classList.add("active");
  });
});

const productos = [
  {
    id: 1,
    nombre: "Cafe americano",
    descripcion: "Cafe negro clasico",
    precio: 12,
  },
  {
    id: 2,
    nombre: "Capuccino",
    descripcion: "Espresso con leche",
    precio: 18,
  },
  {
    id: 3,
    nombre: "Latte",
    descripcion: "Cafe con abundante leche",
    precio: 16,
  },
  {
    id: 4,
    nombre: "Brownie",
    descripcion: "Postre de chocolate",
    precio: 10,
  },
  {
    id: 5,
    nombre: "Cafe con leche",
    descripcion: "Cafe con un poco de leche",
    precio: 8,
  },
  {
    id: 6,
    nombre: "Te verde",
    descripcion: "Te adelgazante de sabor amargo",
    precio: 7,
  },
];

// const id = 2;
// const resultado = productos.find((p) => p.id === id);
// // console.log(resultado);

let carrito = [];

function actualizarContador() {
  const contador = document.getElementById("cart-count");
  contador.textContent = carrito.length;
}

function renderizarProductos() {
  //Crear contenedor de cada producto
  const contenedor = document.getElementById("products-container");
  contenedor.innerHTML = "";
  productos.forEach(function (producto) {
    contenedor.innerHTML += `<div class="product-card">
    <h3>${producto.nombre}</h3>
    <p class="product-description">${producto.descripcion}</p>
    <span class="product-price">Bs. ${producto.precio}</span>
    <br>
    <button class="btn-add" data-id="${producto.id}">Agregar al carrito</button>
  </div>`;
  });

  // Funcionamiento botones
  const botones = document.querySelectorAll(".btn-add");

  botones.forEach(function (boton) {
    boton.addEventListener("click", function () {
      const id = parseInt(this.dataset.id);
      // alert("Producto agregado:" + id);

      const producto = productos.find((p) => p.id === id);
      carrito.push(producto);
      console.log("carrito: ", carrito);

      actualizarContador();
    });
  });
}

renderizarProductos();
