const empleados = ["ana", "luis", "marta", "pedro", "lucia", "carlos", "elena"];

let nombre = prompt("Introduce un nombre");
if (nombre == null) {
    console.log("Has dejado el campo vacio");
} else {
    nombre = nombre.trim();
    if (nombre == "") {
        console.log("No has escrito ningun nombre");
    } else {
        nombre = nombre.toLowerCase();
        if (empleados.includes(nombre)) {
            console.log("Hola " + nombre);
        } else {
            console.log(nombre + " no está en la lista");
        }
    } 
}
