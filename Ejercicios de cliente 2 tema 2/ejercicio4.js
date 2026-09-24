
const coche = {
    marca : "Toyota",
    modelo : "yaris",
    anio : 2020,
    calcularAntigüedad() {
        let anioActual = new Date().getFullYear();
        let diferencia = anioActual - this.anio;
        if (this.anio < 1886 || this.anio > anioActual) {
    this.anio = null;
}  else {
    this.anio = this.anio;
}

        return diferencia;
    }
    
}
if (coche.anio !== null) {
    console.log(coche.anio);
} else {
    console.log("Año no valido");
}
console.log(coche.calcularAntigüedad());

