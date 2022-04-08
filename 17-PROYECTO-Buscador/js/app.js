const resultado = document.querySelector("#resultado");
const year = document.querySelector("#year");
const max = new Date().getFullYear(); //año actual
const min = max - 10; //la agencia de automoviles no quiere vender coches de mas
//de 10 años

//generar objeto con la busqueda
const datosBusqueda = {
    marca: "",
    year: "",
    minimo: "",
    maximo:"",
    transmision:"",
    color:""
}



//Eventos
document.addEventListener("DOMContentLoaded", () => {
    mostrarAutos(); //muestra los coches que hay nada mas inicias la pagina


    //añadir año al HTML
    llenarSelect();
})

function mostrarAutos() {
    autos.forEach(auto => {
        const autoHTML = document.createElement("p");
        autoHTML.textContent = `${auto.marca} - ${auto.modelo} - ${auto.year} - ${auto.puertas} Puertas - Transmision: ${auto.transmision} Precio: ${auto.precio} - Color: ${auto.color} `;

        //insertar en HTML
        resultado.appendChild(autoHTML);
    })



}

function llenarSelect() {
    //Corre alreves, mostrando primero 2020, 2019, etc
    for (let i = max; i >= min; i--) {
        const opcion = document.createElement('option'); //para meter opciones en el html
        opcion.value = i; //opcion = al año en cada iteraccion
        // console.log(opcion.value);
        opcion.textContent = i; //lenguaje HTML para el HTML pero no añadido, si cargado
        // console.log(opcion);
        year.appendChild(opcion); //cargar en el html
        // console.log(opcion);

    }

}

