// Crear cookie //
function crearCookie(propiedad, valor) {
  document.cookie = `${propiedad} = ${valor};`;
}


// Mostrar cookies //
function mostrarCookies(target) {
  target = document.getElementById(target);
  target.innerHTML += `"${document.cookie}"`;
}

// Borrar una cookie //
function borrarCookie(cookie) {
  document.cookie = `${cookie} =; max-age = 0;`;
}
