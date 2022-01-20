document.getElementById('cargarCatalogo').addEventListener('click', cargarCatalogo);

function cargarCatalogo() {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      cargarXML(this);
    }
  };

  xhr.open('GET', 'catalogo.xml', true);
  xhr.send();
}

function cargarXML(xml) {
  const docXML = xml.responseXML;

  // Consigue la colección de CD's.
  const discos = Array.from(docXML.getElementsByTagName('CD'));

  // Crea los elementos HTML.
  const cabeceras = ['Artista', 'Título'];
  const tabla = document.createElement('table');
  const cabeceraTabla = document.createElement('thead');
  const cuerpoTabla = document.createElement('tbody');
  const filaCabecera = document.createElement('tr');

  // Crea las celdas de cabecera e inserta en la fila de cabecera.
  for (const cabecera of cabeceras) {
    let celdaCabecera = document.createElement('th');
    celdaCabecera.textContent = cabecera;
    filaCabecera.appendChild(celdaCabecera);
  }

  // Inserta la fila de cabecera en la cabecera de la tabla.
  cabeceraTabla.appendChild(filaCabecera);

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
  document.querySelector('#tabla').innerHTML = '';  // Limpio el <div>
  document.querySelector('#tabla').appendChild(tabla);

  /******************************************************************
   * Genera una fila de tabla con el artista y el título del álbum.
   *
   * @param   String  artista El artista del álbum.
   * @param   String  titulo  El título del álbum.
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
