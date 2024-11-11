/* =====================================
=               SPREAD DE ARRAYS                =
===================================== */

const nombres = ["Juan", "Pedro", "Matias"];
console.log(nombres);

const numeros = [1, 2, 3, 4, 5];
console.log(numeros);

console.log(Math.max(numeros));

console.log(Math.max(...numeros));

const nombres2 = ["Manuel", "Maria", "Lucia"];
const nombres3 = ["Carlos", "Jose", "Ana"];

const contenedorNombres = [...nombres2, ...nombres3];
console.log(contenedorNombres);

const miObjeto = {
    ...contenedorNombres,
};

console.log(miObjeto);

/* =====================================
=               SPREAD DE OBJETOS                =
===================================== */

const usuario = {
    nombre: "Manuel",
    edad: 32,
    curso: "Javascript",
};

const usuario2 = {
    ...usuario,
    curso: "React",
    email: "manuel@gmail.com"
};

console.log(usuario, usuario2);

/* =====================================
=               REST PARAMETERS                =
===================================== */

function sumar(...numeros) {
    console.log(numeros);
}

sumar(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

/* =====================================
=               EJEMPLO DE ECOMMERCE                =
===================================== */

const producto = {
    id: 1,
    nombre: "Arroz",
    precio: 1500,
    cantidad: 1,
};

const producto1 = {
    id: 2,
    nombre: "Fideo",
    precio: 2000,
    cantidad: 1,
};

let carrito = [{ ...producto }, { ...producto1 }];

function agregarAlCarrito(producto) {
    const productoExistente = carrito.find((item) => item.id === producto.id);
    if (productoExistente) {
        carrito = carrito.map((item) => item.id === producto.id ? { ...item, cantidad: item.cantidad++ } : item);
    } else {
        carrito = [...carrito, { ...producto, cantidad: 1 }];
    }
}