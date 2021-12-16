/**
 * Jaja! Objetos!
 */

const INVITADO = 0;
const REGISTRADO = 1;
const ADMIN = 2;

/**
 * Reppresenta un usuario, compuesto por
 * @param {string} nombre
 * @param {string} email
 * @param {string} dni
 * @param {number} rango
 */
function Usuario (nombre, email, dni, rango) {
  this.nombre = nombre;
  this.email = email;
  this.dni = dni;

  this.rango = rango;
  this.cambiarRango = function(rango) {
    this.rango = rango;
  }
}

const user = new Usuario('', '', '', INVITADO);

/**
 * Al pulsar el boton login, pasamos a modo "registrado"
 */
const contenedorUno = document.querySelector('#contenedorUno');
const contenedorDos = document.querySelector('#contenedorDos');
const infoInvitado = contenedorDos.textContent;

const loginBtn = document.querySelector('#login');

loginBtn.addEventListener('click', login);

function login() {
  if (user.rango == INVITADO) {
    user.cambiarRango(REGISTRADO);
    contenedorDos.textContent = '';
    loginBtn.textContent = 'LogOut';
  } else {
    user.cambiarRango(INVITADO);
    contenedorDos.textContent = infoInvitado;
    loginBtn.textContent = 'LogIn';
  }
}

/**
 * Creamos el botón del modo Admin
 */
const adminBtn = document.createElement('button');
adminBtn.textContent = 'Modo Administrador';

adminBtn.addEventListener('click', sudo);

function sudo() {
  if (user.rango == REGISTRADO) {
    user.cambiarRango(ADMIN);
  } else {
    user.cambiarRango(REGISTRADO);
  }
}

/**
 * Creo el formulario
 */

const formulario = document.createElement('form');
formulario.setAttribute('action', '#');
formulario.setAttribute('method', 'GET');

const usuLabel = document.createElement('label');
usuLabel.setAttribute('for', 'usuario');

const usuario = document.createElement('input');
usuario.setAttribute('id', 'usuario');
usuario.setAttribute('name', 'usuario');
usuario.setAttribute('placeholder', 'Usuario');
usuario.setAttribute('required', 'true');
usuario.setAttribute('pattern', '^[A-Za-zÀ-ÿ][A-Za-zÀ-ÿ\s]{2,44}');
usuario.setAttribute('maxlength', '45');

document.addEventListener('load', dibujarPagina)
/*
TODO: Cuando se hace la carga de la web, se comprueba la cookie del rango,
para mostrar un contenido distinto.
 */

function dibujarPagina() {
  if (user.rango = REGISTRADO) {

  }
}
