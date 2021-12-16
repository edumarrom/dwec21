# Movidas de ESM (ECMA Script Modules)
## DWEC - 2ºDAW 21/22
### Eduardo Martínez Romero - IES Doñana

#### Crea una web que utilice ES Modules para cargar las funciones y constantes de un módulo llamado geometria.js.

El módulo gometria.js debe permitir exportar:

- Una constante que sea el doble de PI
- Una función que calcule el área de un círculo pasándole el radio como parámetro
- Una función que calcule el perímetro de un círculo pasándole el radio como parámetro (debe usar la constante creada para calcular el perímetro)

#### Se deberá cargar el módulo desde un archivo main.js que se cargará en el head de nuestro index.html

#### Haz pruebas realizando las siguientes tareas (deja el código comentado) introduciendo código en el archivo main.js:

- Muestra por consola la constante, el área de un circulo de radio 2 y  el perímetro de un círculo de radio 2.
    - Prueba 1: Carga todos los elementos del módulo
    - Prueba 2: Carga todos los elementos del módulo y ponle un alias al conjunto
    - Prueba 3: Carga todos los elementos del módulo y ponle un alias a cada uno de ellos
    - Prueba 4: Carga todo excepto la constante. Observa que sucede
