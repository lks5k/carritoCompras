let totalAcumulado = 0;
let cantidadItems = 0;

const botones = document.querySelectorAll('.btn-agregar');
const lista = document.querySelector('#lista-carrito');
const totalSpan = document.querySelector('#total');
const badge = document.querySelector('#badge');
const btnVaciar = document.querySelector('#btn-vaciar');
const msgVacio = document.querySelector('#msg-vacio');

botones.forEach(btn => {
    btn.addEventListener('click', () => {
        const nombre = btn.dataset.nombre;
        const precio = parseFloat(btn.dataset.precio);
        agregarAlCarrito(nombre, precio);
    });
});

function agregarAlCarrito(nombre, precio) {
    const li = document.createElement('li');
    li.className = 'list-group-item d-flex justify-content-between align-items-center';
    li.textContent = `${nombre} - $${precio.toLocaleString()}`;

    const btnX = document.createElement('button');
    btnX.textContent = 'X';
    btnX.className = 'btn btn-danger btn-sm';
    
    li.appendChild(btnX);
    lista.appendChild(li);

    btnX.addEventListener('click', () => {
        eliminarItem(li, precio);
    });

    totalAcumulado += precio;
    cantidadItems += 1;
    updateUI();
}

function eliminarItem(li, precio) {
    li.remove();
    totalAcumulado -= precio;
    cantidadItems -= 1;
    updateUI();
}

// Esta es la forma de ocultar el badge cuando está en cero.

function updateUI() {
    if (cantidadItems === 0) {
        badge.textContent = "";
        badge.style.display = "none";
    } else {
        badge.textContent = cantidadItems;
        badge.style.display = "inline-block";
    }
    
    totalSpan.textContent = '$' + totalAcumulado.toLocaleString('es-CR', { minimumFractionDigits: 2 });
    msgVacio.style.display = cantidadItems === 0 ? 'block' : 'none';
}

btnVaciar.addEventListener('click', () => {
    lista.innerHTML = '';
    totalAcumulado = 0;
    cantidadItems = 0;
    updateUI();
});