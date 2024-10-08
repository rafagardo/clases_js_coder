/* =====================================
=               DECLARACION DE FUNCION                =
===================================== */
/*
function nombreDeLaFuncion() {
    codigo que quiero procesar
}
*/

/*
function sumaDeNumeros () {
    let num1 = 9;
    let num2 = 10;
    
    sumaDeNumeros = num1 + num2;
    console.log(sumaDeNumeros);
    
}

sumaDeNumeros()
*/

/*
function sumarNumeros(num3, num4) {
    const resultadoDeSuma = num1 + num2;
    console.log(resultadoDeSuma)
}

sumarNumeros(9, 7);
sumarNumeros(10, 20);
*/

/* =====================================
=               RETURN                =
===================================== */


/*
function sumarNumeros(num3, num4) {
    const resultadoDeSuma = num1 + num2;
    return resultadoDeSuma // es como en python, aqui si guarda el valor, no solo imprime
}

sumarNumeros(9, 7);
sumarNumeros(10, 20);
*/

/* =====================================
=               SCOPE                =
===================================== */

/*
* 
var variable = 9; // variable de alcance global

function sumar(num1, num2) {
    let resultado = num1 + num2 // variable de alcance local, este en un bloque ({})
}
*
*/

/*
*
let nombre = 'Fernando';

function saludar() {
    let nombre = "Juan";
    console.log(nombre); // imprime Juan
}

saludar() // imprime Juan
console.log(nombre); // imprime Fernando
*
*/

/* =====================================
=               FUNCIONES ANONIMAS Y FLECHA                =
===================================== */

/*
*
const suma = function(a, b){ // funcion anonima es una funcion que no tiene nombre
    return console.log(a + b);
}

suma(9, 7)
*
*/

/*
*
const resta = (a,b) => { // se omite la palabra reservada function y se utiliza una flecha (=>)
    return console.log(a-b);
}

const resta = (a,b) => console.log(a-b); // ademas tiene un return implicito (se quitan llaves y la palabra return)

resta(18, 9);
*
*/

/*
*

*
*/

const resta = (a,b) => a-b; // ademas tiene un return implicito (se quitan llaves y la palabra return)

const suma = function(a,b){
    return a+b;
}

const calculoIva = (precio) => {
    const precioConIva = precio * 0.16;
    return precioConIva;
}

const precioProducto = calculoIva(2100);
console.log(precioProducto);

const precioProducto2 = calculoIva(suma(10, 20));
console.log(precioProducto2);

const precioProducto3 = calculoIva(resta(30, 10));
console.log(precioProducto3);

/* =====================================
=               EJEMPLO PARA PRIMER ENTREGA                =
===================================== */

/*
*

*
*/

const aplicarDescuento = (precio, descuento) => {
    const precioConDescuento = precio - (precio * descuento) / 100;
    return precioConDescuento;
}

const calcularImpuestos = (precio) => {
    precioConImpuestos = precio * 0.16;
    return precioConImpuestos;
}

let totalDeProductos = 0;
let agregar = confirm("Quieres agregar un producto?");

while(agregar){
    let precioDelProducto = parseFloat(prompt("Por favor ingresa el precio del producto"));
    
    if(!isNaN(precioDelProducto)){
        const precioConIva = calcularImpuestos(precioDelProducto);
        totalDeProductos += precioConIva;
        alert("Producto agregado exitosamente");
        agregar = confirm("Quieres agregar otro prodcuto?");
    } else {
        alert("Precio Invalido");
    }
}

if(totalDeProductos > 0){
    let descuento =  parseFloat(prompt("Ingresa el monto de descuento"));
    const precioFinal = aplicarDescuento(totalDeProductos, descuento);
    alert(`El monto final de la compra es de ${precioFinal}`)
}
