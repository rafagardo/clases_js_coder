// es es un comentario de una linea

/* comentario linea multplie */

/* =====================================
=               VARIABLES                =
===================================== */

var nombre = "Rafael"; //mala practica
let nombre = "Agustin"; // es mejor let
const nombre2 = "Julian";

let miNombre = "Oscar"; //el estandar es usar cammel case
let mi_nombre = "Vanesa"; //tambien con guion bajo 


/* =====================================
=               PALABRAS RESERVADAS                =
===================================== */

/*

brake
case
catch
continue
default
let
delete
do
else
finally
for
function
if
in
instanceof
new
return
switch
this
throw
try
typeof
var
void
while
with
const
etc...................

*/

/* =====================================
=               TIPOS DE DATOS                =
===================================== */

/*

Primitivos___
1. string: let miString = "fhasdjfa";
2. number: let myNumber = 32/32.5;
3. boolean: let myBoolean = True/False;
4. null: let myNull = null;
5. undefined: let miNombre;
6. NaN: let suma = "Fernando" + 4;

typeof me permite ver el tipo de dato

Compuestos___

1. objetos: let myObject = {...};
2. arreglos: let myArray = [];
3. funciones: let myFunction = () => {};
4. bigint: let bigNumber = 44471234248712488324187n;

*/

/* =====================================
=               OPERADORES                =
===================================== */

/* 

Operadores aritmeticos___
suma +
resta -
multiplicacion *
division /
modulo %
incremento ++
decremento --

Aritmeticos asignacion___
adicion += (es igual que el incremento)


Operadores logicos___
AND o &&
OR o ||
NOT !

Operadores relacionales___
igual a ==
diferente !=
igualdad estricta ===
desigualdad estricta !==
mayor que >
menor que <
mayor o igual que >=
menor o igual que <=

*/

let numeroA = 10;
let numeroB = 20;
let resultado = numeroA + numeroB;
console.log(resultado)

let palabra1 = "Fernando ";
let palabra2 = 'Moyano';
let nombreCompleto = palabra1 + palabra2;
console.log(nombreCompleto) 


/* =====================================
=               LET Y CONST                =
===================================== */

// "let" conserva su valor dentro de un bloque y permite reasignar el valor dentro de un bloque, ejemplo en el ambito de una funcion.
// "const" debe inicializarse desde un inicio y NO permite la reasignacion de valores.

/* =====================================
=               FUNCIONES INTEGRADAS                =
===================================== */


//Prompt___

let nombre = prompt('Ingresa tu nombre');
let nombre = prompt('Por favor ingresa tu nombre');

//prompt devuleve la informacion en formato de string

let numeroC = parseInt(prompt("Ingresa tu primer numero"));
let numeroD = parseInt(prompt("Ingresa tu segundo numero"));

let resultados = numeroC + numeroD;

alert(resultados);
console.log(typeof resultados);

//con el parseInt fuerza a la consola a que se castee un tipo de dato numero

