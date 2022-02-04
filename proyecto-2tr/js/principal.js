window.addEventListener("load", mostrar);

function mostrar() {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = resolver;

  xhr.open('GET', 'json/articulos.json', true);
  xhr.send();

  function resolver() {
    if (this.readyState == 4 && this.status == 200) {
      const response = JSON.parse(this.responseText);
      const articulos = response['articulos'];

      generarCatalogo(articulos);
    }
  }

  function generarCatalogo(datos) {
    // Por cada articulo, se genera un div
    datos.forEach(dato => {
      // Generar un div exactamente como los de la web.
      const articulo = document.createElement('div');
      const enlace = document.createElement('a');
      const imagen = document.createElement('img');
      const detalles = document.createElement('div');
      const cabecera = document.createElement('h3');
      const precio = document.createElement('h4');
      const bCompra = document.createElement('a');

      // Rellenar
      cabecera.textContent = dato.denominacion;
      cabecera.className = 'mt-3 my-2 text-gray-800 text-2xl font-bold';

      precio.className = 'text-gray-700 mb-2';
      precio.textContent = `${dato.pvp} €`;

      // Preparo boton
      bCompra.className = 'bg-orange-500 text-white px-3 py-2 rounded-md text-sm font-medium';
      bCompra.textContent = 'Añadir a la cesta';

      detalles.appendChild(cabecera);
      detalles.appendChild(precio);
      detalles.appendChild(bCompra);

      imagen.setAttribute('src', dato.imagen);
      imagen.setAttribute('alt', '');
      imagen.setAttribute('width', 170);
      imagen.setAttribute('height', 170);

      enlace.setAttribute('href', `articulo.html?id=${dato.id}`);

      /*  <div class="articulo">
            <img src="imagen.jpg" alt=""></img>
            <div class="detalles">
              <h3>Articulo</h3>
              <h4>Precio</h4>
              <a>Añadir a la cesta</a>
          </div>
      */

      // Insertamos
      enlace.appendChild(imagen);
      enlace.appendChild(detalles);
      articulo.appendChild(enlace);
      document.querySelector('#elementos').appendChild(articulo);
    });
  }
}
