const boton = document.getElementById('cargar');
const xhr = new XMLHttpRequest();

function respuesta() {
  if (xhr.readyState === 4 && xhr.status === 200) {
    const destino = document.getElementById('resultado');
    const datos = JSON.parse(xhr.responseText);
    const keys = Object.keys(datos.data[0]);
    const values = Object.values(datos.data[0]);
    console.log(keys);
    console.log(values);
    /* destino.innerHTML = respuesta; */

    /* cargarDatos(); */
  }
}

function peticion() {
  xhr.open('GET', 'https://reqres.in/api/users?page=2', true);
  xhr.onreadystatechange = respuesta;
  xhr.send();
}

boton.addEventListener('click', peticion);

function cargarDatos() {
  /* Entiendo que voy a necesitar una función para que crear la tabla, y dentro
  de ésta habrá una función para crear las cabeceras y luego otra para cargar las
  filas. */

  let aux = JSON.parse(xhr.responseText);
  const datos = aux.data;

  function crearTabla() {
    const tabla = document.createElement('table');

    function crearCabeceras() {
      const cabeceraTabla = document.createElement('thead');
      const cabeceras = Object.keys(datos);

      for (const cabecera of cabeceras) {
        let celdaCabecera = document.createElement('th');
        celdaCabecera.textContent = cabecera;
        filaCabecera.appendChild(celdaCabecera);
      }

      cabeceraTabla.appendChild(filaCabecera);
    }

    function crearCuerpo() {
      const tBody = document.createElement('tbody');

      function crearFila() {}
    }
  }
}

// Por cada disco en el catálogo, añadimos una fila a la tabla.
discos.forEach((disco) => {

  // Obtiene todas las etiquetas <ARTIST> y <TITLE> dentro de <CD>.
  const artista = disco.getElementsByTagName('ARTIST');
  const titulo = disco.getElementsByTagName('TITLE');

  // Inserta la fila en el cuerpo.
  cuerpoTabla.appendChild(getFila(artista, titulo));
});

// Inserta la cabecera y el cuerpo en la tabla.
tabla.appendChild(cabeceraTabla);
tabla.appendChild(cuerpoTabla);

// Inserta la tabla en el div #tabla existente en el DOM.
document.querySelector('#tabla').innerHTML = '';  // Limpio el <div>.HTMLElement
document.querySelector('#tabla').appendChild(tabla);

/******************************************************************
 * Genera una fila de tabla con el artista y el título del álbum.
 *
 * @param   String  artista El artista del álbum.
 * @param   String  titulo  El artista del álbum.
 *
 * @return  HTMLTrElement   La fila resultante.
 ******************************************************************/
function getFila(artista, titulo) {

  // Genera la fila.
  let filaCuerpo = document.createElement('tr');

  // Genera las celdas artista y título.
  let celdaArtista = document.createElement('td');
  let celdaTitulo = document.createElement('td');

  // Las rellena con los parámetros artista y titulo
  celdaArtista.textContent = artista[0].textContent;
  celdaTitulo.textContent = titulo[0].textContent;

  // Las insertamos dentro de la fila
  filaCuerpo.appendChild(celdaArtista);
  filaCuerpo.appendChild(celdaTitulo);

  // Devuelve la fila
  return filaCuerpo;
}

/* Bucle básico para recorrer fichero XML y rellenar una tabla existente
en el DOM. En nuestro caso hemos creado desde JS un elemento <table> que
posteriormente hemos colgado en el <body> de nuestra página.

for (let i = 0; i < discos.length; i++) {
    tabla += '<tr><td>';
    tabla += discos[i].getElementsByTagName('ARTIST')[0].textContent;
    tabla += '</td><td>';
    tabla += discos[i].getElementsByTagName('TITLE')[0].textContent;
    tabla += '</td></tr>';
}

document.getElementById('catalogo').innerHTML = tabla; */
