
function mostrarProductos() {
    let catalogo = "Catálogo de productos: \n";
    catalogo += "1. Carne - $500 \n";
    catalogo += "2. Carbon - $300 \n";
    catalogo += "3. Lechuga - $10 \n";
    catalogo += "4. Tomate - $20 \n";
    return catalogo;
}

function comprarProducto() {
    let total = 0;
    let seguirComprando = true;
    while (seguirComprando) {
        let catalogo = mostrarProductos();
        let eleccion = prompt(
            catalogo +
            "¿Que producto deseas comprar? Ingrese el numero o escribar 'salir' para finalizar: "
        );
        if (eleccion === null || eleccion === "") {
            alert("No has seleccionado ningun dato valido");
            continue;
        }
        if (eleccion === "salir") {
            break;
        }
        eleccion = parseInt(eleccion)
        if (isNaN(eleccion) || eleccion < 1 || eleccion > 4) {
            alert("Producto no valido, selecciona nuevamente.");
            continue;
        }
        if (eleccion === 1) {
            total += 500;
            alert("Has agregado Carne ");
        } else if (eleccion === 2) {
            total += 300;
            alert("Has agregado Carbon ");
        } else if (eleccion === 3) {
            total += 10;
            alert("Has agregado Lechuga ");
        } else if (eleccion === 4) {
            total += 20;
            alert("Has agregado Tomate ");
        };

        // primera opcion

        seguirComprando = prompt("Quieres seguir comprando? (si/no)") === "si";

        // segunda opcion

        // let respuesta = prompt("Quieres seguir comprando? (si/no)");
        // if (respuesta === "si") {
        //     seguirComprando = true;
        // } else {
        //     seguirComprando = false;
        // };
    }
    alert(`Muchas gracias por su compra. El total es ${total}`)
}

comprarProducto();
