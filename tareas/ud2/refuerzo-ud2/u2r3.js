function cluedo() {
  ubicacion = document.getElementById("ubicacion").value;
  sospechoso = document.getElementById("sospechoso").value;
  salas = ['salón de baile', 'galería', 'sala de billar', 'comedor'];
  nombres = ['Sr. Kalehoff', 'Sra. Van Cleve', 'Sra. Sparr', 'Sr. Parkes'];
  objetos = ['veneno', 'trofeo', 'palo de billar', 'cuchillo'];

  if (ubicacion == sospechoso) {
    console.log('true!');
    document.getElementById('resultado').innerHTML = 'Lo hizo ' + nombres[sospechoso]
        + 'en el ' + salas[ubicacion] + ' con el ' + objetos[ubicacion] + '.';
  } else {
    console.log('false!');
    document.getElementById('resultado').innerHTML = 'No se ha encontrado al asesino.';
  }
}
