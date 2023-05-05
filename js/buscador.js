function search_categoria() {
  // Obtener el valor del input de búsqueda
  let input = document.getElementById("searchbar");
  let filter = input.value.toUpperCase();

  // Obtener los productos a partir del contenedor
  let contenedorProductos = document.getElementById("contenedor-productos");
  let productos = contenedorProductos.getElementsByClassName("producto-caja");

  // Recorrer los productos y mostrar o esconder según el filtro
  for (let i = 0; i < productos.length; i++) {
    let producto = productos[i];
    let nombre = producto.getElementsByClassName("producto-nombre")[0];
    if (nombre.innerHTML.toUpperCase().indexOf(filter) > -1) {
      producto.style.display = "";
    } else {
      producto.style.display = "none";
    }
  }
}
