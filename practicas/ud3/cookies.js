// Variables globales //
/* var resultado = document.getElementById('resultado'); // Por qué no funciona???*/

// Crear o Modificar cookie //
function setCookie(nombre, valor, diasExp = 1, ruta = '/', sameSite = 'None', secure = 'secure') {
  let fechaExp = new Date();
  fechaExp.setTime(fechaExp.getTime() + diasExp * 24 * 60 * 60 * 1000);
  document.cookie = `${nombre}=${valor};expires=${fechaExp.toUTCString()};path=${ruta};SameSite=${sameSite};${secure}`;
}

// Asistente para crear cookies //
function cookieWizard() {
  let nombre = prompt('Introduza nombre de cookie:');
  let valor = prompt('Introduza valor:');
  let diasExp = parseInt(prompt('Introduza nº de días para que expire (Vacío = Esta sesión):'));
  setCookie(nombre, valor, diasExp);
  getCookies();
}

// Mostrar cookies //
function getCookies(target = 'resultado') {
  let lista = '<ul>';
  let cookies = document.cookie.split(';');
  for (const c of cookies) {
    lista += `<li>${c}</li>`;
  }
  cookies += '</ul>';
  document.getElementById(target).innerHTML = `${lista}`; // TODO: getElement como variable
}

// Mostrar una cookie especifica//
function getCookie() {
  // Devuelve el valor de una cookie específica, o cadena vacía si no existe. //
  function gc(nombre) {
    // let nom = nombre+'=';
    let cookies = document.cookie.split(';');

    // TODO: Cuando busco una cookie que no es la primera del array se vuelve loquísimo. Pendiente de arreglar.
    for (const c of cookies) {
      let cookie = c;

      while (cookie.charAt(0) == " "){
        cookie.substring(1);
      }

      if (cookie.indexOf(`${nombre}=`) == 0) {
        return cookie.substring(nombre.length, cookie.length);
      }
    }

    return "";
  }

  limpiarResultado();
  let nombre = prompt('Introduzca nombre de la cookie: ');
  document.getElementById('resultado').innerHTML = `"${nombre}${gc(nombre)}"`; // TODO: getElement como variable
}

// Borrar una cookie //
function delCookie() {
  function dc(nombre) {
    setCookie(nombre, '', 0);
  }

  let nombre = prompt('Introduza nombre de la cookie: ')
  dc(nombre);
  getCookies();
}

// Limpia
function limpiarResultado(){
  document.getElementById('resultado').innerHTML = '';
}
