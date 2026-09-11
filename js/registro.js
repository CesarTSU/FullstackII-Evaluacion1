// REGIONES Y COMUNAS

let regiones = [
    {
        nombre: "Región Metropolitana",
        comunas: ["Ñuñoa", "Providencia", "Santiago", "Las Condes"]
    },

    {
        nombre: "Valparaíso",
        comunas: ["Valparaíso", "Viña del Mar", "Quilpué"]
    },

    {
        nombre: "Biobío",
        comunas: ["Concepción", "Talcahuano", "Los Ángeles"]
    }
];


let region = document.getElementById("region");
let comuna = document.getElementById("comuna");


// Mostrar regiones

for (let i = 0; i < regiones.length; i++) {

    region.innerHTML += `
        <option value="${i}">
            ${regiones[i].nombre}
        </option>
    `;
}


// Cambiar comunas cuando cambia la región

region.addEventListener("change", function() {

    comuna.innerHTML =
        '<option value="">Seleccione una comuna</option>';

    if (region.value != "") {

        let numeroRegion = region.value;

        for (let i = 0; i < regiones[numeroRegion].comunas.length; i++) {

            comuna.innerHTML += `
                <option value="${regiones[numeroRegion].comunas[i]}">
                    ${regiones[numeroRegion].comunas[i]}
                </option>
            `;
        }
    }

});


// FORMULARIO DE REGISTRO

let formRegistro = document.getElementById("formRegistro");

formRegistro.addEventListener("submit", function(event) {

    event.preventDefault();


    let run = document.getElementById("run").value;
    let nombre = document.getElementById("nombre").value;
    let apellidos = document.getElementById("apellidos").value;
    let correo = document.getElementById("correo").value;

    let regionSeleccionada =
        document.getElementById("region").value;

    let comunaSeleccionada =
        document.getElementById("comuna").value;

    let direccion =
        document.getElementById("direccion").value;


    // Limpiar mensajes

    document.getElementById("errorRun").innerHTML = "";
    document.getElementById("errorNombre").innerHTML = "";
    document.getElementById("errorApellidos").innerHTML = "";
    document.getElementById("errorCorreo").innerHTML = "";
    document.getElementById("errorRegion").innerHTML = "";
    document.getElementById("errorComuna").innerHTML = "";
    document.getElementById("errorDireccion").innerHTML = "";


    // RUN

    if (run == "") {

        document.getElementById("errorRun").innerHTML =
            "El RUN es obligatorio";

        return;
    }


    if (run.length < 7 || run.length > 9) {

        document.getElementById("errorRun").innerHTML =
            "El RUN debe tener entre 7 y 9 caracteres";

        return;
    }


    if (run.includes(".") || run.includes("-")) {

        document.getElementById("errorRun").innerHTML =
            "Escribe el RUN sin puntos ni guion";

        return;
    }


    // NOMBRE

    if (nombre == "") {

        document.getElementById("errorNombre").innerHTML =
            "El nombre es obligatorio";

        return;
    }


    if (nombre.length > 50) {

        document.getElementById("errorNombre").innerHTML =
            "El nombre no puede superar 50 caracteres";

        return;
    }


    // APELLIDOS

    if (apellidos == "") {

        document.getElementById("errorApellidos").innerHTML =
            "Los apellidos son obligatorios";

        return;
    }


    if (apellidos.length > 100) {

        document.getElementById("errorApellidos").innerHTML =
            "Los apellidos no pueden superar 100 caracteres";

        return;
    }


    // CORREO

    if (correo == "") {

        document.getElementById("errorCorreo").innerHTML =
            "El correo es obligatorio";

        return;
    }


    if (
        !correo.endsWith("@duoc.cl") &&
        !correo.endsWith("@profesor.duoc.cl") &&
        !correo.endsWith("@gmail.com")
    ) {

        document.getElementById("errorCorreo").innerHTML =
            "Correo no permitido";

        return;
    }


    // REGIÓN

    if (regionSeleccionada == "") {

        document.getElementById("errorRegion").innerHTML =
            "Seleccione una región";

        return;
    }


    // COMUNA

    if (comunaSeleccionada == "") {

        document.getElementById("errorComuna").innerHTML =
            "Seleccione una comuna";

        return;
    }


    // DIRECCIÓN

    if (direccion == "") {

        document.getElementById("errorDireccion").innerHTML =
            "La dirección es obligatoria";

        return;
    }


    if (direccion.length > 300) {

        document.getElementById("errorDireccion").innerHTML =
            "La dirección no puede superar 300 caracteres";

        return;
    }


    alert("Usuario registrado correctamente");

});