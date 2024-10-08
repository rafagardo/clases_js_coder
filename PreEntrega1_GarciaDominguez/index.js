/* =====================================
=               Programa para calcula tu huella de carbono                =
===================================== */

// Factor de emision del coche: 2.3 kg CO2 por L de gasolina
// Consumo del coche: Supondremos que el coche rinde 8 L/100 km
// Factor de emision en el hogar: 0.5 kg CO2 por kWh

/* =====================================
=               FUNCIONES                =
===================================== */


const transporte = (distanciaRecorrida) => {
    const emisiones_trans = (distanciaRecorrida/100) * 8 * 2.3;
    return emisiones_trans;
}

const consumo_hogar = (consumo) => {
    const emisiones_hogar = consumo * 0.5;
    return emisiones_hogar
} 

const residuos = (cantidad_por_dia) => 30 * cantidad_por_dia;

function sumaDeHuella (transporte, consumo_hogar, residuos) {
    let sumaTotal = transporte + consumo_hogar + residuos;
    return sumaTotal; 
}

function obtenerNumero(mensaje) {
    let numero;
    do {
        numero = prompt(mensaje);
    } while (isNaN(numero) || numero === "" || numero === null);
    return parseFloat(numero);
}

/* =====================================
=               OBTENCION Y CALCULOS DEL PROGRAMA                =
===================================== */


alert("Para calcular tu huella de carbono mensual, sigue los siguientes pasos:");
alert("Ingresa tu informacion sobre los siguientes datos: TRANSPORTE, CONSUMO DE ENERGIA EN EL HOGAR Y RESIDUOS");

let dist = obtenerNumero("Ingresa la distancia recorrida (en km) este mes: ");
let emiHog = obtenerNumero("Ingresa el consumo eléctrico de tu hogar (en kWh) este mes: ");
let waste = obtenerNumero("Ingresa la cantidad de residuos de basura generados (en kg) este mes: ");

let emisionesTransporte = transporte(dist);
let emisionesHogar = consumo_hogar(emiHog);
let emisionesResiduos = residuos(waste);
let huellaTotal = sumaDeHuella(emisionesTransporte, emisionesHogar, emisionesResiduos);

console.log("Emisiones de transporte: " + emisionesTransporte.toFixed(2) + " kg CO2");
console.log("Emisiones del hogar: " + emisionesHogar.toFixed(2) + " kg CO2");
console.log("Emisiones por residuos: " + emisionesResiduos.toFixed(2) + " kg CO2");
console.log("Tu huella de carbono total de este mes es: " + huellaTotal.toFixed(2) + " kg CO2");