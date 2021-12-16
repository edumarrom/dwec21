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

const loginBtn = document.querySelector('#login');

loginBtn.addEventListener('click', login);

function login() {
  if (user.rango == INVITADO) {
    user.cambiarRango(REGISTRADO);
    loginBtn.textContent = 'LogOut';
  } else {
    user.cambiarRango(INVITADO);
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

document.addEventListener('load', guardado)
/*
TODO: Cuando se hace la carga de la web, se comprueba la cookie del rango,
para mostrar un contenido distinto.
 */
