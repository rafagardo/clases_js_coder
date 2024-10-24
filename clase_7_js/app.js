/* =====================================
=               ABSTRACCION                =
===================================== */

let numero1 = 9;
let numero2 = 10;

const resultado = numero1 + numero2;

console.log(resultado);

let numero3 = 9;
let numero4 = 10;

const resultado1 = numero3 + numero4;

console.log(resultado1);

function sumar(num1, num2) {
    return num1 + num2;
};

function resta(num1, num2) {
    return num1 - num2;
};

function multiplicar(num1, num2) {
    return num1 * num2;
};

sumar(8, 8);
resta(8, 8);
multiplicar(8, 8);

// Ejemplo de abstraccion

function operar(num1, num2, operacion) {
    return operacion(num1, num2);
};

console.log(operar(4, 8, sumar));

// Otro ejemplo de abstraccion

function puedeVotar(edad) {
    return edad >= 18;
};

function puedeBeber(edad) {
    return edad >= 21;
};

function verificarEdad(edad, condicion) {
    return condicion(edad);
};

verificarEdad(20, puedeBeber);

// NOTA: Una funcion de orden superior, retorna una funcion

function aplicarDescuento10(precio) {
    return precio * 0.9;
};

function aplicarDescuento50(precio) {
    return precio * 0.5;
};

function aplicarDescuento(precio, calcularDescuento) {
    return calcularDescuento(precio);
};

aplicarDescuento(1000, aplicarDescuento50);

/* =====================================
=               FUNCIONES COMO PARAMETROS                =
===================================== */

let numeros = [1, 2, 3, 4, 5, 6];
let total = 0;
const nuevoArrayConNumerosMultiplicados = [];

function porCadaUno(array, funcion) {
    for (let elemento of array) {
        funcion(elemento);
    }
};

porCadaUno(numeros, console.log);

function acumular(numero) {
    total += numero;
};

porCadaUno(numeros, acumular);
console.log(total);

function multiplicarPorDos(numero) {
    nuevoArrayConNumerosMultiplicados.push(numero * 2);
};

porCadaUno(numeros, multiplicarPorDos);
console.log(nuevoArrayConNumerosMultiplicados);

// Para hacer la abstraccion:

// porCadaUno(numeros, (numero) => nuevoArrayConNumerosMultiplicados.push(numero*2));

/* =====================================
=               FOR EACH                =
===================================== */

let num = [1, 2, 3, 4, 5, 6];

num.forEach((num) => {
    console.log(num);
});

/* =====================================
=               FIND                =
===================================== */

const cursos = [
    { nombre: "JavaScript", precio: 1000 },
    { nombre: "React JS", precio: 2000 }
]

const existeCurso = cursos.find((curso) => {
    curso.nombre === "React JS"
});

console.log(existeCurso);

/* =====================================
=               FILTER                =
===================================== */

const cursosCaros = cursos.filter((curso) => {
    curso.precio > 1500
});

console.log(cursosCaros);

/* =====================================
=               SOME                =
===================================== */

const cursoBackend = cursos.some((curso) => {
    curso.nombre === "JavaScript"
});

/* =====================================
=               MAP                =
===================================== */

const nombresCursos = cursos.map((curso) => {
    cursos.nombre
});

/* =====================================
=               REDUCE                =
===================================== */

const num2 = [1, 2, 3, 4, 5];

const totalNum2 = num2.reduce((acumulador, elemento) => {
    acumulador + elemento, 0
});

console.log(totalNum2);

/* =====================================
=               SORT                =
===================================== */

const numerosOrdenados = num2.sort((a, b) => a - b);

/* =====================================
=               EJEMPLO ENFOCADO A UN ECOMMERCE                =
===================================== */

const productos = [
    {
        id: 1,
        nombre: "Arroz",
        precio: 100.
    },
    {
        id: 2,
        nombre: "Cafe",
        precio: 50.
    },
    {
        id: 3,
        nombre: "Leche",
        precio: 20.
    },
    {
        id: 4,
        nombre: "Pan",
        precio: 10.
    },
];

const buscador = productos.find((producto) => producto.id === 3);
console.log(buscador);

const existenciaProducto = productos.some((producto) => producto.nombre === "Pan");
console.log(existenciaProducto);

const productosBaratos = productos.filter((producto) => producto.precio < 30);
console.log(productosBaratos);