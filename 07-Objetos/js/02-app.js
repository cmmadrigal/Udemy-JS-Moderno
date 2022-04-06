//Para acceder a los valores de un objeto

const persona = {
    nombre: "Carmen",
    edad: 24,
    sexo: "mujer"
}

console.log(`el nombre es ${persona.nombre}`);
console.log("La edad es: " + persona['edad']);
console.log(persona.nombre + " es " + persona['sexo']);
console.log(`Con backticks: ${persona['edad']} y se llama ${persona.nombre}`);