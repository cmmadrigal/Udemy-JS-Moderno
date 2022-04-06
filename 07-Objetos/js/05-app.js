//objetos dentro de objetos

const persona = {
    nombre: "carmen",
    edad: 24,
    sexo: "mujer",
    informacion: {
        estudia: true,
        trabaja: true
    }
    
}

console.log("¿esta persona de nombre: " + persona.nombre + " trabaja? " + persona.informacion.trabaja)