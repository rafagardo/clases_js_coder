/* =====================================
=               localStorage                =
===================================== */

localStorage.setItem("clave1", "Hola Alumnos");
localStorage.setItem("valorBooleano", true);
localStorage.setItem("valorNumerico", 12);

//Obteniendo datos del local storage

const clave1 = localStorage.getItem("clave1");
console.log(clave1);
console.log(typeof clave1);

const clave2 = localStorage.getItem("valorBooleano");
console.log(clave2);
console.log(typeof clave2);

/* =====================================
=               sessionStorage                =
===================================== */

sessionStorage.getItem("clave2", "Hola Mundo");
console.log(sessionStorage.getItem("clave2"));

for (let i = 0; i < localStorage.length; i++) {
    const clave = localStorage.key(i);
    console.log(`Clave: ${clave}
        Valor: ${localStorage.getItem(clave)}`);
};

localStorage.setItem("clave3", "Fernando");
localStorage.removeItem("clave3");

// localStorage.clear();

/* =====================================
=               JSON                =
===================================== */


const producto = {
    id: 3,
    nombre: "Arroz",
    precio: 3452,
};

// localStorage.setItem("producto", producto);

const objetoAJSON = JSON.stringify(producto);
console.log(objetoAJSON);

localStorage.setItem("producto", objetoAJSON);