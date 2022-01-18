<?php
// Evitamos los warnings
error_reporting(0);

/* Prefiero usar un array en lugar de un objeto.
$objeto = new stdClass;
$objeto->nombre = "Edu";
$objeto->nacimiento = 1993;
$objeto->pais = "Espanya"; */

$arr = [
    'nombre' => 'Eduardo',
    'nacimiento' => 1993,
    'pais' => 'Espanya', // movidas con la ñ.
];

// Codificamos el array
$miJSON = json_encode($arr);

// Mostramos el array
echo $miJSON;

// No hace falta etiqueta de PHP.
