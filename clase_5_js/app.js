/* =====================================
=               OBJETOS                =
===================================== */

// const variable = {
//     valor1: clave1,
//     valor2: clave2,
//     valor3: clave3,
// };

// let nombre = "Fernando";
// let edad = 32;
// let direccion = "Córdoba";

// const persona = {
//     nombre: "Fernando",
//     edad: 32,
//     direccion: "Córdoba",
// };

// OBTENER VALORES DEL OBJETO

// console.log(persona.nombre);
// console.log(persona["edad"]);

// ASIGNAR VALORES A LAS PROPIEDADES

// console.log(persona["direccion"] = "San Juan");

// console.log(persona);
// console.table(persona);

// persona.edad = 45

// console.table(persona)

/* =====================================
=               FUNCION CONSTRUCTORA                =
===================================== */

// function Persona(nombre, edad, direccion) {
//     this.nombre = nombre;
//     this.edad = edad;
//     this.direccion = direccion;
// }

// const persona1 = new Persona("Rafael", 25, "Puebla");
// const persona2 = new Persona("Adriana", 20, "Sinaloa");

// console.log(persona1);
// console.log(persona2);

/* =====================================
=               MÉTODOS                =
===================================== */

// let nombre = prompt("Ingresa tu nombre");

// let miNombre = "FERNANDO";
// miNombreLowerCase = miNombre.toLowerCase();
// console.log(miNombreLowerCase)

// let miNombre = "Rafael";
// miNombreUpperCase = miNombre.toUpperCase();
// console.log(miNombreUpperCase);

// console.log(miNombre.length);

// function Persona(nombre, edad, direccion) {
//     this.nombre = nombre;
//     this.edad = edad;
//     this.direccion = direccion;
//     // Método
//     this.hablar = function () {
//         alert(`Hola, soy ${this.nombre}`);
//     }
// };

// const persona1 = new Persona("Rafael", 25, "Puebla");
// const persona2 = new Persona("Adriana", 20, "Sinaloa");
// persona1.hablar();

/* =====================================
=               OPERADOR IN Y FOR...IN                =
===================================== */

// IN

// const persona = {
//     nombre: "Fernando",
//     edad: 32,
//     direccion: "Córdoba",
// };

// console.log("nombre" in persona);
// console.log("calle" in persona);

// FOR...IN

// for (const propiedad in persona) {
//     console.log(persona[propiedad])
// }

/* =====================================
=               CLASES                =
===================================== */

// class Persona {
//     constructor(nombre, edad, direccion) {
//         this.nombre = nombre;
//         this.edad = edad;
//         this.direccion = direccion;
//         // Método
//         this.hablar = function () {
//             alert(`Hola, soy ${this.nombre}`);
//         };
//     }
// };

// const persona1 = new Persona("Rafael", 25, "Puebla");
// persona1.hablar();

/* =====================================
=               CARRITO DE COMPRAS EJEMPLO                =
===================================== */

class Producto {
    constructor(nombre, precio, stock) {
        this.nombre = nombre.toLowerCase();
        this.precio = parseFloat(precio);
        this.stock = stock;
    }
    //Método para actualizar stock del producto
    actualizarStock(nuevoStock) {
        if (nuevoStock > 0) {
            this.stock = nuevoStock;
            console.log(`La cantidad del producto ${this.nombre} se actualizo`);

        }
    }
    verificarStock() {
        if (this.stock > 0) {
            console.log(`El producto ${this.nombre} esta en stock`);
        } else {
            console.log(`El producto ${this.nombre} no esta en stock`);
        }
    }
    aplicarDescuento(porcentajeDescuento) {
        if (porcentajeDescuento < 0 && porcentajeDescuento < 100) {
            this.precio = this.precio - (this.precio * porcentajeDescuento) / 100;
            console.log(`Se ha aplicado un ${porcentajeDescuento}% de descuento al producto ${this.nombre}`);
        } else {
            console.log(`El porcentaje de descuento no es valido`);
        }
    }
}

const producto1 = new Producto("Cafe", 6000, 6);
producto1.verificarStock();
producto1.actualizarStock(10);

console.table(producto1);