//object literal

const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 200,
    disponible: true
}

//Object Constructor
function contructorProducto (nombre, precio){
    this.nombre = nombre;
    this.precio = precio;
}

let producto2 = new contructorProducto("Television", 40);
console.log(producto2);

let prod3 = new contructorProducto("otro producto", 4);
console.log(prod3);