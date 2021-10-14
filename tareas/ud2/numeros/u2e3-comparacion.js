/*
EJERCICIO: u2e3_comparacion

Crea un programa en el que muestres el resultado de varias operaciones
        mediante alert, mostrando el texto exacto de la operación
        realizada y su resultado.

Ej:
    var operacion1 = (10 == 10);
    alert (“La operación 10==10 es”+operacion1

Las operaciones a realizar son:

    10 == 10
    10 === 10
    10 === 10.0
    “Laura” == “laura”
    “Laura” > “laura”
    “Laura” < “laura”
    “123” == 123
    “123” === 123
    parseInt(“123”) === 123

Comenta el código con los comentarios que estimes necesarios.
*/

/* TODO: Cambiar comillas dobles por simples. */
let operacion1 = 10 == 10;
// Los enteros primitivos del mismo valor son siempreel mismo entero.
let operacion2 = 10 === 10;
let operacion3 = 10 === 10.0;         // La parte decimal es truncada.
let operacion4 = 'Laura' == 'laura';  // 'L' != 'l'
let operacion5 = 'Laura' > 'laura';   // Minúsculas primero
let operacion6 = 'Laura' < 'laura';   // 'a' > 'A'
let operacion7 = '123' == 123;        // Comparación permisiva
let operacion8 = '123' === 123;       // Comparación estricta
let operacion9 = parseInt('123') === 123; // Si lo ejecuto en consola es true

let operaciones = [
    operacion1, operacion2,
    operacion3, operacion4,
    operacion5, operacion6,
    operacion7, operacion8
]

let enunciados = [
    '10 == 10', '10 === 10',
    '10 === 10.0', "'Laura' == 'laura'",
    "'Laura' > 'laura'", "'Laura' < 'laura'",
    "'123' == 123", "'123' === 123",
    "parseInt('123') === 123"
]

function mostrarOperacion(enunciado, operacion) {
    alert (`La operacion ${enunciado} es ${operacion}`);
}

for (let i = 0; i < enunciados.length; i++) {
    mostrarOperacion(enunciados[i], operaciones[i]);
}
