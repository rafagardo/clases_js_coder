/* =====================================
=               OPERADOR++                =
===================================== */

let numero = 10;
console.log(numero);

numero = numero + 1;
console.log(numero);

numero += 1
console.log(numero);

numero++;
console.log(numero);

/* =====================================
=               OPERADOR TERNARIO                =
===================================== */

let temperatura = 31;

if (temperatura > 30) {
    console.log("Dia caluroso");
} else {
    console.log("Dia agradable");
}

// condicion ? caso1 : caso2 (permite evaluar el if... else ...)

temperatura > 30 ? console.log("Dia caluroso") : console.log("Dia agradable");

const usuario = {
    nombre: "Fernando",
    edad: 32,
};

let permiso;

if (usuario.edad >= 18) {
    permiso = true;
} else {
    permiso = false;
}

if (permiso) {
    console.log("Puedo ingresar");
} else {
    console.log("No puede ingresar");
}

const permiso1 = (usuario.edad >= 18) ? true : false;
permiso1 ? console.log("Puede ingresar") : console.log("No puede ingresar");

/* =====================================
=               OPERADOR LOGICO and &&                =
===================================== */

const carrito = [];

if (carrito.length === 0) {
    console.log("El carrito esta vacio");
}

carrito.length === 0 && console.log("El carrito esta vacio"); // solo permite evaluar el if

carrito.length === 0 ? console.log("El carrito esta vacio") : console.log(`Tienes ${carrito.length} articulos`);

/* =====================================
=               OPERADOR LOGICO or ||                =
===================================== */

console.log(0 || "Falsy"); // Falsy
console.log(40 || "Falsy"); // 40
console.log(null || "Falsy"); // Falsy
console.log(undefined || "Falsy"); // Falsy
console.log("Hola mundo" || "Falsy"); // Hola mundo
console.log("" || "Falsy"); // Falsy
console.log(NaN || "Falsy"); // Falsy
console.log(true || "Falsy"); //true
console.log(false || "Falsy"); //Falsy

const usuario1 = {
    nombre: "Juan",
    edad: 32,
};

const usuario2 = null;

console.log(usuario1 || "El usuario no existe"); //imprime el objeto
console.log(usuario2 || "El usuario no existe"); //"El usuario no existe"

let tareas;

let tareasEnLocalStorage = JSON.parse(localStorage.getItem("tareas"));

if (tareasEnLocalStorage) {
    tareas = tareasEnLocalStorage;
} else {
    tareas = []
}

/* =====================================
=               nullish coalescing                =
===================================== */

console.log(0 ?? "Nullish"); // 0
console.log(40 ?? "Nullish"); // 40
console.log(null ?? "Nullish"); // Nullish
console.log(undefined ?? "Nullish"); // Nullish
console.log("Hola mundo" ?? "Nullish"); // Hola mundo
console.log("" ?? "Nullish"); // ""
console.log(NaN ?? "Nullish"); // NaN
console.log(true ?? "Nullish"); //true
console.log(false ?? "Nullish"); //false

const usuario3 = null;

// Esto arroja un error en consola y rompe la aplicacion
// console.log(usuario3.nombre || "El usuario no existe");

console.log(usuario3?.nombre || "El usuario no existe");

const usuario4 = {
    nombre: "Manuel",
    edad: 32,
    direccion: {
        calle: "Paseo Orquideas",
        numero: 2,
    },
};

console.log(usuario4?.direccion?.calle || "La propiedad no existe");
console.log(usuario4?.direccion?.cp || "La propiedad no existe");

/* =====================================
=               DESESTRUCTURACION                =
===================================== */

const usuario5 = {
    nombre: "Manuel",
    edad: 32,
    direccion: {
        calle: "Paseo Orquideas",
        numero: 2,
    },
};

let nombreUsuario = usuario4.nombre;
let edadDelUsuario = usuario4.edad;

// Sintaxis
// let {prop1, prop2} = objeto

let { nombre, edad } = usuario4;
console.log(nombre);
console.log(edad);

const { nombre1, edad1, direccion: { calle } } = usuario5;
console.log([nombre, edad, calle]);

/* =====================================
=    DESESTRUCTURACION EN PARAMETROS   =
===================================== */

const producto = {
    id: 10,
    nombre: "Arroz",
    precio: 1500,
}

const desestructurar = (item) => {
    const { id, nombre } = item;
    console.log(id, nombre);
}

desestructurar(producto);

const desestructurar1 = (id, nombre) => {
    console.log(id, nombre);
}

desestructurar1(producto);

/* =====================================
=    DESESTRUCTURACION EN ARRAYS       =
===================================== */

const nombres = ["Juan", "Pedro", "Matias"];

const [nombrePosicion1, nombrePosicion2] = nombres;
console.log(nombrePosicion1);
console.log(nombrePosicion2);

const [, , nombrePosicion3] = nombres;
console.log(nombrePosicion3);