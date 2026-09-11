let formContacto = document.getElementById("formContacto");

formContacto.addEventListener("submit", function(event) {

    event.preventDefault();


    let nombre =
        document.getElementById("nombreContacto").value;

    let correo =
        document.getElementById("correoContacto").value;

    let comentario =
        document.getElementById("comentario").value;


    // Limpiar errores

    document.getElementById("errorNombreContacto").innerHTML = "";

    document.getElementById("errorCorreoContacto").innerHTML = "";

    document.getElementById("errorComentario").innerHTML = "";


    // Validar nombre

    if (nombre == "") {

        document.getElementById("errorNombreContacto").innerHTML =
            "El nombre es obligatorio";

        return;
    }


    if (nombre.length > 100) {

        document.getElementById("errorNombreContacto").innerHTML =
            "El nombre no puede superar 100 caracteres";

        return;
    }


    // Validar correo

    if (correo.length > 100) {

        document.getElementById("errorCorreoContacto").innerHTML =
            "El correo no puede superar 100 caracteres";

        return;
    }


    if (
        correo != "" &&
        !correo.endsWith("@duoc.cl") &&
        !correo.endsWith("@profesor.duoc.cl") &&
        !correo.endsWith("@gmail.com")
    ) {

        document.getElementById("errorCorreoContacto").innerHTML =
            "Correo no permitido";

        return;
    }


    // Validar comentario

    if (comentario == "") {

        document.getElementById("errorComentario").innerHTML =
            "El comentario es obligatorio";

        return;
    }


    if (comentario.length > 500) {

        document.getElementById("errorComentario").innerHTML =
            "El comentario no puede superar 500 caracteres";

        return;
    }


    alert("Mensaje enviado correctamente");

});