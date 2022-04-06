//CORTAR/ELIMINAR ESPACIOS EN BLANCO EN STRING

let producto = "                 Monitor 20 pulgadas.       ";
console.log(producto);
console.log(`tamaño: ${producto.length}`);


//eliminar del inicio

console.log("Elimino espacios en blanco desde el inicio");
console.log(producto.trimStart());
console.log("Elimino espacios en blanco desde el final");
console.log(producto.trimEnd());

console.log(`producto queda de la siguiente forma: ${producto}`);
console.log(`Usando solo trim(): ${producto.trim()} observamos que ya se elimina de ambos lados`);