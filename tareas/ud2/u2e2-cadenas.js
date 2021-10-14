/*
Crea un programa en el que crees 4 variable, 2 cadenas y 2 números,  con
        los siguientes valores: tu nombre, tu apellido, tu edad y tu año de nacimiento.

- Muestra en un alert una frase que incluya comillas simples.
- Muestra en un alert tu nombre y apellidos separados por un salto de línea.
- Muestra en un alert la suma de las variables edad y año de nacimiento.
- Muestra en un alert la suma de todas las variables.

Comenta el código con los comentarios que estimes necesarios.
 */

function cadenas(){
    let nombre = 'Eduardo';
    let ape = 'Martínez';
    let anyoNac = 1993;
    let edad = 27;

    alert('Comillas simples');
    alert(`${nombre}
            ${ape}`);
    alert(anyoNac.valueOf() + edad.valueOf());
    alert(nombre + ape + anyoNac + edad); // Al compaginar numeros y cadenas, el oprrador + es de concatenacion
}
cadenas();
