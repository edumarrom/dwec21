import * as cookie from './cookie.js';

/**
 * Actividad de consolidación de conceptos del 1er trimestre
 * DWEC 21/22 - IES. DOÑANA
 * @author  Eduardo Martínez Romero
 * @license GPLv3 (https://www.gnu.org/licenses/gpl-3.0.en.html)
 */

/*
|--------------------------------------------------------------------------
| Constantes, selectores, datos
|--------------------------------------------------------------------------
|
*/

/* Constantes de rango */
const INVITADO = 0;
const REGISTRADO = 1;
const ADMIN = 2;

/* Selecciona elementos del DOM */
const contenedorUno = document.querySelector('#contenedorUno');
const contenedorDos = document.querySelector('#contenedorDos');
const loginBtn = document.querySelector('#login');

/* Datos para contenerdorDos */
const infoInvitado = contenedorDos.innerHTML;
const infoRegistrado = 'Hola de nuevo, usuario';
const infoAdmin = 'Bienvenido de nuevo, admin';

/**
 * Datos para generar inputs del formulario.
 */
const inputs = [
  {
    id: 'usuario',
    name: 'usuario',
    placeholder: 'Usuario',
    required: true,
    pattern: '^[A-Za-zÀ-ÿ][A-Za-zÀ-ÿ\s]{2,44}',
  },
  {
    id: 'email',
    name: 'email',
    placeholder: 'Email',
    required: true,
    pattern: '^[A-Za-z0-9._%+-]{1,64}@(?:[A-Za-z0-9-]{1,63}\.){1,125}[A-Za-z]{2,63}$',
  },
  {
    id: 'dni',
    name: 'dni',
    placeholder: 'DNI',
    required: true,
    pattern: '^[0-9][0-9]{7}[A-Za-z]{1}',
  }
];

/*
|--------------------------------------------------------------------------
| Creación de usuarios
|--------------------------------------------------------------------------
|
*/

// Los docstrings de JS permiten el uso de Markdown.

/**
 * ## Constructor de usuarios.
 * - @param {String} nombre Nombre del usuario.
 * - @param {String} email  Email del usuario.
 * - @param {String} dni    DNI del usuario.
 * - @param {Number} rango  Rango del usuario.
 */
function Usuario (nombre, email, dni, rango) {
  iniciarCookies();

  this.nombre = nombre;
  this.email = email;
  this.dni = dni;
  this.rango = rango;

  this.cambiarRango = function(rango) {
    this.rango = rango;
    cookie.setCookie('rango', user.rango);
  }
}

/* Genera una instancia de usuario. */
const user = new Usuario('', '', '', INVITADO);
cookie.setCookie('rango', user.rango);

/*
|--------------------------------------------------------------------------
| Creación de elementos del DOM
|--------------------------------------------------------------------------
|
*/

/**
 * Crea el botón de guardado.
 */
 const guardarBtn = document.createElement('button');
 guardarBtn.setAttribute('disabled', true);
 guardarBtn.textContent = 'Guardar Datos';

 /**
 * Crea el botón del acceso Admin.
 */
const adminBtn = document.createElement('button');
adminBtn.innerHTML = 'Modo Administrador';

/**
 * Crea el formulario.
 */
 const formulario = document.createElement('form');
 formulario.setAttribute('action', '#');
 formulario.setAttribute('method', 'GET');
 formulario.classList.add('formulario')

 for (const i of inputs) {
   let label = document.createElement('label');
   label.setAttribute('for', i.name);

   formulario.appendChild(label);

   let input = document.createElement('input');
   input.setAttribute('id', i.id);
   input.setAttribute('name', i.name);
   input.setAttribute('placeholder', i.placeholder);
   input.setAttribute('required', i.required);
   input.setAttribute('pattern', i.pattern);
   formulario.appendChild(input);
 }
 formulario.dni.classList.add('hidden');

/*
|--------------------------------------------------------------------------
| Funciones
|--------------------------------------------------------------------------
|
*/

/**
 * Inicializa las cookies.
 */
function iniciarCookies() {
  cookie.setCookie('usuario', '');
  cookie.setCookie('email', '');
  cookie.setCookie('dni', '');
  cookie.setCookie('rango', '');
}

/**
 * Inicia o finaliza la sesión actual.
 */
function login() {
  if (user.rango <= INVITADO) {
    user.cambiarRango(REGISTRADO);
    contenedorUno.appendChild(guardarBtn);
    contenedorUno.appendChild(adminBtn);
    contenedorDos.innerHTML = infoRegistrado;
    contenedorDos.appendChild(formulario);
    loginBtn.innerHTML = 'LogOut';
  } else {
    iniciarCookies();
    user.cambiarRango(INVITADO);
    guardarBtn.remove();
    adminBtn.remove();
    formulario.dni.classList.add('hidden');
    contenedorDos.innerHTML = infoInvitado;
    loginBtn.innerHTML = 'LogIn';
  }
}

/**
 * Accede como administrador del sitio.
 */
function sudo() {
  user.cambiarRango(ADMIN);
  contenedorUno.removeChild(adminBtn);
  contenedorDos.innerHTML = infoAdmin;
  contenedorDos.appendChild(formulario);

  // Activación del campo DNI
  formulario.dni.classList.remove('hidden');
  dni.addEventListener('blur', validaDni);
  guardarBtn.disabled = true;
}

/**
 * Guarda los valores del input en cookies.
 */
function guardar() {
  cookie.setCookie(formulario.usuario.name, formulario.usuario.value);
  cookie.setCookie(formulario.email.name, formulario.email.value);

  if (user.rango == ADMIN) {
    cookie.setCookie(formulario.dni.name, formulario.dni.value);
  }
}

/**
 * Activa el botón de guardado si se cumplen las condiciones.
 */
function activaGuardar() {
  if (user.rango == REGISTRADO) {
    if(formulario.usuario.checkValidity() && formulario.email.checkValidity()) {
      guardarBtn.disabled = false;
      return true;
    }
    guardarBtn.disabled = true;
    return false;
  } else if (user.rango == ADMIN) {
    if(formulario.usuario.checkValidity() && formulario.email.checkValidity()
      && formulario.dni.checkValidity()) {
      guardarBtn.disabled = false;
      return true;
    }
    guardarBtn.disabled = true;
    return false;
  }

}

/*
|--------------------------------------------------------------------------
| Validaciones
|--------------------------------------------------------------------------
|
*/

/* Elementos del formulario */
const usuario = formulario.usuario;
const email = formulario.email;
const dni = formulario.dni;

/**
 * Elemento que mostrará los posibles mensajes de error.
 */
const mensajeError = document.createElement('div');

// Mensajes de error
const missing = (e) =>`El ${e.name} no puede estar vacío.`;
const missmatch = (e) =>`Debe introducir un ${e.name} válido.`;

/**
 * Inserta el elemento que muestra el error en el DOM.
 * @param {Object} e El objeto disparador del evento.
 */
function error(e) {
  mensajeError.textContent = e.validationMessage;
  e.classList.add('entrada-error');
  e.insertAdjacentElement('afterend', mensajeError);
}

/**
 * Remueve los errores de todos los elementos del formulario.
 */
function borrarError() {
  const formulario = document.forms[0];
  for (const e of formulario.elements){
    e.setCustomValidity('');
    mensajeError.textContent = e.validationMessage;
  }
}

/**
 * Reliza una validación completa de todos los campos del formulario.
 * @param   {Object} evento El objeto disparador del evento.
 * @returns {boolean}       El resultado de la validación.
 */
function validar(evento) {
  borrarError();
  if (user.rango == REGISTRADO) {
    if(validaUsuario() && validaEmail()
      && confirm('¿Estás seguro usuario?')) {
      guardar();
    }
  } else if (user.rango == ADMIN) {
    if(validaUsuario() && validaEmail() && validaDni()
      && confirm('¿Está seguro admin?')) {
      guardar();
    }
  } else {
    evento.preventDefault();
    return false;
  }
}
/**
 * Valida el campo Usuario
 * @returns {boolean} El resultado de la validación.
 */
function validaUsuario() {
  borrarError();
  const e = document.querySelector('#usuario');
  if(!e.checkValidity()) {
    if(e.validity.valueMissing) {
      e.setCustomValidity(missing(e));
    }
    if(e.validity.patternMismatch) {
      e.setCustomValidity(missmatch(e));
    }
    e.reportValidity();
    error(e);
    e.focus();
    return false;
  }
  console.log('Usuario correcto');
  return true;
}

/**
 * Valida el campo Email
 * @returns {boolean} El resultado de la validación.
 */
function validaEmail() {
  borrarError();
  const e = document.querySelector('#email');
  if(!e.checkValidity()) {
    if(e.validity.valueMissing) {
      e.setCustomValidity(missing(e));
    } else if(e.validity.patternMismatch) {
      e.setCustomValidity(missmatch(e));
    }
    e.reportValidity();
    error(e);
    e.focus()
    return false;
  }
  console.log('Email correcto');
  return true;
}

/**
 * Valida el campo DNI
 * @returns {boolean} El resultado de la validación.
 */
function validaDni() {
  borrarError();
  const e = document.querySelector('#dni');
  if(!e.checkValidity()) {
    if(e.validity.valueMissing) {
      e.setCustomValidity(missing(e));
    }
    if(e.validity.patternMismatch) {
      e.setCustomValidity(missmatch(e));
    }
    e.reportValidity();
    error(e);
    e.focus()
    return false;
  }
  console.log('DNI correcto');
  return true;
}

/*
|--------------------------------------------------------------------------
| Eventos
|--------------------------------------------------------------------------
|
*/

/**
 * Inicio y cierre de sesión.
 */
loginBtn.addEventListener('click', login);

/**
 * Acceso administrador.
 */
adminBtn.addEventListener('click', sudo);

/**
 * Activación el botón de guardado.
 */
formulario.addEventListener('keyup', activaGuardar);

/* Validaciones */
usuario.addEventListener('blur', validaUsuario);
email.addEventListener('blur', validaEmail);
// El evento para la validación del DNI se encuentra en la función sudo.

/**
 * Validación y guardado de los datos.
 */
guardarBtn.addEventListener('click', validar);
