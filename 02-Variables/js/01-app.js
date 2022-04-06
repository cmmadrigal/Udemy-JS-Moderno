console.log(`VARIABLES CON VAR`);

// Variable con var
var producto = 'Monitor 23 Pulgadas';

// Reasignacion de variables
producto = 'Monitor de 19 Pulgadas';
console.log(producto);

// Javascript no tiene tipado de datos
var precio = 200;
console.log(`Precio: ${precio}`);

// También se puede inicializar una variable sin valor y asignarlo después

var disponible;
console.log(`Disponible variable = ${disponible}`);
disponible = true;
console.log(`Disponible variable = ${disponible}`);


// Inicializar múltiples variables 
var categoria = 'Computadoras',
    marca = 'Marca Famosa',
    calificacion = 5;

console.log(categoria);
console.log(marca);
console.log(calificacion);


// REGLAS:

var dias99;
var _01;
/*var 99dias; //No pueden iniciar con numero
var 01_; //No pueden iniciar con numero*/

// Estilos para nombrar variables con más de una palabra

var  nombreProducto = 'Monitor 30 Pulgadas'; // CamelCase
var nombre_producto = 'Monitor 30 Pulgadas'; //underscore
var NombreProducto = 'Monitor 30 Pulgadas'; // pascal case
var nombreproducto = 'Monitor 30 Pulgadas'