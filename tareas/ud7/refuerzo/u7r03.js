document.querySelector('#generar-tabla').addEventListener('click', mostrar);

function mostrar() {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = resolver;

  function resolver() {
    if (this.readyState == 4 && this.status == 200) {
      let articulo = JSON.parse(this.responseText);
      const articulos = [articulo];
      console.log(articulos);
      const tabla = generarTabla(articulos);

      // Insertamos el resultado
      const resultado = document.querySelector('#resultado')
      resultado.innerHTML = '';
      resultado.appendChild(tabla);
    }
  }

  function generarTabla(datos) {
    const tabla = document.createElement('table');

    // Generamos cabecera
    const cabeceras = Object.keys(datos[0]);
    const cabeceraTabla = document.createElement('thead');
    const filaCabecera = document.createElement('tr');
    cabeceras.forEach(cabecera => {
      const celdaCabecera = document.createElement('th');
      celdaCabecera.textContent = cabecera;
      filaCabecera.appendChild(celdaCabecera);
    });
    cabeceraTabla.appendChild(filaCabecera);
    tabla.appendChild(cabeceraTabla);

    // Generamos cuerpo
    const cuerpoTabla = document.createElement('tbody');
    datos.forEach(dato => {
      const campos = Object.values(dato);
      const filaCuerpo = document.createElement('tr');
      campos.forEach(campo => {
        const celdaCuerpo = document.createElement('td');
        // TODO: Si el campo es la url de una imagen(.jpg, .png), genererar un <img>.
        celdaCuerpo.textContent = campo;
        filaCuerpo.appendChild(celdaCuerpo);
      });
      cuerpoTabla.appendChild(filaCuerpo);
    });
    tabla.appendChild(cuerpoTabla);

    return tabla;
  }

  xhr.open('GET', 'ficheros/respuestaJsonGet.php', true); // 'objeto.php'
  xhr.send();
}
