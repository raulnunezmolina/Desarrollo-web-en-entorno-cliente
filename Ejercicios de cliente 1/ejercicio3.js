const nombre = "Ana López";
const profesion = "Administrativa";
const antigüedad = 3;
const sueldo = 1200;
const plus = sueldo * 0.1 * antigüedad;
const sueldoTotal = sueldo + plus;

console.log("Nombre: " + nombre + " Profesión: " + profesion + " Antigüedad: " + antigüedad + " años");
console.log("Sueldo base: " + sueldo + "€");
console.log("plus: " + plus.toFixed(2) + "€");
console.log("sueldo total: " + sueldoTotal.toFixed(2) + "€");
