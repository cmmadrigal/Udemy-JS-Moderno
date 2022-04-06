//boton idioma y moneda

const btnflotante = document.querySelector(".btn-flotante");
const footer = document.querySelector(".footer");

//Al dar clic, hace algo --> EVENTOS


//si alguien le da click, hace la funcion
btnflotante.addEventListener("click", mostrarOcultarFooter);


/*Esta funcion lo que hace es:
1. btnflotante --> Se queda a la escucha de un Evento y cuando hace clic,
llama a la funcion mostrarOcultarFooter.

2. la funcion mostrarOcultarFooter hace:
Si tiene (contais) el activo en activo, lo que hace es quitarlo (remove)
y si no lo tiene activo, lo pone

El activo se mira en el css. btn-flotante.activo y footer.activo*/


function mostrarOcultarFooter() {
    if (footer.classList.contains("activo")) {
        //verifica si un elemento tiene una clase o no.
        //verifica si tiene la clase activo
        footer.classList.remove("activo");
        this.classList.remove("activo");//resalta el color.
        //this --> manda llamar a btnflotante. Osea, que podemos usar this.
        this.textContent = "Idioma y Moneda"; //cambiar las letras
    } else {
        footer.classList.add("activo");
        btnflotante.textContent = "X Cerrar" //cambiar Idioma y Moneda a Cerrar
        btnflotante.classList.add("activo");
    }

    console.log(footer.classList);
    
}
