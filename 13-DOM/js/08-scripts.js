//Recorrer el DOM
/*
const navegacion = document.querySelector(".navegacion");
console.log(navegacion);


//LOS ESPACIOS EN BLANCO SON CONSIDERADOS ELEMENTOS (SALTOS DE LINEA)
console.log(navegacion.childNodes);


//MUESTRA ELEMENTOS QUE SEAN HIJOS DE NAVEGACION//no coge espacios en blanco, saltos
console.log(navegacion.children);
console.log("************");

//Accede a los documentos, en concreto, el primer documento (se cuenta desde 0)
console.log(navegacion.children[1]);
console.log(navegacion.children[1].nodeName);
//tipo 1 es un nodo del tipo elemento.//etiquetas HTML 
console.log(navegacion.children[1].nodeType); 

*/

//Estamos navegando para cambiar el TEXTO
const card = document.querySelector(".card");
card.children[1].children[1].textContent = "Nuevo encabezado desde traversing the dom"
console.log(card.children[1].children[1].textContent);

// //navegando para cambiar la IMAGEN
// const card2 = document.querySelector(".card");
// card2.children[0].src = '/img/hacer3.jpg';
// console.log(card2.children[0]);

//primer elemento firstElementChild
//ultimo elemento lastElementChild