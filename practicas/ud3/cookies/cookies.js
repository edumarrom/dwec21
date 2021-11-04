// Variables globales //
/* var resultado = document.getElementById('resultado'); // Por qué no funciona???*/

const Cookies = require("cookies");

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
    let nom = nombre + '=';
    let cookies = decodeURIComponent(document.cookie).split(';');
    console.log("chorizo=" + cookies);
    // TODO: Se vuelve loquísimo. Pendiente de arreglar.
    for(let i = 0; i <cookies.length; i++) {
      c = cookies[i];
      while (c.charAt(0) == ' '){
        c.substring(1);
      }
      console.log("cookie=" + c);
      if (c.indexOf(nom) == 0) {
        return c.substring(nom.length, c.length);
      }
    }

    return "";
  }

  /* function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  } */

  limpiarResultado();
  let nombre = prompt('Introduzca nombre de la cookie: ');
  document.getElementById('resultado').innerHTML = `"${nombre} = ${gc(nombre)}"`; // TODO: getElement como variable
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
