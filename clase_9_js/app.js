// console.dir(document);
// console.dir(document.head);
// console.dir(document.body);

/* =====================================
=               getElementBy...            =
===================================== */

const div = document.getElementById("app");
console.log(div);

const parrafo = document.getElementById("parrafo1");
console.log(parrafo);
console.log(parrafo.innerHTML);

let paises = document.getElementsByClassName("paises");
console.timeLog(paises);

console.log(paises[0].innerHTML);
console.log(paises[1].innerHTML);
console.log(paises[2].innerHTML);

const listItem = document.getElementsByTagName("li");
console.log(listItem);

for (let pais of listItem) {
    console.log(pais.textContent);
}

/* =====================================
=               Section                =
===================================== */

const titulo = document.getElementById("titulo");
console.log(titulo.innerText);

titulo.innerText = "Hola alumnos";

const contenedor = document.getElementById("contenedor");
contenedor.innerHTML = `<h2>Mi parrafo</h2>
        <p id="mi-parrafo">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, sed!</p>`;

const miParrafo = document.getElementById("mi-parrafo");
miParrafo.className = "mi-parrafo";

const parrafo2 = document.getElementById("parrafo2");
const parrafo3 = document.getElementById("parrafo3");

parrafo2.remove();
parrafo3.remove();

console.log(document.getElementById("nombre").value = "Fernando");
console.log(document.getElementById("edad").value = 32);

/* =====================================
=               EJEMPLO                =
===================================== */

const contenedor1 = document.getElementById("contenedor-personas");

const personas = ["Fernando", "Javier", "Ariel", "Macarena"];

for (let persona of personas) {
    const li = document.createElement("li");
    li.innerHTML = persona;
    contenedor1.append(li)
}