const persona = {
    nombre: "Laura",
    edad : 24,
    profesion: "Desarrolladora",

    describir() {
        return `${this.nombre} tiene ${this.edad} años y trabaja como ${this.profesion}`;
    }
}
console.log("Nombre", persona.nombre);
console.log("Edad: ", persona.edad);
console.log("Desarrolladora: ", persona.profesion);
console.log(persona.describir());
persona.edad = 25;
console.log(persona.describir());





