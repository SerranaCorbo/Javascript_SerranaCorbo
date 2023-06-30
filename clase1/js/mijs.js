const productos = [
    { nombre: "Base", precio: 600, marca: "Maybelline" },
    { nombre: "Rimel", precio: 800, marca: "Maybelline" },
    { nombre: "Delineador", precio: 1200, marca: "Mac" },
    { nombre: "Crema de cuerpo", precio: 650, marca: "Dove" },
    { nombre: "Limpiador facial", precio: 750, marca: "CeraVe" },
];

let nombreItem;
let nombreUsuario;
let precioItem;
let cantidad;
let total = 0;
let opcion;
let ticket = "";
let continuar;
let agregarProducto;

function calcular(total, item, cantidad) {
    return total + item * cantidad;
}

alert("¡Bienvenido/a al carrito de compras de la farmacia! Presiona aceptar para continuar");

do {
    nombreUsuario = prompt("Ingresa tu nombre");
    if (nombreUsuario === "") {
        alert("¡Debes completar el campo con tu nombre!");
    }
} while (nombreUsuario === "");

const correoUsuario = prompt("Ingresa tu correo electrónico");

do {
    const catalogoProductos = productos.map(
        (producto, index) =>
            `${index + 1} ${producto.nombre} $${producto.precio}\n`
    );
    opcion = parseInt(
        prompt(
            "Ingresa la opción que deseas agregar al carrito:\n" +
                catalogoProductos.join("")
        )
    );

    while (opcion <= 0 || opcion > catalogoProductos.length) {
        opcion = parseInt(
            prompt(
                "Valor incorrecto, elige un producto de la lista:\n" +
                    catalogoProductos.join("")
            )
        );
    }

    cantidad = parseInt(prompt("Introduce la cantidad que deseas agregar:"));
    total = calcular(
        total,
        productos[opcion - 1].precio,
        cantidad
    );

    agregarProducto = prompt("¿Deseas agregar otro producto al carrito? (si/no)");
} while (agregarProducto === "si");

let usuario = {
    nombre: nombreUsuario,
    email: correoUsuario
};

console.log(usuario);

