const carrito = [];

const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300
}

const producto2 = {
    nombre: "Telefono",
    precio: 800
}

const producto3 = {
    nombre: "Teclado",
    precio: 50
}
/*
FORMA IMPERATIVA: MODIFICA LA VARIABLE ORIGINAL. TRABAJAMOS SOBRE ELLA MISMA.
carrito.unshift(producto);
carrito.push(producto2);
carrito.push(producto3);*/


//ECMA6. PROGRAMACION DECLARATIVA

let resultado = [...carrito, producto] ;

console.table(resultado)