let usuarios = [

  {
    nombre: "Juan",
    apellidos: "Pérez Pérez",
    edad: 20,
    casado: true,
  },

  {
    nombre: "Laura",
    apellidos: "López López",
    edad: 21,
    casado: false,
  },

  {
    nombre: "Ana",
    apellidos: "Sánchez Sánchez",
    edad: 24,
    casado: true,
  },

  {
    nombre: "Miguel",
    apellidos: "Fernández Fernández",
    edad: 26,
    casado: false,
  },

  {
    nombre: "Lola",
    apellidos: "García García",
    edad: 20,
    casado: true,
  },

  {
    nombre: "Francisco",
    apellidos: "Jiménez Jiménez",
    edad: 15,
    casado: false,
  }
];

/* Función principal que gestiona el funcionamiento
  de esta práctica.
*/
function principal() {
  let opcion = document.getElementById("opcion").value;
  let resultado = document.getElementById('resultado');

  switch (opcion) {
    case '1':
      limpiarResultado();
      listarUsuarios();
      break;

    case '2':
      limpiarResultado();
      edadMedia();
      break;

    case '3':
      limpiarResultado();
      contarCasados();
      break;

    case '4':
      /* Uso limpiarResultado() aquí, y no dentro de la función
          porque de lo contrario no veríamos el resultado de la
          primera función.
      */
      limpiarResultado();
      edadMedia(true, false); // 1
      edadMedia(false, true); // 2
      break;

    default:
      limpiarResultado();
      resultado.innerHTML += `La opción ${opcion} no es válida.`;
      break;
  }

  /* Muestra una lista de todos los usuarios. */
  function listarUsuarios() {
    for (let i = 0; i < usuarios.length; i++) {
      let nom = usuarios[i].nombre;
      let ape = usuarios[i].apellidos;
      let edad = usuarios[i].edad;
      let cas = usuarios[i].casado;

      let lista = `
      <ul>
        <li>nombre: ${nom}</li>
        <li>apellidos: ${ape}</li>
        <li>edad: ${edad} años</li>
        <li>casado: ${cas ? 'Sí' : 'No'}</li>
      </ul>
      `;
      resultado.innerHTML += `Los datos del usuario ${i+1} son: <br> ${lista}`;
    }
  }

  /* Antigua funcion edadMedia()
    function edadMedia() {
      limpiarResultado();
      let media = 0;
      for (const usu of usuarios) {
        media += usu.edad;
      }
      media = media / usuarios.length;
      resultado.innerHTML += `La edad media de todos los usuarios es ${media}`;
    }
  */

  /* Calcula la edad media de los usuarios.
    Opciones:
      -(bool) casados: Tiene en cuenta a los casados.
      -(bool) solteros: Tiene en cuenta a los solteros.
    Por defecto, se cuentan a los casados y a los solteros.
  */
  function edadMedia(casados = true, solteros = true) {
    let media = 0;  // Media al comienzo es un sumatorio.
    let total = 0;  // Total de usuarios

    for (const usu of usuarios) {
      // Si casado, almaceno su edad y cuenta al total.
      if (casados) {
        if (usu.casado) {
          media += usu.edad;
          total++;
        }
      }
      // Si soltero, almaceno su edad y cuenta al total.
      if (solteros) {
        if (!usu.casado) {
          media += usu.edad;
          total++;
        }
      }
    }

    console.log(`media: ${media}; total: ${total}`);

    media = media / total; // Media deja de ser un sumatorio.

    if (casados && solteros) {
      resultado.innerHTML += `La edad media de todos los usuarios es ${media.toPrecision(4)}<br>`;
    } else if (casados) {
      resultado.innerHTML += `La edad media de los usuarios casados es ${media.toPrecision(4)}<br>`;
    } else {
      resultado.innerHTML += `La edad media de los usuarios solteros es ${media.toPrecision(4)}<br>`;
    }
  }

  /* Cuenta el número de casados del array usuarios */
  function contarCasados() {
    let casados = 0;
    for (const usu of usuarios) {
      usu.casado ? casados ++ : null;
    }
    resultado.innerHTML += `El número de usuarios casados es ${casados}`;
  }

  /* Limpia el párrafo desginado para recibir los
      resultados de las funciones
  */
  function limpiarResultado(){
    resultado.innerHTML = '';
  }
}
