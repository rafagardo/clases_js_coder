/* =====================================
=               Sweetalert2                =
===================================== */

// sweetalert2
// https://sweetalert2.github.io/

const btnComprar = document.getElementById("btn-comprar");

function alertaBasica(){
    Swal.fire({
        // icon: 'success',
        // title: 'Compra realizada con éxito',
        // text: 'Gracias por su compra',
        title: 'Quieres agregar el producto al carrito?',
        showCancelButton: true,
        confirmButtonText: `Si`,
        cancelButtonText: `No`,
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                icon: 'success',
                title: 'Producto agregado al carrito',
                text: 'Gracias por su compra',
            })
        } else if (result.isDismissed) {
            Swal.fire({
                icon: 'error',
                title: 'Compra cancelada',
                text: 'Gracias por su visita',
            })
        }
    })
}

const toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer);
        toast.addEventListener('mouseleave', Swal.resumeTimer);
    }
});

toast.fire({
    icon: 'error',
    title: 'Compra realizada con éxito',
    text: 'Gracias por su compra',
});


btnComprar.addEventListener("click", alertaBasica);

/* =====================================
=               Toastify                =
===================================== */

// toastify
// https://apvarun.github.io/toastify-js/

const btnToastify = document.getElementById("btn-comprar-toastify");

btnToastify.addEventListener("click", () => {
    Toastify({
        text: "Compra realizada con éxito",
        duration: 3000,
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: 'right', // `left`, `center` or `right`
        backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)",
        stopOnFocus: true, // Prevents dismissing of toast on hover
    }).showToast();
});

/* =====================================
=               Luxon                =
===================================== */

// luxon
// https://moment.github.io/luxon/#/

const DateTime = luxon.DateTime;

const dt = DateTime.local(2024, 5, 23, 12, 34);
console.log(dt); //=> 2024-05-23T12:34:00.000-04:00
console.log(dt.year); //=> 2024
console.log(dt.month); //=> 5
console.log(dt.day); //=> 23
console.log(dt.weekday); //=> 4
console.log(dt.hour); //=> 12
console.log(dt.minute); //=> 34

const dt2 = DateTime.fromObject({
    year: 2024,
    month: 5,
    day: 23,
    hour: 12,
    minute: 34,
},
{
    zone: 'America/Argentina/Buenos_Aires',
    numberingSystem: 'beng'
});

console.log(dt2); //=> 2024-05-23T12:34:00.000-03:00
console.log(dt2.toString()); //=> 2024-05-23T12:34:00.000-03:00

const dt3 = DateTime.now();
console.log(dt3.toString); //=> 2021-10-14T15:00:00.000-03:00
console.log(dt3.toISO()); //=> 2021-10-14T15:00:00.000-03:00
console.log(dt3.toLocaleString(DateTime.DATE_SHORT)); //=> 10/14/21
console.log(dt3.toLocaleString(DateTime.TIME_SIMPLE)); //=> 3:00 PM
console.log(dt3.toLocaleString(DateTime.DATETIME_FULL)); //=> 10/14/21, 3:00:00 PM GMT-3
console.log(dt3.setlocale("es").toLocaleString(DateTime.DATE_FULL)); //=> jueves 14 de octubre de 2021






