//QuerySelector

/*ACTUA SIMILAR A getElementById, retorna solo el primero que encuentre */

const card = document.querySelector(".card");
console.log(card);

/*retorna solo 1 elemento pero si no existe, no retorna nada*/ 

//PODEMOS TENER SELECTORES ESPECIFICOS COMO CSS
const info = document.querySelector(".premium .info");
//.premium (ESPACIO) .info (PORQUE CLASS=INFO ES HIJO DE CLASS= DKLFJASJ PREMIUM)
console.log(info);

//seleccionar el segundo card de la clase hospedaje
const segundoCard = document.querySelector(".hospedaje .card:nth-child(2)");//la seccion de la clase hospedaje.
console.log(segundoCard);

//formulario
const formulario = document.querySelector("#formulario"); // #para darle estilos
console.log(formulario);


