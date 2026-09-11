function agregarDetalle() {

    let producto = {
        nombre: "Pastel de choclo",
        precio: 8500,
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbVxiEKOJeDxLqfpPyW6FvPpj2Z3CPV7smD9-fffslaw&s=10"
    };

    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    carrito.push(producto);

    localStorage.setItem("carrito", JSON.stringify(carrito));

    alert("Producto agregado al carrito");
}