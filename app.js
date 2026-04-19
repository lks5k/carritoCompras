const contenedor = document.getElementById("contenedor-productos")

productos.forEach(function(producto) {
    contenedor.innerHTML += `
    <div>
        <h3>${producto.nombre}</h3>
        <p>$ ${producto.precio.toLocaleString("es-CO")}</p>
    </div>
    `    
})