const lista = ["rojo", "azul", "verde", "amarillo"];
let color = prompt("Dime un color y te dire si esta en la lista");
color = color.trim();
color = color.toLowerCase();
if (lista.includes(color)) {
    console.log("Color encontrado");
} else {
    console.log("Color no encontrado");
}


