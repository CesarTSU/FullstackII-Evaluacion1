let formulario = document.getElementById("formLogin");

formulario.addEventListener("submit", function(event) {

    event.preventDefault();

    let correo = document.getElementById("correo").value.trim();
    let contrasena = document.getElementById("contrasena").value.trim();

    let errorCorreo = document.getElementById("errorCorreo");
    let errorContrasena = document.getElementById("errorContrasena");

    errorCorreo.innerHTML = "";
    errorContrasena.innerHTML = "";


    if (correo == "") {

        errorCorreo.innerHTML = "El correo es obligatorio";
        return;
    }


    if (correo.length > 100) {

        errorCorreo.innerHTML =
            "El correo no puede superar los 100 caracteres";

        return;
    }


    if (
        !correo.endsWith("@duoc.cl") &&
        !correo.endsWith("@profesor.duoc.cl") &&
        !correo.endsWith("@gmail.com")
    ) {

        errorCorreo.innerHTML = "Correo no permitido";
        return;
    }


    if (contrasena == "") {

        errorContrasena.innerHTML =
            "La contraseña es obligatoria";

        return;
    }


    if (contrasena.length < 4 || contrasena.length > 10) {

        errorContrasena.innerHTML =
            "La contraseña debe tener entre 4 y 10 caracteres";

        return;
    }


    // LOGIN DEL ADMINISTRADOR

    if (correo == "admin@duoc.cl" && contrasena == "1234") {

        alert("Bienvenido administrador");

        window.location.href = "./admin.html";

        return;
    }


    alert("Inicio de sesión correcto");

});