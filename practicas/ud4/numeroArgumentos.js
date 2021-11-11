/* Saber cuantos argumentos paso a una funcion de parámetros variables */

function miFuncion(a, b, ...mas) {
 let parametros = miFuncion.length;
 let argumentos = arguments.length;
 /* let argumentos = mas.length */
 return console.log(argumentos - parametros);
}
