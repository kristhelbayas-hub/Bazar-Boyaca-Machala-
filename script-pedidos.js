let carrito = [];
let total = 0;

function agregarAlCarrito(nombre, precio) {
    // Guardar en la lista
    carrito.push(nombre);
    // Sumar precio
    total += precio;

    // Mostrar en la lista visual
    const listaUI = document.getElementById('lista-visual');
    const li = document.createElement('li');
    li.textContent = `✅ ${nombre} - $${precio.toFixed(2)}`;
    listaUI.appendChild(li);

    // Actualizar total en pantalla
    document.getElementById('total-precio').textContent = total.toFixed(2);
}

function enviarPedido() {
    if (carrito.length === 0) {
        alert("¡El carrito está vacío! Selecciona productos primero.");
        return;
    }

    const numero = "593959801889";
    const mensaje = encodeURIComponent(
        `¡Hola Bazar Boyacá! Quisiera pedir:\n- ${carrito.join('\n- ')}\n\nTotal estimado: $${total.toFixed(2)}`
    );
    
    window.open(`https://wa.me/${numero}?text=${mensaje}`, '_blank');
}