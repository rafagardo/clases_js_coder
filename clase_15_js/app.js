/* =====================================
=               SetTimeout                =
===================================== */

// setTimeout(() => {
//     console.log('Hola Mundo');
// }, 2000);

console.log("Inicio del proceso");

setTimeout(() => {
    console.log("Mitad del proceso");
}, 3000);

console.log("Fin del proceso");

const btn = document.querySelector('#button');
const popup = document.querySelector('#popup-message');

btn.addEventListener('click', () => {
    popup.classList.add("popup-active");
    setTimeout(() => {
        popup.classList.remove("popup-active");
    }, 3000);
});

for (let letra of "Hola Mundo") {
    setTimeout(() => {
        console.log(letra);
    }, 1000);
}

/* =====================================
=               Call Stack                =
===================================== */

// Es una pila de ejecución de funciones
// LIFO Last In First Out
// Se ejecuta el último elemento que entra

// Ejemplo de Call Stack
function funcion1() {
    console.log("Funcion 1");
    funcion2();
}

function funcion2() {
    console.log("Funcion 2");
    funcion3();
}

function funcion3() {
    console.log("Funcion 3");
}

/* =====================================
=               SetInterval                =
===================================== */

// Es una función que se ejecuta cada cierto tiempo
// setInterval(() => {
//     console.log("Hola Mundo");
// }, 1000);

let contador = 0;
const intervalo = setInterval(() => {
    console.log(contador);
    contador++;
    if (contador === 5) {
        clearInterval(intervalo);
    }
}, 1000);

/* =====================================
=               Promesas                =
===================================== */

// Es un objeto que representa la terminación o el fracaso de una operación asíncrona
// Devuelve un valor
// Se puede encadenar con then y catch
// Se puede encadenar con async y await
// Una promesa puede estar en 3 estados: pendiente, cumplida o rechazada

// Sintaxis de una promesa
// new Promise((resolve, reject) => {
     // Código de la promesa
//});

const eventoFuturo = (respuesta) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            respuesta ? resolve("El evento fue exitoso") : reject("El evento no fue exitoso");
        }, 2000);
    });
};

eventoFuturo(true).then((res) => {
    console.log(res);
}).catch((error) => {
    console.log(error);
});

eventoFuturo(false).then((res) => {
    console.log(res);
}).catch((error) => {
    console.log(error);
}).finally(() => {
    console.log("Proceso terminado");
});

/* =====================================
=               Ejemplo de consumo de datos                =
===================================== */

const db = [
    {
        id: 1,
        nombre: "Producto 1",
        precio: 100,
    },
    {
        id: 2,
        nombre: "Prodsucto 2",
        precio: 200,
    },
    {
        id: 3,
        nombre: "Producto 3",
        precio: 300,
    },
];

let productos = [];

const renderizadoDeProductos = (arr) => {
    const container = document.getElementById("contenedor-productos");
    arr.forEach((producto)=> {
        const item = document.createElement("div");
        item.innerHTML = `
            <strong>${producto.nombre}</strong>
            <p>${producto.precio}</p>
        `;
        container.appendChild(item);
    });
};

const pedirProductos = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(db);
            console.log(db);
        }, 2000);
    });
};

pedirProductos().then((res) => {
    productos = res;
}).catch((error) => {
    console.log(error);
});