const PRECIOBASE = 150;
const PRECIORIMEL = 170;
const PRECIODELINEADOR = 190;
const PRECIOSOMBRAS = 200;
const BASE = 1
const RIMEL = 2
const DELINEADOR = 3
const SOMBRAS = 4
let nombreItem;
let nombreUsuario;
let precioItem;
let cantidad;
let total = 0;
let opcion;
let ticket = "";
let continuar;

function calcular (total, item, cantidad){
    return total + item*cantidad
}

alert("Bienvenido/a al carrito de compras de la tienda de cosméticos!, presione aceptar para continuar")
do{
    nombreUsuario = prompt("Ingrese su nombre")
    if (nombreUsuario == ""){
        alert ("Debe completar el campo con su nombre!")
    }
} while (nombreUsuario == "")

do{
    opcion = Number(prompt(" 1- Base $150 \n 2- Rimel $170 \n 2- Delineador $190 \n 4- Sombras $200 \n Ingrese la opción que desea agregar al carrito:"));
    switch (opcion) {
        case BASE:
            cantidad = Number(prompt ("ingrese la cantidad"))
            total = calcular (total, PRECIOBASE, cantidad)
            alert("Item agregado correctamente al carrito!")
            total
            break;

        case RIMEL:
            cantidad = Number(prompt ("ingrese la cantidad"))
            total = calcular (total, PRECIORIMEL, cantidad)
            alert("Item agregado correctamente al carrito!")
            break;

        case DELINEADOR:
            cantidad = Number(prompt ("ingrese la cantidad"))
            total = calcular (total, PRECIODELINEADOR, cantidad)
            alert("Item agregado correctamente al carrito!")
            break;

        case SOMBRAS:
            cantidad = Number(prompt ("ingrese la cantidad"))
            total = calcular (total, PRECIOSOMBRAS, cantidad)
            alert("Item agregado correctamente al carrito!")
            break;

        default:
            alert("Opción invalida!")
        }
    continuar = prompt("Desea agregar otro item? si/no")
} while (continuar == "si")


alert (nombreUsuario + ", el total a pagar es: $" + total)
