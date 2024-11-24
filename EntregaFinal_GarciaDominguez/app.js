/* =====================================
=           PRE ENTREGA PARTE 3        =
===================================== */

/* =====================================
= Programa para calcular tu huella de carbono =
===================================== */

/* =====================================
=       CLASE PARA NUEVO USUARIO       =
===================================== */

class Usuario {
    constructor(nombre, transporte, distancia, consumoHogar, residuos) {
        this.nombre = nombre;
        this.transporte = {
            tipo: transporte.toLowerCase(),
            distancia: parseFloat(distancia)
        };
        this.consumoHogar = parseFloat(consumoHogar);
        this.residuos = parseFloat(residuos);
    }

    calcularEmisionesTransporte() {
        const factoresEmision = {
            "coche": 2.3,
            "tren": 0.05,
            "avion": 0.25,
            "bicicleta": 0
        };
        return this.transporte.distancia * factoresEmision[this.transporte.tipo];
    }

    calcularEmisionesHogar() {
        return this.consumoHogar * 0.5;
    }

    calcularEmisionesResiduos() {
        return this.residuos * 30;
    }

    calcularHuella() {
        const emisionesTransporte = this.calcularEmisionesTransporte();
        const emisionesHogar = this.calcularEmisionesHogar();
        const emisionesResiduos = this.calcularEmisionesResiduos();
        return emisionesTransporte + emisionesHogar + emisionesResiduos;
    }

    calcularCompensacion() {
        const huellaTotal = this.calcularHuella();
        return huellaTotal / 21; // 1 árbol captura 21 kg CO2 por año
    }

    mostrarResultados(index) {
        const huellaTotal = this.calcularHuella().toFixed(2);
        const arbolesAPlantar = this.calcularCompensacion().toFixed(2);

        return `
            <li class="list-group-item d-flex justify-content-between align-items-center">
                <div>
                    <strong>${this.nombre}</strong><br>
                    Emisiones de transporte: ${this.calcularEmisionesTransporte().toFixed(2)} kg CO2<br>
                    Emisiones del hogar: ${this.calcularEmisionesHogar().toFixed(2)} kg CO2<br>
                    Emisiones por residuos: ${this.calcularEmisionesResiduos().toFixed(2)} kg CO2<br>
                    Huella de carbono total: ${huellaTotal} kg CO2<br>
                    Compensación necesaria: ${arbolesAPlantar} árboles
                </div>
                <button class="btn btn-danger btn-sm" onclick="eliminarUsuario(${index})">Eliminar</button>
            </li>
        `;
    }
}

/* =====================================
=   OBTENCION Y CALCULOS DEL PROGRAMA  =
===================================== */

const nombreTarea = document.getElementById("nombreUsuario");
const transporteTarea = document.getElementById("transporte");
const distanciaTarea = document.getElementById("distancia");
const consumoHogarTarea = document.getElementById("consumoHogar");
const residuosTarea = document.getElementById("residuos");
const agregarUsuarioBtn = document.getElementById("agregarUsuario");
const listadoHuella = document.getElementById("listadoHuella");
const calculoHuella = document.getElementById("calculoHuella");

const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

const renderizarUsuarios = () => {
    listadoHuella.innerHTML = "";
    usuarios.forEach((usuario, index) => {
        const nuevoUsuario = new Usuario(
            usuario.nombre,
            usuario.transporte.tipo,
            usuario.transporte.distancia,
            usuario.consumoHogar,
            usuario.residuos
        );
        listadoHuella.innerHTML += nuevoUsuario.mostrarResultados(index);
    });
    actualizarHuellaTotal();
};

const agregarUsuario = () => {
    const nombre = nombreTarea.value.trim();
    const transporte = transporteTarea.value;
    const distancia = distanciaTarea.value;
    const consumoHogar = consumoHogarTarea.value;
    const residuos = residuosTarea.value;

    if (nombre && transporte && distancia && consumoHogar && residuos) {
        const usuario = new Usuario(nombre, transporte, distancia, consumoHogar, residuos);
        usuarios.push(usuario);
        localStorage.setItem("usuarios", JSON.stringify(usuarios));
        renderizarUsuarios();

        Swal.fire({
            icon: "success",
            title: "Usuario agregado",
            text: `${nombre} se ha agregado exitosamente.`,
        });

        nombreTarea.value = "";
        transporteTarea.value = "Coche";
        distanciaTarea.value = "";
        consumoHogarTarea.value = "";
        residuosTarea.value = "";
    } else {
        Swal.fire({
            icon: "error",
            title: "Campos vacíos",
            text: "Por favor, rellena todos los campos.",
        });
    }
};

const eliminarUsuario = (index) => {
    usuarios.splice(index, 1);
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
    renderizarUsuarios();
    Swal.fire({
        icon: "info",
        title: "Usuario eliminado",
        text: "El usuario ha sido eliminado correctamente.",
    });
};

const actualizarHuellaTotal = () => {
    const huellaTotal = usuarios.reduce((acum, usuario) => {
        const usuarioTemp = new Usuario(
            usuario.nombre,
            usuario.transporte.tipo,
            usuario.transporte.distancia,
            usuario.consumoHogar,
            usuario.residuos
        );
        return acum + usuarioTemp.calcularHuella();
    }, 0);

    calculoHuella.innerHTML = `Huella de carbono total: <strong>${huellaTotal.toFixed(2)} kg CO2</strong>`;
};

const cargarUsuariosDesdeJSON = async () => {
    try {
        const response = await fetch("usuarios.json");
        const data = await response.json();
        data.forEach((usuario) => {
            usuarios.push(usuario);
        });
        localStorage.setItem("usuarios", JSON.stringify(usuarios));
        renderizarUsuarios();
    } catch (error) {
        Swal.fire({
            icon: "error",
            title: "Error al cargar datos",
            text: "No se pudo cargar el archivo JSON.",
        });
    }
};

agregarUsuarioBtn.addEventListener("click", agregarUsuario);

cargarUsuariosDesdeJSON();
renderizarUsuarios();
