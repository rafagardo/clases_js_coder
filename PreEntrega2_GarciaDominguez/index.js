/* =====================================
=           PRE ENTREGA PARTE 2        =
===================================== */


/* =====================================
= Programa para calcular tu huella de carbono = 
===================================== */

/* =====================================
=               FUNCIONES              =
===================================== */


const transporte = (distanciaRecorrida, tipoTransporte) => {
    const factoresEmision = {
        "coche": 2.3, // kg CO2 por L
        "tren": 0.05, // kg CO2 por km
        "avion": 0.25, // kg CO2 por km
        "bicicleta": 0 // No emite CO2
    };
    let emisiones_trans = distanciaRecorrida * factoresEmision[tipoTransporte];
    return emisiones_trans;
}

const consumo_hogar = (consumo) => {
    const emisiones_hogar = consumo * 0.5;
    return emisiones_hogar;
}

const residuos = (cantidad_por_dia) => 30 * cantidad_por_dia;

function sumaDeHuella(transporte, consumo_hogar, residuos) {
    let sumaTotal = transporte + consumo_hogar + residuos;
    return sumaTotal;
}

function compensacion(huellaTotal) {
    const arbolesRequeridos = huellaTotal / 21;
    return arbolesRequeridos;
}

function obtenerDato(mensaje) {
    let numero;
    do {
        numero = prompt(mensaje);
    } while (isNaN(numero) || numero === "" || numero === null);
    return parseFloat(numero);
}

/* =====================================
=       CLASE PARA NUEVO USUARIO       =
===================================== */

class Usuario {
    constructor() {
        this.nombre = prompt("Ingresa tu nombre: ");
        this.transporte = {
            tipo: prompt("¿Qué tipo de transporte utilizas? (coche, tren, avion, bicicleta): ").toLowerCase(),
            distancia: obtenerDato("Ingresa la distancia recorrida (en km) este mes: ")
        };
        this.consumoHogar = obtenerDato("Ingresa el consumo eléctrico de tu hogar (en kWh) este mes: ");
        this.residuos = obtenerDato("Ingresa la cantidad de residuos de basura generados (en kg) este mes: ");
    }

    calcularHuella() {
        let emisionesTransporte = transporte(this.transporte.distancia, this.transporte.tipo); // Para obtener los objetos de this.transporte
        let emisionesHogar = consumo_hogar(this.consumoHogar);
        let emisionesResiduos = residuos(this.residuos);
        return sumaDeHuella(emisionesTransporte, emisionesHogar, emisionesResiduos);
    }

    mostrarResultados() {
        console.log("Huella de carbono de " + this.nombre);
        console.log("Emisiones de transporte: " + transporte(this.transporte.distancia, this.transporte.tipo).toFixed(2) + " kg CO2");
        console.log("Emisiones del hogar: " + consumo_hogar(this.consumoHogar).toFixed(2) + " kg CO2");
        console.log("Emisiones por residuos: " + residuos(this.residuos).toFixed(2) + " kg CO2");
        let huellaTotal = this.calcularHuella();
        console.log("Tu huella de carbono total de este mes es: " + huellaTotal.toFixed(2) + " kg CO2");
        let arbolesAPlantar = compensacion(huellaTotal);
        console.log("Para compensar tu huella, deberías plantar " + arbolesAPlantar.toFixed(2) + " árboles.");
    }
}

/* =====================================
=   OBTENCION Y CALCULOS DEL PROGRAMA  =
===================================== */

alert("Para calcular tu huella de carbono mensual, sigue los siguientes pasos:");
alert("Ingresa tu información sobre los siguientes datos: TRANSPORTE, CONSUMO DE ENERGÍA EN EL HOGAR Y RESIDUOS");

let usuario1 = new Usuario();
usuario1.mostrarResultados();

/* =====================================
=  ARRAY Y METODOS SOBRE EL ARRAY      =
===================================== */

console.log("\n*** Cálculo de emisiones de transporte: coche, tren, avión ***\n");

let transportes = [
    { tipo: "coche", distancia: 200 },
    { tipo: "tren", distancia: 100 },
    { tipo: "avion", distancia: 50 }
];

console.log("Lista de transportes y distancias:");
transportes.forEach(t => {
    console.log(`Tipo de transporte: ${t.tipo}, Distancia: ${t.distancia} km`);
});

console.log("\n*** Cálculo de emisiones totales de transporte ***\n");

let totalEmisionesTransporte = transportes.reduce((acum, item) => {
    let emisiones = transporte(item.distancia, item.tipo);
    console.log(`Transporte: ${item.tipo}, Distancia: ${item.distancia} km, Emisiones: ${emisiones.toFixed(2)} kg CO2`);
    console.log(`Acumulador antes de sumar: ${acum.toFixed(2)} kg CO2`);
    acum += emisiones;
    console.log(`Acumulador después de sumar: ${acum.toFixed(2)} kg CO2`);
    console.log('(*************************************)');
    return acum;
}, 0);

console.log("Emisiones totales de transporte (por coche, tren y avión): " + totalEmisionesTransporte.toFixed(2) + " kg CO2");

let transporteCoche = transportes.filter(t => t.tipo === "coche");
let emisionesCoche = transporteCoche.reduce((acum, transp) => acum + transporte(transp.distancia, transp.tipo), 0);
console.log("Emisiones solo de coche: " + emisionesCoche.toFixed(2) + " kg CO2");

let maxTransporte = transportes.reduce((max, current) => (current.distancia > max.distancia ? current : max));
console.log("El transporte con mayor distancia fue: " + maxTransporte.tipo + " con " + maxTransporte.distancia + " km");


/* ========= End of PRE ENTREGA PARTE 2 ========= */