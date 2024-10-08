/*

for(incializador; condicion; actualizacion){
manipulando variable/actualizacion
}

*/
/*
for(let i = 0; i<=10; i++){
    console.log(i);
}
*/

/* =====================================
=               CICLO FOR                =
===================================== */

/*
let numeroIngresado = parseInt(prompt("Por favor ingresa un numero"));

if(!isNaN(numeroIngresado)){
    for(let i = 0; i<=10; i++){
        let resultado = numeroIngresado*i;
        console.log(`El numero ${numeroIngresado} X ${i} es igual a ${resultado}`);
    }
} else {
    console.log("Por favor ingrese un numero")
}
*/

/* =====================================
=               SENTENCIA BREAK                =
===================================== */

/*
for(let i = 0; i <= 10; i++){
    if(i===5) {
        console.log("No puedes continuar")
        break
    }
    alert(i);
}
*/

/* =====================================
=               SENTENCIA CONTINUE                =
===================================== */

/*
for(let i = 0; i <=10; i++) {
    if(i == 5) {
        alert("Ya vas por la mitad");
        continue;
    }
    alert(i);
}
*/

/* =====================================
=               EJEMPLO MAS COMPLEJO                =
===================================== */

/*
let numeroSecreto = 8;
let intentos = 1;

for (let i = 0; i <= 3; i++) {
    let tuNumero = prompt("Por favor ingresa un numero para adivinar el numero secreto");
    if (numeroSecreto == tuNumero) {
        alert(`Adivinaste, el numero secreto era ${numeroSecreto}`);
        break;
    } else if (intentos == 3) {
        alert(`Te has quedado sin intentos, el numero secreto era ${numeroSecreto}`);
    } else {
        alert(`No has adivinado, te quedan ${intentos} intentos. El numero que elegiste fue: ${tuNumero}`);
    }
    intentos++;
}
*/

/* =====================================
=               SENTENCIA WHILE                =
===================================== */

/*
while(condicion){
    bloque de codigo a ejecutar
}
*/

/*
let repetir = true;

while (repetir) {
    console.log("Al infinito y mas alla");
}
*/

/*
let numeroIngresado = parseInt(prompt("Por favor ingresa un numero"));

if (!isNaN(numeroIngresado)) {
    let i = 1;
    while (i <= 10) {
        let resultado = numeroIngresado * i;
        alert(`el numero ingresado ${numeroIngresado} X ${i} es igual a ${resultado}`);
        i++;
    }
} else {
    console.log("Ingresa un numero valido");
}
*/

/* =====================================
=               SENTENCIA DO...WHILE...                =
===================================== */

/*
let repetir = false;

do {
    console.log("Solo una vez")
} while (repetir);
*/

/*
let nombreArticulo;
let contador = 0;

do {
    nombreArticulo = prompt("Ingresa el nombre de un Articulo (o escribe la palabra 'salir' para terminar):");
    if (nombreArticulo != 'salir') {
        contador++;
        console.log(`Articulo ${contador}: ${nombreArticulo}`);
    }
} while (nombreArticulo !== 'salir') {
    console.log(`Has ingresado un total de ${contador} articulos`);
}
*/

/* =====================================
=               SENTENCIA SWITCH                =
===================================== */

/*
switch (expresion) {
    case valor1:
        codigo a ejecutar;
        break;

    case valor2:
        codigo a ejecutar;
        break;

    case valor3:
        codigo a ejecutar;
        break;

    default:
        break;
}
*/

/*
let mascotaFavorita = prompt("Cual es tu mascota favorita?")

switch (mascotaFavorita) {
    case "gato":
        console.log("Los gatos son gays");
        break;
    
    case "perro":
        console.log("Los perros son gays");
        break;
    
    case "pajaro":
        console.log("Los pajaros son gays");
        break;
    
    default:
        console.log("Parece que tienes otro tipo de mascota");

}
*/