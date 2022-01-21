document.querySelector('#generar-tabla').addEventListener('click', mostrar);

function mostrar() {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = resolver;

  function resolver() {
    if (this.readyState == 4 && this.status == 200) {
      let aux = JSON.parse(this.responseText);
      const empleados = aux.employees;
      const tabla = document.createElement('table');

      // Generamos cabecera
      const cabeceras = Object.keys(empleados[0]);
      const cabeceraTabla = document.createElement('thead');
      const filaCabecera = document.createElement('tr');
      cabeceras.forEach(cabecera => {
        const celdaCabecera = document.createElement('th');
        celdaCabecera.textContent = cabecera;
        filaCabecera.appendChild(celdaCabecera);
      });
      cabeceraTabla.appendChild(filaCabecera);
      tabla.appendChild(cabeceraTabla);

      // Genera filas de empleados
      const cuerpoTabla = document.createElement('tbody');
      empleados.forEach(empleado => {
        const filaCuerpo = document.createElement('tr');
        const firstName = document.createElement('td');
        const lastName = document.createElement('td');
        firstName.textContent = empleado['firstName'];
        lastName.textContent = empleado['lastName'];
        filaCuerpo.appendChild(firstName);
        filaCuerpo.appendChild(lastName);
        cuerpoTabla.appendChild(filaCuerpo);
      });
      tabla.appendChild(cuerpoTabla);

      // Insertamos el resultado
      const resultado = document.querySelector('#resultado')
      resultado.innerHTML = '';
      resultado.appendChild(tabla);
    }
  }

  xhr.open('GET', 'ficheros/servidor.php', true); // 'objeto.php'
  xhr.send();
}
