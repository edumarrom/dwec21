/* EJERCICIO: u2e1-numeros
Crea un programa en el que crees 5 variables numéricas (entero, decimal,
        científico, octal y hexadecimal).

A las variables les asignarás los siguientes números: 1357, 135.7, 135e7,
        01357 y 0x1357.

Muestra con 5 alerts su valor, escribiendo la siguiente sentencia:
        - alert (“Número entero” + entero);

Comenta el código con los comentarios que estimes necesarios.
*/

function numeros(){
    let decimal = 135.7;
    let entero = decimal.toFixed(0);
    let cientifico = decimal.toExponential(3);          // 135e7
    let octal = Number (entero).toString(8);            // 0o1357
    let hexa = Number (entero).toString(16);            // 0x1357

    let numeros = [entero, decimal, cientifico, octal, hexa];

    numeros.forEach(e => {
        console.log(e);
    });
}
numeros();
