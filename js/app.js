const contenedorProductos = document.getElementById('contenedor-productos')

const contenedorCarrito = document.getElementById('carrito-contenedor')

const botonVaciar = document.getElementById('vaciar-carrito')
const compra2 = document.getElementById('compra2')
const contadorCarrito = document.getElementById('contadorCarrito')

const cantidad = document.getElementById('cantidad')
const precioTotal = document.getElementById('precioTotal')
const cantidadTotal = document.getElementById('cantidadTotal')


let carrito = []


document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('carrito')){
        carrito = JSON.parse(localStorage.getItem('carrito'))
        actualizarCarrito()
    }
})

botonVaciar.addEventListener('click', () => {
    carrito.length = 0
    localStorage.clear(1)
    actualizarCarrito()
})

compra2.addEventListener('click', () => {
    if (carrito.length === 1) {
        alert("Su compra ha sido realizada")
    }
    else {carrito.length === 0}
    location.replace('https://api.whatsapp.com/send?phone=573043277960&text=Hola!%20Feliz%20d%C3%ADa%2C%20deseo%20informaci%C3%B3n%20sobre%20los%20productos%20que%20ofrecen');
    actualizarCarrito()
})


stockProductos.forEach((producto) => {
    const div = document.createElement('div')
    div.classList.add('producto')
    div.innerHTML = `
    <img src=${producto.img} alt="">
    <h3>${producto.nombre}</h3>
    <p>${producto.desc}</p>
    <p class="precioProducto">Precio: $ ${producto.precio.toLocaleString('es-CO')} ${producto.peso}</p>
    <button id="agregar${producto.id}" class="boton-agregar">Agregar <i class="fas fa-shopping-cart"></i></button>
    `
    contenedorProductos.appendChild(div)
    
    const boton = document.getElementById(`agregar${producto.id}`)
    
    boton.addEventListener('click', () => {
        agregarAlCarrito(producto.id)
    })
})


const agregarAlCarrito = (prodId) => {
    const existe = carrito.some (prod => prod.id === prodId)
    
    if (existe){
        const prod = carrito.map (prod => {
            if (prod.id === prodId){
                prod.cantidad ++
            }
        })
    } else {
        
        const item = stockProductos.find((prod) => prod.id === prodId)
        carrito.push(item)
    }
    actualizarCarrito()
}

const eliminarDelCarrito = (prodId) => {
    const item = carrito.find((prod) => prod.id === prodId)
    const indice = carrito.indexOf(item)
    carrito.splice(indice,1)
    console.log(carrito)
    actualizarCarrito()
}

const actualizarCarrito = () => {
    contenedorCarrito.innerHTML = ""
    
    carrito.forEach((prod) => {
        const div = document.createElement('div')
        div.className = ('productoEnCarrito')
        div.innerHTML = `
        <p>${prod.nombre}</p>
        <p>Precio:$${prod.precio.toLocaleString('es-CO')}</p>
        <p>Cantidad: <span id="cantidad">${prod.cantidad}</span></p>
        <button onclick ="eliminarDelCarrito(${prod.id})" class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>
        <button onclick ="agregarAlCarrito(${prod.id})" class="boton-agregar"><i class="fas fa-shopping-cart"></i></button>
        `
        contenedorCarrito.appendChild(div)
        
        localStorage.setItem('carrito', JSON.stringify(carrito))
    })
contadorCarrito.innerText = carrito.length

console.log(carrito)
precioTotal.innerText = carrito.reduce((acc, prod) => acc + prod.cantidad * prod.precio, 0).toLocaleString('es-CO')

}

