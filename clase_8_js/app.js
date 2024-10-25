/* =====================================
=               MATH                =
===================================== */

const pi = Math.PI;
console.log(pi);

console.log(Math.max(4, 67, 89, 2, 3, 4, 5, 67));

console.log(Math.min(4, 67, 89, 2, 3, 4, 5, 67));

console.log(Math.max(45, 235, 76, Infinity, 0, -Infinity));

console.log(Math.min(45, 235, 76, Infinity, 0, -Infinity));

console.log(Math.pow(2, 7));

console.log(Math.ceil(pi));

console.log(Math.floor(pi));

const precio = 22.5;
console.log(Math.ceil(precio));

console.log(Math.round(precio));

console.log(Math.sqrt(9));

console.log(Math.sqrt(-9)); // Devuelve un NaN

console.log(Math.random()); // Numeros aleatorios entre un rango de 0 y 1

console.log(Math.round(Math.random() * 10)); // Numeros aleatorios entre un rango de 0 y 10

/* =====================================
=               DATE                =
===================================== */

console.log(new Date());

const fechaActual = new Date();
console.log(fechaActual);

const fechaActualFormateada = fechaActual.toISOString();
console.log(fechaActualFormateada);

const fechaPersonalizada = new Date(2024, 9, 14, 8, 30, 25, 100);
console.log(fechaPersonalizada);

const mes = fechaPersonalizada.getMonth();
console.log(mes);

const dia = fechaPersonalizada.getDay();
console.log(dia);

/*
0 - domingo
1 - lunes
2 - martes
3 - miercoles
4 - jueves
5 - viernes
6 - sabado
*/

const dia1 = ((fechaPersonalizada.getDay() + 6) % 7) + 1;
console.log(dia1);

/*
0 - domingo = 6 --------> 6 % 7 = 6 -------> 6 + 1 = 7
1 - lunes = 7 --------> 7 % 7 = 0 -------> 0 + 1 = 1
2 - martes
3 - miercoles
4 - jueves
5 - viernes
6 - sabado
*/

// 0 - 23
const hora = fechaPersonalizada.getHours();
console.log(hora);

const horaCompleta = fechaActual.toLocaleTimeString();
console.log(horaCompleta);

const navidad = new Date(2024, 11, 24, 23, 59, 0o0);
console.log(navidad);

const fechaHoy = new Date();
console.log(fechaHoy);

const milisegundosPorDia = 24 * 60 * 60 * 1000;

const diasParaNavidad = Math.round((navidad - fechaHoy) / milisegundosPorDia);
console.log(diasParaNavidad);

/* =====================================
=               APLICACION DE TAREAS                =
===================================== */

let tareas = [];

function agregarTarea(tareas) {
    const nombreTarea = prompt("Cual es el nombre de la tarea?");
    const fechaDeVencimiento = new Date(prompt("Cual es la fecha de vencimiento? (YYYY-MM-DD)"));
    tareas.push(
        {
            nombre: nombreTarea,
            vencimiento: fechaDeVencimiento
        }
    );
    alert(`Tarea (${nombreTarea}) agregada con exito`);
};

function mostrarTareas(tareas) {
    const hoy = new Date();
    let mensaje = "Lista de tareas: \n";
    tareas.forEach((tarea) => {
        const diasRestantes = Math.ceil((tarea.vencimiento - hoy) / (24 * 60 * 60 * 1000));
        mensaje += `${tarea.nombre} - Vence en ${diasRestantes} dias \n`;
    });
    alert(mensaje);
}

function gestorDeTareas() {
    let tareas = [];
    let opcion;

    do {
        opcion = prompt("Que quieres hacer? \n 1. Agregar tarea \n 2. Mostrar tareas \n 3. Salir");
        if (opcion === "1") {
            agregarTarea(tareas);
        } else if (opcion === "2") {
            mostrarTareas(tareas);
        }
    } while (opcion !== "3");
    alert("Saliendo de la aplicacion");
}

gestorDeTareas();

