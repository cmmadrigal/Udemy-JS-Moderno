//VARIBALES
const btnEnviar = document.querySelector("#enviar");
const formulario = document.querySelector("#enviar-mail");

//variables para campos
const email = document.querySelector("#email");
const asunto = document.querySelector("#asunto");
const mensaje = document.querySelector("#mensaje");
const expresionRegular = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;



eventListener();

function eventListener() {
    document.addEventListener("DOMContentLoaded", iniciarApp);

    //campos funcionario
    email.addEventListener("blur", validarFormulario);//blur se ejecuta cuando este en el campo y me salga
    asunto.addEventListener("blur", validarFormulario);//blur se ejecuta cuando este en el campo y me salga
    mensaje.addEventListener("blur", validarFormulario);//blur se ejecuta cuando este en el campo y me salga

}




//FUNCIONES
function iniciarApp() {
    btnEnviar.disabled = true; //desabilitar un boton
    btnEnviar.classList.add("Cursos-not-allowed", "opacity-50"); //otra forma de desabilitar el boton
}

function validarFormulario(e) {

    // console.log(e.target.value);//coge el valor que le meto en email

    if (e.target.value.length > 0) {

        //elimina los errores
        const error = document.querySelector("p.error");
        if (error) {
            error.remove();
        }
        e.target.classList.remove("border", "border-red-500");
        e.target.classList.add("border", "border-green-500");


    } else {
        //e.target.style.borderBottomColor = "red"; //Si no tiene nada, que se ponga en rojo
        e.target.classList.remove("border", "border-green-500");
        e.target.classList.add("border", "border-red-500");
        mostrarError("Todos los campos son obligatorios");
    }
    if (e.target.type === "email") {

        //const resultado = e.target.value.indexOf("@"); //busca en el string que haya una arroba
        if (expresionRegular.test(e.target.value)) {
            /*Para que aparezca como una notificacion visible como campo obligatorio
            mostrarError("El email valido");*/
            const error = document.querySelector("p.error");
            if (error) {
                error.remove();
            }
            e.target.classList.remove("border", "border-red-500");
            e.target.classList.add("border", "border-green-500");
        } else {
            e.target.classList.remove("border", "border-green-500");
            e.target.classList.add("border", "border-red-500");
            mostrarError("Email no valido");
        }
    }


    if (expresionRegular.test(email.value) !== "" && asunto.value !== "" && mensaje !== "") {
        btnEnviar.disabled = false; //desabilitar un boton
        btnEnviar.classList.remove("Cursos-not-allowed", "opacity-50");
    }

    function mostrarError(mensajeEr) {
        const mensajeError = document.createElement("p"); //creo un parrafo
        mensajeError.textContent = mensajeEr;
        mensajeError.classList.add("mt-5", "text-center", "error", "border", "border-red-500", "background-color-100", "text-red-500", "p-3");


        const errores = document.querySelectorAll(".error");
        if (errores.length === 0) {
            //Agregarle el mensaje de error

            /*Mensaje de error arriba
            formulario.insertBefore(mensajeError, document.querySelector(".mb-10")); */

            /*Mensaje de error abajo*/
            formulario.appendChild(mensajeError);
        }

    }
}