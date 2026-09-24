function calcularEdad(edad) {
    return edad * 7;
}
while (true) {
    let edad = prompt("Introduce la edad del animal que deseas calcular");
    if (edad === null) {
        alert("Edad no es valida")
        break;
    }
    edad = Number(edad.trim());

    if (edad > 0 && edad < 30) {
        alert(calcularEdad(edad))
        break;
    }
}