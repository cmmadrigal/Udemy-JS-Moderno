const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true
}

//DESTRUCTURING

const {nombre} = producto;
console.log(nombre);

//DESTRUCTURING CON ARREGLOS

const numero = [10, 20, 30, 40, 50];
const [valor1, valor2, valor3] = numero;
//valor1= 10,
//valor2= 20,
//valor3= 30
console.log(valor1);
console.log(valor2);
console.log(valor3);

//si solo queremos el valor 30 que esta en la posicion 30:

const [, , tercero] = numero;
console.log(tercero);

//pero si solo queremos los primeros, osea, el 10 y el 20 y
//los restantes queremos que esten en un arreglo, tenemos que hacer:
console.log("");
const [v1, v2, ...loDemas] = numero;
console.log(`v1: ${v1}, v2: ${v2} y lo demas: ${loDemas} `);
