const productos = [
    {
        id: 1,
        nombre: "Leche",
        imagen: "https://www.solumex.com/wp-content/uploads/2023/11/dummy-image-square.jpg",
        precio: 1500,
        stock: 14,
    },
    {
        id: 2,
        nombre: "Arroz",
        imagen: "https://www.solumex.com/wp-content/uploads/2023/11/dummy-image-square.jpg",
        precio: 1000,
        stock: 12,
    },
    {
        id: 3,
        nombre: "Cafe",
        imagen: "https://www.solumex.com/wp-content/uploads/2023/11/dummy-image-square.jpg",
        precio: 2500,
        stock: 32,
    },
];

const agregarProductos = ({ nombre, precio, imagen, stock }) => {
    productos.push({ id: 4, nombre, precio, imagen, stock })
}

const mostrarProductos = () => {
    let mensajeInformativo = "";
    for (let producto of productos) {
        mensajeInformativo += `
        ID: ${producto.id}
        Nombre: ${producto.nombre}
        Precio: ${producto.precio}
        Stock: ${producto.stock}\n
        `;
    }
    console.log(mensajeInformativo)
}

const solicitarDatosProductos = () => {
    let nombreProducto = prompt("Ingresa el nombre del producto");
    let imagen = prompt("Por favor ingresa la URL de la imagen");
    let precioProducto = parseFloat(prompt("A continuacion, ingresa el precio"));
    let stockProducto = parseInt(prompt("Ingresa la cantidad de unidades disponibles"));
    if (nombreProducto && !isNaN(precioProducto) && imagen && !isNaN(stock)) {
        return { nombre: nombreProducto, precio: precioProducto, imagen, stock };
    } else {
        alert("Por favor ingresa datos validos");
    }
}

const eliminarProducto = (nombre) => {
    const indice = productos.findIndex((producto) => producto.nombre.toLowerCase() === nombre.toLowerCase());
    if (indice !== -1) {
        productos.splice(indice, 1);
        console.log(`Producto ${nombre} eliminado con exito`);
        mostrarProductos();
    } else {
        alert(`Producto ${nombre} no encontrado`);
    };
};


const encontrarProdcutosBaratos = (precioMaximo) => {
    const productosBaratos = productos.filter((producto) => producto.precio < precioMaximo);
    if (productosBaratos.length > 0) {
        console.log("Productos mas baratos que " + precioMaximo + ":");
        productosBaratos.map((producto) => {
            console.log(producto.nombre)
        })
        // console.log(productosBaratos);
        // mostrarProductos(productosBaratos);
    } else {
        console.log("No hay productos mas baratos que :" + precioMaximo);
    }
};

const main = () => {
    let opcion = "";
    while (opcion !== "5") {
        opcion = prompt("Selecciona una opcion: \n1. Agregar Productos \n2. Ver Productos \n3. Eliminar Productos \n4. Productos Baratos \n5. Salir");
        switch (opcion) {
            case "1":
                const nuevoProducto = solicitarDatosProductos();
                if (nuevoProducto) {
                    agregarProductos(nuevoProducto);
                };
                break;
            case "2":
                mostrarProductos();
                break;
            case "3":
                const productoEliminar = prompt("Ingresa el nombre del producto a eliminar");
                eliminarProducto(productoEliminar);
                break;
            case "4":
                const precioMaximo = parseFloat(prompt("Ingresa el precio maximo para encontrar productos baratos"));
                encontrarProdcutosBaratos(precioMaximo);
                break;
            case "5":
                console.log("Saliendo...");
                break;
            default:
                alert("Opcion no valida. Por favor selecciona de nuevo.");
                break;
        }
    }
}

main();