//Seleccionar elementos por su ID

const formulario = document.getElementById("formulario");
console.log(formulario);
/* solo retorna un elemento con ese ID, aunque existieran 2, 
solo te retorna el primero que encuentre. 

Esto no pasa con getElementByClassName, que te retorna todos
las clases que tengan esa clase.*/

//********************************************************** */


//ID no existe
const noExisteId = document.getElementById("noexisteEsteID");
console.log(noExisteId); //retorna null porque no existe el id




