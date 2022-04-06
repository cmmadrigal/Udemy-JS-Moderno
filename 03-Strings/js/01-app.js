const producto = "Monitor de 20 pulgadas";

//Cantidad de letras:
console.log(`la variable producto tiene un total de ${producto.length} letras`);

//incluye la palabra pulgadas, 20, de, monitor, Monitor y pantalla.
console.log("Incluye pulgadas:" + producto.includes("pulgadas"));
console.log("Incluye 20:" + producto.includes(20));
console.log("Incluye de:" + producto.includes("de"));
console.log("Incluye monitor:" + producto.includes("monitor"));
console.log("Incluye Monitor:" + producto.includes("Monitor"));
console.log("Incluye pantalla:" + producto.includes("pantalla"));

//te muestra si la variable contiene la letra

console.log("Contiene la letra m: " +producto.indexOf("m"));
console.log("Contiene la letra M: " +producto.indexOf("M"));
console.log("Contiene palabra Monitor: " +producto.indexOf("Monitor"));
let palabra = "palabra";
console.log("palabra contiene la A 3 veces pero te muestro la de la posicion: " + palabra.indexOf("a"));


