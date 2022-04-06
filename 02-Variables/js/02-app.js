console.log(`VARIABLES CON LET`);

// Variables con let
let producto = 'Monitor 23 Pulgadas';

// Las variables también se pueden reasignar
producto = 'Monitor de 19 Pulgadas';

// Incluso a pesar de que la variable se le asigno un valor de tipo string o cadena, puedes asignarle un tipo de dato totalmente diferente
producto = 20;
producto = true;
producto = null;

console.log(`Producto: ${producto}`);

// JavaScript no tiene tipado de datos
let precio = 200;
console.log(`Precio: ${precio}`);

// También se puede inicializar una variable sin valor y asignarlo después
let disponible;
console.log(`Disponible variable = ${disponible}`);
disponible = true;
console.log(`Disponible variable = ${disponible}`);


// Inicializar múltiples variables 
let categoria = 'Computadoras',
    marca = 'Marca Famosa',
    calificacion = 5;

console.log(categoria);
console.log(marca);
console.log(calificacion);


// Reglas:



let dias99;
let _01;
/*var 99dias; //No pueden iniciar con numero
var 01_; //No pueden iniciar con numero*/


// Estilos para nombrar variables con más de una palabra

let  nombreProducto = 'Monitor 30 Pulgadas'; // CamelCase
let nombre_producto = 'Monitor 30 Pulgadas'; //underscore
let NombreProducto = 'Monitor 30 Pulgadas'; // pascal case
let nombreproducto = 'Monitor 30 Pulgadas'