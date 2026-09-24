const productos = [];

while (true) {
    let producto = prompt("Escribe un producto: ");
    if (producto == null) {
        break;
    }
    producto = producto.trim();
    if (producto == "") {
        console.log("No puedes dejar el campo vacio");
    } else {
        productos.push(producto)
    }
}
if (productos.length === 0) {
    console.log("La lista esta vacia")
} else {
    console.log("Lista de productos: ", productos)
    console.log("Número de productos: ", productos.length);
}
// he cambiado mi forma de poner los log porque acabo de prender que se puede poner con una coma y es mas practico



