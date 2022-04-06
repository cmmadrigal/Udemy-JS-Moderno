//Eliminar elementos del DOM

/*
const primerEnlace = document.querySelector("a");
//enlaces: Vender, Ayuda, Registro, Iniciar_Sesion
primerEnlace.remove(); 
//Borro el primer enlace: Vender
console.log(primerEnlace);
//aparecen enlaces: Ayuda, Registro, Iniciar_Sesion. NO ESTA VENDER
*/

//eLIMINAR DESDE EL PADRE
const navegacion = document.querySelector(".navegacion");
//enlaces: Vender, Ayuda, Registro, Iniciar_Sesion
navegacion.removeChild(navegacion.children[2]);
// Borro el hijo 2 (Registro)
console.log(navegacion.children);
//aparecen enlaces: Vender, Ayuda, Iniciar_Sesion. NO ESTA REGISTRO
