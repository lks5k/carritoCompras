let carrito = JSON.parse(localStorage.getItem("carrito")) || []

const contenedor = document.getElementById("contenedor-productos")

productos.forEach(function (producto) {
    contenedor.innerHTML += `
    <div>
        <h3>${producto.nombre}</h3>
        <p>$ ${producto.precio.toLocaleString("es-CO")}</p>
        <button onclick="agregarAlCarrito('${producto.nombre}', ${producto.precio})">
        Agregar al Carrito
        </button>
    </div>
    `
})

function agregarAlCarrito(nombre, precio) {
    carrito.push({ nombre: nombre, precio: precio })
    localStorage.setItem("carrito", JSON.stringify(carrito))
    mostrarCarrito()
}

function mostrarCarrito() {
    const contenedorCarrito = document.getElementById("contenedor-carrito")
    contenedorCarrito.innerHTML = ""
    carrito.forEach(function (item) {
        contenedorCarrito.innerHTML += `
        <p>${item.nombre} - $${item.precio.toLocaleString("es-CO")}</P>
        `
    })
}

function vaciarCarrito() {
    carrito = []
    localStorage.clear()
    mostrarCarrito()
}

mostrarCarrito()