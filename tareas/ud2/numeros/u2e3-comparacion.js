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
let operaciones = [
    '10 == 10',
    '10 === 10',
    '10 === 10.0',
    '“Laura” == “laura”',
    '“Laura” > “laura”',
    '“Laura” < “laura”',
    '“123” == 123',
    '“123” === 123',
    'parseInt(“123”) === 123'
]

function mostrarOperacion(operacion) {
    alert ('La operación ' + operaciones[0]+ ' es ' + operacion);
}

operaciones.forEach(e => {
    mostrarOperacion(e);
});
