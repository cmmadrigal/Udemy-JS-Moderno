const producto = {
    nombre: "Monitor",
    precio: 300
}

const medidas = {
    peso: "1 kg",
    medida: "pulgadas"
}


let result = Object.assign(producto,medidas);
console.log(result);