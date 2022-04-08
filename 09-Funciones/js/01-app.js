// Declaracion de funcion

//Funciona antes de crear la funcion
sumar();
function sumar() {
    console.log(2 + 2);
}


//Funcion de expresion
//suma(); //No funciona
const suma = function () {
    console.log(2 + 3);
}
suma();


/* LA DIFERENCIA ENTRE ESTAS DOS ES: 

1. En las funciones de expresion no se pueden utilizar antes de crearlas. 
2. en las funciones declarativas si puede darse este caso.
*/


//Funciones que vienen en JS
alert("Esta es la funcion alert");
let nombre = prompt("¿Cual es tu nombre");
console.log(nombre);