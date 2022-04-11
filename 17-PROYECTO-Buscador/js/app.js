
const marca = document.querySelector("#marca");
const year = document.querySelector("#year");
const minimo = document.querySelector("#minimo");
const maximo = document.querySelector("#maximo");
const puertas = document.querySelector("#puertas");
const transmision = document.querySelector("#transmision");
const color = document.querySelector("#color");

const resultado = document.querySelector("#resultado");


const max = new Date().getFullYear(); //año actual
const min = max - 10; //la agencia de automoviles no quiere vender coches de mas
//de 10 años

//generar objeto con la busqueda
const datosBusqueda = {
    marca: "",
    year: "",
    minimo: "",
    maximo: "",
    puertas: "",
    transmision: "",
    color: ""
}



//Eventos
document.addEventListener("DOMContentLoaded", () => {
    mostrarAutos(autos); //muestra los coches que hay nada mas inicias la pagina


    //añadir año al HTML
    llenarSelect();
})


//event listener para select de busqueda
marca.addEventListener("change", e => {
    datosBusqueda.marca = e.target.value;
    filtrarAuto();
});
year.addEventListener("change", e => {
    datosBusqueda.year = e.target.value;
    filtrarAuto();
});
minimo.addEventListener("change", e => {
    datosBusqueda.minimo = e.target.value;
    filtrarAuto();
});
maximo.addEventListener("change", e => {
    datosBusqueda.maximo = e.target.value;
    filtrarAuto();
});
puertas.addEventListener("change", e => {
    datosBusqueda.puertas = e.target.value;
    filtrarAuto();

});
transmision.addEventListener("change", e => {
    datosBusqueda.transmision = e.target.value;
    filtrarAuto();

});
color.addEventListener("change", e => {
    datosBusqueda.color = e.target.value;
    filtrarAuto();
    console.log(datosBusqueda);


});


//filtros
function filtrarAuto() {
    const resultado = autos.filter(filtrarMarca).filter(filtrarAnio).filter(filtrarMinimo).filter(filtrarMaximo).filter(filtrarPuertas).filter(filtrarTransmision).filter(filtrarColor);

    //console.log(resultado);
    mostrarAutos(resultado);

}

//filtrar por marca
function filtrarMarca(auto) {
    //compara marca unicamente
    if (datosBusqueda.marca) {
        return auto.marca === datosBusqueda.marca;

    } else {
        return auto;
    }
}


//filtrar precio
function filtrarMaximo(auto) {
    if (datosBusqueda.maximo) {
        return auto.precio <= datosBusqueda.maximo;

    } else {
        return auto;
    }
}
function filtrarMinimo(auto) {
    if (datosBusqueda.minimo) {
        return auto.precio >= datosBusqueda.minimo;

    } else {
        return auto;
    }
}





//filtrar por año
function filtrarAnio(auto) {
    if (datosBusqueda.year) {
        return auto.year === parseInt(datosBusqueda.year);
    } else {
        return auto;
    }
}

//filtrar por puertas
function filtrarPuertas(auto) {
    if (datosBusqueda.puertas) {
        return auto.puertas === parseInt(datosBusqueda.puertas);
    } else {
        return auto;
    }
}

//filtrar por transmision
function filtrarTransmision(auto) {
    if (datosBusqueda.transmision) {
        return auto.transmision === datosBusqueda.transmision;
    } else {
        return auto;
    }
}

//filtrar por color
function filtrarColor(auto) {
    if (datosBusqueda.color) {
        return auto.color === datosBusqueda.color;
    } else {
        return auto;
    }
}



function mostrarAutos(autos) {
    limpiarHTML();
    autos.forEach(auto => {
        const autoHTML = document.createElement("p");
        autoHTML.textContent = `${auto.marca} - ${auto.modelo} - ${auto.year} - ${auto.puertas} Puertas - Transmision: ${auto.transmision} Precio: ${auto.precio} - Color: ${auto.color} `;

        //insertar en HTML
        resultado.appendChild(autoHTML);
    })



}

//limpiar html
function limpiarHTML() {
    while (resultado.firstChild) {
        //mientras haya algo
        resultado.removeChild(resultado.firstChild);

    }

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

