const btnComprar = document.getElementById("btnComprar");

/* =====================================
=               PRIMERA OPCION                =
===================================== */


const mostrarMensaje = () => {
    alert("Hiciste Click");
}

// btnComprar.addEventListener('click', mostrarMensaje);

/* =====================================
=               SEGUNDA OPCION                =
===================================== */

btnComprar.onclick = () => {
    alert("Hiciste Click");
};

/* =====================================
=               EVENTOS DEL MOUSE                =
===================================== */

const mensaje = () => {
    console.log("Boton del mouse presionado");
};

btnComprar.addEventListener("mousedown", mensaje);
btnComprar.addEventListener("mouseup", () => {
    console.log("Boton del mouse soltado");
});

const areaMouseOverOut = document.getElementById("areaMouseOverOut");

areaMouseOverOut.addEventListener("mouseover", () => {
    console.log("El opuntero esta dentro del area");
});
areaMouseOverOut.addEventListener("mouseout", () => {
    console.log("El opuntero esta por fuera del area");
});

const areaMouseMove = document.getElementById("areaMouseMove");

areaMouseMove.addEventListener("mousemove", (event) => {
    console.log(`Se encuentra en las coordenadas ${event.clientX}, ${event.clientY}`);
});

/* =====================================
=               EVENTOS DEL TECLADO                =
===================================== */

const inputTeclado = document.getElementById("inputTeclado");

inputTeclado.addEventListener("keydown", (event) => {
    console.log(`tecla presionada ${event.key}`);
});

inputTeclado.addEventListener("keyup", (event) => {
    console.log(`tecla soltada ${event.key}`);
});

/* =====================================
=               EVENTO CHANGE                =
===================================== */

const select = document.getElementById("selectorColor");

select.addEventListener("change", (event) => {
    console.log(`Color seleccionado: ${event.target.value}`);
});

const formulario = document.getElementById("miFormulario");

const mensaje1 = document.getElementById("mensaje1");

formulario.addEventListener("submit", function (event) {
    event.preventDefault();
    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;

    mensaje.textContent = `Formulario enviado! Nombre: ${nombre}, Email: ${email}`;
});