const arrayA = [];

const arrayB = [1, 2];
const arrayC = ["a", "b"];
const arrayD = [false, true];

const numeros = [1, 2, 3, 4, 5, 6];

// Los arrays comienzan a contar sus valores desde la posición 0
// NO CONFUNDIR VALOR CON LA UBICACION DEL VALOR
console.log(numeros[0]);
console.log(numeros[1]);

let resultado = numeros[2] + numeros[4];
console.log(resultado);

const nombres = ["Fer", "Ale", "Bel"];
console.log(nombres[1]);

/* =====================================
=               FOR                =
===================================== */

const numeros1 = [1, 2, 3, 4, 5, 6];

for (let index = 0; index < 6; index++) {
    console.log(numeros1[index]);
}

/* =====================================
=               LENGTH                =
===================================== */

const numeros2 = ["Juan", "Cristina", "Fer"];

for (let index = 0; index < numeros2.length; index++) {
    alert(numeros2[index]);
}

/* =====================================
=               PUSH                =
===================================== */


const numeros3 = ["Juan", "Cristina", "Fer", "Pedro"];

numeros3.push("Martin");
console.log(numeros3.length);

/* =====================================
=               UNSHIFT                =
===================================== */

const numeros4 = ["Juan", "Cristina", "Fer", "Pedro"];

numeros4.push("Martin");
console.log(numeros4.length);

/* =====================================
=               POP                =
===================================== */

// Elimina el ultimo elemento del array
const numeros5 = ["Juan", "Cristina", "Fer", "Pedro"];

numeros5.pop();
console.log(numeros5);

/* =====================================
=               SHIFT                =
===================================== */

// Elimina el primer elemento del array
const numeros6 = ["Juan", "Cristina", "Fer", "Pedro"];

numeros6.shift();
console.log(numeros6);

/* =====================================
=               SPLICE                =
===================================== */

const numeros7 = ["Juan", "Cristina", "Fer", "Pedro"];

numeros7.splice(1, 2);
console.log(numeros7);

/* =====================================
=               JOIN                =
===================================== */

const numeros8 = ["Juan", "Cristina", "Fer", "Pedro"];

console.log(numeros8.join("***"));

/* =====================================
=               CONCAT                =
===================================== */

// Concatena dos arrays, recibe como parametro el array a concatenar
const perros = ["Roger", "Kia"];
const gatos = ["Mishi", "Garfield"];

const mascotas = perros.concat(gatos);

/* =====================================
=               SLICE                =
===================================== */

const perros1 = ["Roger", "Kia", "Bobby", "Amarillo"];

const mascotas1 = perros.slice(1, 3);
console.log(mascotas1);

/* =====================================
=               INDEX OF                =
===================================== */

// indexOf regresa siempre la posicion donde se encuentra el valor pasado
// En el caso de que el valor no exista devuelve -1

const perros2 = ["Roger", "Kia", "Bobby", "Amarillo"];

console.log(perros2.indexOf("Bobby"));
console.log(perros2.indexOf("random"));

/* =====================================
=               INCLUDES                =
===================================== */

const perros3 = ["Roger", "Kia", "Bobby", "Amarillo"];

console.log(perros3.includes("Amarillo"));

/* =====================================
=               REVERSE                =
===================================== */

const perros4 = ["Roger", "Kia", "Bobby", "Amarillo"];

perros4.reverse();
console.log(perros4);

/* =====================================
=               ARRAY DE OBJETOS                =
===================================== */

// 1

const productos = [
    {
        nombre: "producto-1",
        precio: 4500,
        stock: 13,
    },
    {
        nombre: "producto-2",
        precio: 4500,
        stock: 13,
    },
    {
        nombre: "producto-3",
        precio: 4500,
        stock: 13,
    },
];

// 2

const inventario = [];

const agregarProductos = (nombre, precio, stock) => {
    inventario.push({
        nombre: nombre,
        precio: precio,
        stock: stock,
    });
};

agregarProductos("Arroz", 20, 3);
agregarProductos("Leche", 50, 6);

for (const productos of inventario) {
    console.log(productos.nombre);
    console.log(productos.precio);
    console.log(productos.stock);
}

const mostrarListadoProductos = () => {
    let listado = "Listado de productos";
    for (let i = 0; i < inventario.length; i++) {
        listado += `
        Nombre: ${inventario[i].nombre}
        Precio: ${inventario[i].precio}
        Stock: ${inventario[i].stock}`;
    }
    return console.table(listado);
};

const eliminarProducto = (nombre) => {
    for (let i = 0; i < inventario.length; i++) {
        if (inventario[i].nombre === nombre) {
            inventario.splice(i, 1);
            console.log("Producto eliminado correctamente");
            return;
        }
    }
    console.log("No se encontro el producto");
};

console.log(inventario);
mostrarListadoProductos();
eliminarProducto("Arroz");
mostrarListadoProductos();
eliminarProducto("Fideos");

/* =====================================
=   LO MISMO PERO CON CLASE            =
===================================== */

class Inventario1 {
    constructor() {
        this.inventario = [];
    };

    agregarProductos = (nombre, precio, stock) => {
        inventario.push({
            nombre: nombre,
            precio: precio,
            stock: stock,
        });
    };
    mostrarListadoProductos = () => {
        let listado = "Listado de productos";
        for (let i = 0; i < inventario.length; i++) {
            listado += `
            Nombre: ${inventario[i].nombre}
            Precio: ${inventario[i].precio}
            Stock: ${inventario[i].stock}`;
        }
        return console.table(listado)
    };
    eliminarProducto = (nombre) => {
        for (let i = 0; i < inventario.length; i++) {
            if (inventario[i].nombre === nombre) {
                inventario.splice(i, 1);
                console.log("Producto eliminado correctamente");
                return;
            }
        }
        console.log("No se encontro el producto");
    };
};

const producto1 = new Inventario1();
producto1.agregarProductos("Arroz", 20, 3);