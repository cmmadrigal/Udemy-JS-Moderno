//CREAR ELEMENTOS

//Creo un enlace (a), creo un div (div), creo un parrafo (p)
const enlace = document.createElement("a"); //Enlace.
//const enlace = document.createElement("p"); //parrafo.




//MEETOOOODOOS

//Añadimos un texto
enlace.textContent = "Nuevo enlace";

//AÑadimos href
enlace.href = '/nuevo-enlace';
console.log(enlace);

//QUIERO AÑADIRLO CON LOS OTROS DE VENDER, REGISTRO ETC
const navegacion = document.querySelector(".navegacion");
//navegacion.appendChild(enlace); //Agregar un nuevo hijo y agregar.

console.log(navegacion.children);
navegacion.insertBefore(enlace, navegacion.children[1]); //insertar antes de la posicion 1
//lo coloca al final PERO QUIERO COLOCARLO ENTRE VENDER Y AYUDA



