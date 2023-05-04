const contenedorProductos = document.getElementById('contenedor-productos')

const contenedorCarrito = document.getElementById('carrito-contenedor')

const botonVaciar = document.getElementById('vaciar-carrito')
const compra2 = document.getElementById('compra2')
const contadorCarrito = document.getElementById('contadorCarrito')

const cantidad = document.getElementById('cantidad')
const precioTotal = document.getElementById('precioTotal')
const cantidadTotal = document.getElementById('cantidadTotal')
const timeh= document.getElementById("HoraActual");
const timehora= document.getElementById("Tiempo");


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
    alert("No tiene productos en el carrito")
    actualizarCarrito()
})


stockProductos.forEach((producto) => {
    const div = document.createElement('div')
    div.classList.add('producto')
    div.innerHTML = `
    <img src=${producto.img} alt="">
    <h3>${producto.nombre}</h3>
    <p>${producto.desc}</p>
    <p>Subastador: ${producto.autor}</p>
    <p>Publicación: ${producto.Tiempo}</p>
    <p class="precioProudcto">Precio:$ ${producto.precio}</p>
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
        <p>Precio:$${prod.precio}</p>
        <p>Cantidad: <span id="cantidad">${prod.cantidad}</span></p>
        <button onclick ="eliminarDelCarrito(${prod.id})" class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>
        <button onclick ="agregarAlCarrito(${prod.id})" class="boton-agregar"><i class="fas fa-shopping-cart"></i></button>
        `
        contenedorCarrito.appendChild(div)
        
        localStorage.setItem('carrito', JSON.stringify(carrito))
    })
contadorCarrito.innerText = carrito.length

console.log(carrito)
precioTotal.innerText = carrito.reduce((acc, prod) => acc + prod.cantidad * prod.precio, 0)

}

const filterXprice=document.getElementById('filterXPrice');
filterXPrice.addEventListener('change',filterProducts);

function filterProducts(event) {
    const responseFilter = event.target.value === 'Menores a 1600'
    ? stockProductos.filter(stockProductos => stockProductos.precio < 1600)
    : event.target.value === 'Entre 1100 y 1200'
    ? stockProductos.filter (stockProductos => stockProductos.precio >= 1100 && stockProductos.precio <= 1200 )
    : event.target.value === 'Mayores a 1000'
    ? stockProductos.filter(stockProductos => stockProductos.precio > 1000)
    :null;
    document.querySelector("#contenedor-productos").innerHTML = '';

    responseFilter.forEach(stockProductos => stockProductos.innerHTML += (stockProductos));
}
// contenedorProductos.innerHTML= '';

