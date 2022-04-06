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

const producto4 = {
    nombre: "Celular",
    precio: 100
}

const producto5 = {
    nombre: "PC",
    precio: 1500
}
carrito.unshift(producto3);
carrito.push(producto2);
carrito.push(producto);
carrito.push(producto4);
carrito.push(producto5);

console.table(carrito);


//eliminar ultimo elemento de un arreglo
console.log(`Voy a ELIMINAR el ULTIMO elemento de una arreglo. Desde atras hacia delante`)
carrito.pop();

console.table(carrito);

//eliminar del inicio del arreglo
console.log(`Voy a ELIMINAR el PRIMER elemento de un arreglo. De alante hacia atras.`)
carrito.shift();
console.table(carrito);

//Eliminar de en medio de un arreglo
console.log(`Voy a ELIMINAR del medio del array`);
carrito.splice(1,2);
console.table(carrito);