//variables

const carrito = document.querySelector("#carrito");
/*Busco por id=carrito (es el div que contiene todo) */
const listar_cursos = document.querySelector("#lista-cursos");
/*Lista todos los cursos*/
const contenedorCarrito = document.querySelector("#lista-carrito tbody");
/* selecciono la tabla y dentro el tbody para ir colocando ahi los elementos que clico*/
const vaciarCarritoBtn = document.querySelector("#vaciar-carrito");
/*limpia los elementos del carrito*/


let articulosCarrito = []; //carrito de compra vacio





/*HAY VARIOS LISTENER PORQUE CUANDO YO PRESIENE EN EL BOTON AGREGARCARRITO, TENGO QUE
TENER UN LISTENER Y POR EJEMPLO EN EL BOTON DE VACIAR CARRITO TAMBIEN TENGO OTRO. */

cargarEventListeners();


//funcion para registrar los eventListeners
function cargarEventListeners() {
    //cuando agregar un curso cuando pinchas en Agregar al carrito
    listar_cursos.addEventListener("click", agregarCurso); //CUANDO PRESIONO, VOY A AGREGAR CURSO

    //Elimina cursos del carrito
    carrito.addEventListener("click", eliminarCurso);

    //vaciar el carrito
    vaciarCarritoBtn.addEventListener("click", () =>{
        articulosCarrito = [];
        limpiarHTML();
    })
}


//Funciones

function agregarCurso(e) {
    if (e.target.classList.contains("agregar-carrito")) {
        /*Con el metodo contains ("agregar-carrito"), hacemos que solo el boton o cosa
        que tenga eso, se va a poder seleccionar.
        De la otra forma, cuando pinchabamos en el nombre, se marcaba todo el div. 
        
        PARA SABER ESE contais("agregar-carrito"), hemos puesto esto: 
        console.log(e.target.classList); --> para ver que elementos tenia cuando pinchabas
        en agregar al carrito*/


        /*Esto quita la accion por defecto que tiene (en este caso, ir al enlace por defecto)
        una vez que le damos a Agregar al carrito.
        Se mantiene en el mismo sitio. */
        e.preventDefault();

        //Accion a realizar cuando pulsamos:
        console.log(e.target); //elementos que le damos click


        /*En este caso:
        - Creo una variable para que donde pinche (boton agregar al carrito), 
        directamente vaya al padre (superior) y como ese no es, al suguiente padre.
        Mostrando los dos.
        
        - Esos datos me lo guarda en la variable cursoSeleccionado, que se la mando
        a traves de una funcion leerDatosCurso para que me dé los datos de ese curso.*/

        const cursoSeleccionado = e.target.parentElement.parentElement;
        leerDatosCurso(cursoSeleccionado);

    }



    //extraer informacion del curso
    function leerDatosCurso(curso) {
        // console.log(curso);

        //creamos un objeto con el contenido del curso actual

        const infoCurso = {
            imagen: curso.querySelector("img").src,
            titulo: curso.querySelector("h4").textContent,
            precio: curso.querySelector(".precio span").textContent,
            id: curso.querySelector("a").getAttribute("data-id"),
            cantidad: 1 //cantidad igual a 1 
        }
        console.log(infoCurso);

        //revisa si ya existe en el carrito
        const existe = articulosCarrito.some(curso => curso.id === infoCurso.id);
        if (existe) {
            //actualizamos la cantidad
            const cursos = articulosCarrito.map(curso => {
                if (curso.id === infoCurso.id) {
                    curso.cantidad++;
                    return curso;
                } else {
                    return curso;
                }
            })
        } else {
            //Agrega elementos al carrito
            articulosCarrito = [...articulosCarrito, infoCurso]; //copiamos el carrito e añadimos la info de infoCurso
        }



        console.log(articulosCarrito);

        carritoHTML();
    }

}

//elimina un curso del carrito

function eliminarCurso(e) {
    console.log(e.target.classList);
    if (e.target.classList.contains("borrar-curso")) {
        const cursoId = e.target.getAttribute("data-id");


        //Elimina del arreglo de articulos carrito por el data-id
        articulosCarrito = articulosCarrito.filter(curso => curso.id !== cursoId);
        carritoHTML(); //iteramos sobre el carrito para mostrar su html
    }
}



//muestra el carrito en el logo carrito
function carritoHTML() {

    //LIMPIAR HTML
    limpiarHTML();


    //recorre el carrito y genera el html
    articulosCarrito.forEach(curso => {
        const { imagen, titulo, precio, cantidad, id } = curso;
        const row = document.createElement("tr");
        row.innerHTML = `
        <td>
            <img src= "${imagen}" width="100">
        </td>
        <td>
            ${titulo} 
        </td>
        <td>
            ${precio}
        </td>
        <td>
            ${curso.cantidad}
        </td>
        <td>
            <a href="#" class="borrar-curso" data-id="${id}" > X </a>
        </td>`;

        //agrega el HTML en el <tbody>
        contenedorCarrito.appendChild(row);
    })
}


//ELIMINA LOS CURSOS DE tbody
function limpiarHTML() {
    while (contenedorCarrito.firstChild) {
        contenedorCarrito.removeChild(contenedorCarrito.firstChild);
        /*Este codigo hace:
        - Revisar que mientras haya un hijo, la condicion se cumple, entonces el padre
        elminia el elemento por el primero*/
    }


}