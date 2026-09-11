let formProducto = document.getElementById("formProducto");

formProducto.addEventListener("submit", function(event) {

    event.preventDefault();


    let codigo = document.getElementById("codigo").value;

    let nombre = document.getElementById("nombreProducto").value;

    let precio = document.getElementById("precio").value;

    let stock = document.getElementById("stock").value;

    let categoria = document.getElementById("categoria").value;


    // Limpiar errores

    document.getElementById("errorCodigo").innerHTML = "";

    document.getElementById("errorNombreProducto").innerHTML = "";

    document.getElementById("errorPrecio").innerHTML = "";

    document.getElementById("errorStock").innerHTML = "";

    document.getElementById("errorCategoria").innerHTML = "";


    // Código

    if (codigo == "") {

        document.getElementById("errorCodigo").innerHTML =
            "El código es obligatorio";

        return;
    }


    if (codigo.length < 3) {

        document.getElementById("errorCodigo").innerHTML =
            "El código debe tener mínimo 3 caracteres";

        return;
    }


    // Nombre

    if (nombre == "") {

        document.getElementById("errorNombreProducto").innerHTML =
            "El nombre es obligatorio";

        return;
    }


    if (nombre.length > 100) {

        document.getElementById("errorNombreProducto").innerHTML =
            "El nombre no puede superar 100 caracteres";

        return;
    }


    // Precio

    if (precio == "") {

        document.getElementById("errorPrecio").innerHTML =
            "El precio es obligatorio";

        return;
    }


    if (precio < 0) {

        document.getElementById("errorPrecio").innerHTML =
            "El precio no puede ser negativo";

        return;
    }


    // Stock

    if (stock == "") {

        document.getElementById("errorStock").innerHTML =
            "El stock es obligatorio";

        return;
    }


    if (stock < 0) {

        document.getElementById("errorStock").innerHTML =
            "El stock no puede ser negativo";

        return;
    }


    // Categoría

    if (categoria == "") {

        document.getElementById("errorCategoria").innerHTML =
            "Seleccione una categoría";

        return;
    }


    alert("Producto guardado correctamente");

});