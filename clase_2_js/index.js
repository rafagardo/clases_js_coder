/*

if(Condicion){
codigo a ejecutar
} else {
codigo a ejecutar
}

*/

/* =====================================
=               EJEMPLO 1                =
===================================== */


/*
if(true){
    console.log("Estoy dentro del primer bloque de codigo")
}

let edad = 15;

if (edad >= 18) {
    console.log("Eres mayor de edad")
} else {
    console.log("Eres menor de edad")
}
*/

/* =====================================
=               EJEMPLO 2                =
===================================== */


/*
const Edad = parseInt(prompt('Por favor, ingresa tu edad'));

if (typeof Edad === "number") {
    console.log("Tu edad es " + Edad);
} else {
    console.log("Por favor ingresa un dato valido");
}

*/

/* =====================================
=               EJEMPLO 3                =
===================================== */

/*

const Edad = prompt('Por favor, ingresa tu edad');

if (typeof Edad === "object") {
    console.log("Debes de ingresar al menos un dato");
    console.log(typeof Edad);
} else if (isNaN(parseInt(Edad))) {
    console.log("Por favor ingresa un dato valido");
    console.log(typeof Edad);
} else {
    console.log("Tu edad es " +  parseInt(Edad))
    console.log(typeof Edad);
}

*/

// isNaN(123);            // false
// isNaN("123");          // false
// isNaN("123abc");       // true
// isNaN(true);           // false
// isNaN(false);          // false
// isNaN("hello");        // true
// isNaN({});             // true

/* =====================================
=               EJEMPLO 4                =
===================================== */

/*

let nombre = parseInt(prompt('Por favor ingresa tu nombre'));

if (nombre === "" || !isNaN(nombre)) {
    console.log("Por favor ingresa tu nombre");
} else {
    console.log(`Tu nombre es ${nombre}`); // De esta manera se invoca la variable dentro del string
}

*/

/* =====================================
=               EJEMPLO 5                =
===================================== */

/*

let mes = parseInt(prompt("Por favor ingresa el numero de mes en el que te encuentras"));
let estacion;

if (mes === 12 || mes === 1 || mes === 2) {
    estacion = "invierno";
    alert(`Te encuentras en la estacion ${estacion}`);
} else if (mes >= 3 && mes < 6) {
    estacion = "primavera";
    alert(`Te encuentras en la estacion ${estacion}`);
} else if (mes >= 6 && mes < 9) {
    estacion = "verano";
    alert(`Te encuentras en la estacion ${estacion}`);
} else if (mes >= 9 && mes < 12){
    estacion = "otoño";
    alert(`Te encuentras en la estacion ${estacion}`);
} else {
    alert("El numero no esta en el rango, intenta de nuevo");
}

*/
