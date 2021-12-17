import * as cookie from './cookie.js';

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
 * Datos para generar inputs del formulario
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

/**
 * Constructor de usuarios
 * @param {String} nombre
 * @param {String} email
 * @param {String} dni
 * @param {Number} rango
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

/* Genera una instancia de usuario */
const user = new Usuario('', '', '', INVITADO);
cookie.setCookie('rango', user.rango);

/*
|--------------------------------------------------------------------------
| Creación de elementos del DOM
|--------------------------------------------------------------------------
|
*/

/**
 * Crea el botón de guardado
 */
 const guardarBtn = document.createElement('button');
 guardarBtn.setAttribute('disabled', true);
 guardarBtn.textContent = 'Guardar Datos';

 /**
 * Crea el botón del acceso Admin
 */
const adminBtn = document.createElement('button');
adminBtn.innerHTML = 'Modo Administrador';

/**
 * Crea el formulario
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

function iniciarCookies() {
  cookie.setCookie('usuario', '');
  cookie.setCookie('email', '');
  cookie.setCookie('dni', '');
  cookie.setCookie('rango', '');
}

/**
 * Inicia o finaliza la sesión actual
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
 * Accede como administrador del sitio
 */
function sudo() {
  user.cambiarRango(ADMIN);
  contenedorUno.removeChild(adminBtn);
  contenedorDos.innerHTML = infoAdmin;
  contenedorDos.appendChild(formulario);
  formulario.dni.classList.remove('hidden');
}

/**
 * Guarda los valores del input en cookies
 */
function guardar() {
  if (user.rango == REGISTRADO) {
    cookie.setCookie(formulario.usuario.name, formulario.usuario.value);
    cookie.setCookie(formulario.email.name, formulario.email.value);
  }

  if (user.rango == ADMIN) {
    cookie.setCookie(formulario.dni.name, formulario.dni.value);
  }
}

function activaGuardar() {
  if(formulario.usuario.checkValidity() && formulario.email.checkValidity()) {
    guardarBtn.disabled = false;
    return true;
  }
  return false;
}

/*
 VALIDACIONES
*/

/**
 * Elemento que mostrará el error
 */
const mensajeError = document.createElement('div');
mensajeError.classList.add('entrada-error-mensaje');

// Mensajes de error
const missing = (e) =>`El ${e.name} no puede estar vacío.`;
const missmatch = (e) =>`Debe introducir un ${e.name} válido.`;

function error(e) {
  mensajeError.textContent = e.validationMessage;
  e.classList.add('entrada-error');
  e.insertAdjacentElement('afterend', mensajeError);
}

function borrarError() {
  const formulario = document.forms[0];
  for (const e of formulario.elements){
    e.setCustomValidity('');
    mensajeError.textContent = e.validationMessage;
  }
}

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
    return false;
  }
  console.log('Usuario correcto');
  e.classList.remove('entrada-error');
  return true;
}

function validaEmail() {
  borrarError();
  const e = document.querySelector('#email');
  if(!e.checkValidity()) {
    if(e.validity.valueMissing) {
        e.setCustomValidity(missing(e));
    }
    if(e.validity.patternMismatch) {
        e.setCustomValidity(missmatch(e));
    }
    e.reportValidity();
    error(e);
    return false;
  }
  console.log('Email correcto');
  e.classList.remove('entrada-error');
  return true;
}

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
    return false;
  }
  console.log('DNI correcto');
  e.classList.remove('entrada-error');
  return true;
}

/*
|--------------------------------------------------------------------------
| Eventos
|--------------------------------------------------------------------------
|
*/

/**
 * Inicio y cierre de sesión
 */
loginBtn.addEventListener('click', login);

/**
 * Acceso administrador
 */
adminBtn.addEventListener('click', sudo);

formulario.addEventListener('change', activaGuardar);

guardarBtn.addEventListener('click', validar);
