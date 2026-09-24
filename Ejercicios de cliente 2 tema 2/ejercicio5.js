const tienda = {
    producto: [
        {
            nombre: "Cuaderno",
            precio: 4
        },
        {
            nombre: "Boligrafo",
            precio: 2
        },
        {
            nombre: "Mochila",
            precio: 25
        }
    ],
    calcularTotal() {
        let suma = 0;
    
        for (i = 0; i < this.producto.length; i++) {
            suma = suma + this.producto[i].precio;
        }
        return suma;
    }
    
}
console.log("Total:", tienda.calcularTotal().toFixed(2) + " €");






