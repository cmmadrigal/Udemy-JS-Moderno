const persona = { 
    nombre: "carmen",
    edad: 24,
    sexo: "mujer"
}
console.log(persona);


//agregar a la estructura un nuevo objeto
persona.hermano= true;

console.log("he añadido y ahora muestro");
console.log(persona);


//para borrar una propiedad del objeto

delete persona.edad;
console.log(persona);