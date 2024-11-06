const nombreTarea = document.getElementById("nombreTarea");
const prioridadTarea = document.getElementById("prioridadTarea");
const fechaVencimiento = document.getElementById("fechaVencimiento");
const agregarTarea = document.getElementById("agregarTarea");
const listadoTareas = document.getElementById("listadoTareas");
const tareasPendientes = document.getElementById("tareasPendientes");

/* const tareas = [
    {
        id: 1,
        nombre: "Hacer compras",
        prioridad: "Baja",
        completada: false,
        vencimiento: "2024-09-23"
    },
    {
        id: 2,
        nombre: "Estudiar",
        prioridad: "Baja",
        completada: false,
        vencimiento: "2024-09-23"
    },
    {
        id: 3,
        nombre: "Lavar ropa",
        prioridad: "Baja",
        completada: false,
        vencimiento: "2024-09-23"
    },
]; */

const tareas = JSON.parse(localStorage.getItem("tareas")) || [];

let proximoId = 1;

const renderizarTareas = () => {
    listadoTareas.innerHTML = "";

    tareas.forEach((tarea) => {
        const itemTarea = document.createElement("li");
        itemTarea.classList.add(
            "list-group-item",
            "d-flex",
            "justify-content-between",
            "align-items-center"
        );

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = tarea.completada;
        checkbox.addEventListener("change", () => marcarComoCompletada(checkbox, tarea.id));

        const infoTarea = document.createElement("span");
        infoTarea.innerHTML = `<strong> ${tarea.nombre} </strong>| Prioridad: ${tarea.prioridad} | <strong> Vencimiento: ${tarea.vencimiento} </strong>`;

        const botonEliminar = document.createElement("button");
        botonEliminar.textContent = "Eliminar";
        botonEliminar.classList.add(
            "btn",
            "btn-danger"
        );
        botonEliminar.addEventListener("click", () => eliminarTarea(tarea.id));

        itemTarea.append(checkbox);
        itemTarea.append(infoTarea);
        itemTarea.append(botonEliminar);
        listadoTareas.append(itemTarea);

    });
    mostrarTareasPendientes();
};

const agregarTareas = () => {
    const nombre = nombreTarea.value;
    const prioridad = prioridadTarea.value;
    const vencimiento = fechaVencimiento.value;

    if (nombre && prioridad && vencimiento) {
        tareas.push(
            {
                id: proximoId++,
                nombre: nombre,
                prioridad: prioridad,
                vencimiento: vencimiento,
                completada: false,
            }
        );

        localStorage.setItem("tareas", JSON.stringify(tareas));
        renderizarTareas();
    } else {
        alert("Rellena todos los campos");
    };
};

const eliminarTarea = (id) => {
    const tarea = tareas.findIndex((tarea) => tarea.id === id);
    if (indice !== -1) {
        tareas.splice(indice, 1);
        renderizarTareas();
    };
};

const mostrarTareasPendientes = () => {
    const pendientes = tareas.filter((tarea) => !tarea.completada).length;
    tareasPendientes.textContent = `Tareas pendientes: ${pendientes}`;
};

const marcarComoCompletada = (checkbox, id) => {
    const tarea = tareas.find((tarea) => tarea.id === id);

    if (tarea) {
        tarea.completada = checkbox.checked;
        localStorage.setItem("tareas", JSON.stringify(tareas));
        renderizarTareas();
    }
};

renderizarTareas();
agregarTarea.addEventListener("click", agregarTareas);