/**
 * @author Eduardo Martínez Romero
 * 2021-12-17
 */

 const alumnos = [];

/* Selecciona elementos del DOM */
const contenedorUno = document.querySelector('#contenedorUno');
const contenedorDos = document.querySelector('#contenedorDos');
const alumnoBtn = document.querySelector('#entrarAlumno');
const adminBtn = document.querySelector('#entrarAdmin');

/**
 * Datos para generar inputs del formulario.
 */
 const inputs = [
    {
      id: 'nombre',
      name: 'nombre',
      placeholder: 'Nombre',
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
      id: 'id',
      name: 'id',
      placeholder: 'ID',
      required: true,
      pattern: '^[0-9]',
    },
];


/*
|--------------------------------------------------------------------------
| Creación de Alumnos
|--------------------------------------------------------------------------
|
*/

/**
 * a) ## Constructor de Alumno
 * - @param {String} nombre
 * - @param {Number} id
 * - @param {String} email
 * - @param {Array}  asignaturas
 * - @param {Array}  notas
 */
function Alumno (nombre, email) {
    alumnos.push(this);
    this.nombre = nombre;
    this.id = alumnos.length;
    this.email = email;
    this.asignaturas = [];
    this.notas = [];

    this.cambiarNota = function() {
        const asign = prompt('Nombre de la asignatura');
        const nota = prompt('Nota');

        const i = this.asignaturas.indexOf(asign);

        if (i < 1) {
            this.asignaturas.push(asign);
            this.notas.push(nota);
        } else {
            this.notas[i] = nota;
        }
    }
}

/*
|--------------------------------------------------------------------------
| Creación de elementos del DOM
|--------------------------------------------------------------------------
|
*/

/* Vista Admin */

/**
 * Crea el botón Añadir.
 */
 const anyadirBtn = document.createElement('button');
 anyadirBtn.setAttribute('disabled', true);
 anyadirBtn.textContent = 'Añadir';

 /**
 * Crea el botón Meter Nota.
 */
const notaBtn = document.createElement('button');
notaBtn.textContent = 'Meter Nota';

/**
 * Crea el botón Volver.
 */
 const volverBtn = document.createElement('button');
 volverBtn.textContent = 'Volver';

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
formulario.id.value = alumnos.length+1;

/* Vista Cliente */

/*
|--------------------------------------------------------------------------
| Funciones
|--------------------------------------------------------------------------
|
*/

function administrar() {
    alumnoBtn.disabled = true;
    adminBtn.disabled = true;

    contenedorDos.appendChild(formulario);
    contenedorDos.appendChild(anyadirBtn);
    contenedorDos.appendChild(notaBtn);
    contenedorDos.appendChild(volverBtn);
}

function visualizar() {
    const alumnoId = prompt('ID del alumno');
    const alumno = alumnos[alumnoId];

    contenedorDos.innerHTML = `
        Nombre del alumno: ${alumno.nombre}<br>
        Email: ${alumno.email}<br>
        Calificaciones:
    `
    // Creo los elementos HTML
    const cabeceras = ['ASIGNATURA', 'NOTA'];
    const tabla = document.createElement('table');
    const cabeceraTabla = document.createElement('thead');
    const cuerpoTabla = document.createElement('tbody');
    const filaCabecera = document.createElement('tr');

    // Creamos celdas de cabecera e insertamos en fila cabecera
    for (const cabecera of cabeceras) {
        let celdaCabecera = document.createElement('th');
        celdaCabecera.textContent = cabecera;
        filaCabecera.appendChild(celdaCabecera);
    }

    // Insertamos fila cabecera en la cabecera de la tabla
    cabeceraTabla.appendChild(filaCabecera);

    // Creamos filas de cuerpo
    for (const asignaturas of alumno[asignaturas]) {
        let filaCuerpo = document.createElement('tr');

        // Por cada fila, creamos celdas de cuerpo e insertamos en dicha fila
        for (let i = 0; i < asignaturas; i++) {
            let asignatura = document.createElement('td');
            asignatura.textContent = asignaturas[i];
            filaCuerpo.appendChild(asignatura);

            let nota = document.createElement('td');
            nota.textContent = notas[i];
            filaCuerpo.appendChild(nota);
        }
        cuerpoTabla.appendChild(filaCuerpo);
    }

    // Insertamos la cabecera y el cuerpo en la tabla
    tabla.appendChild(cabeceraTabla);
    tabla.appendChild(cuerpoTabla);

    /* // Inserto atributo border a la tabla
    tabla.setAttribute('border', 2); */

    // Insertamos la tabla en el body
    contenedorDos.appendChild(tabla);
}

function volver() {
    alumnoBtn.disabled = false;
    adminBtn.disabled = false;

    formulario.remove();
    anyadirBtn.remove();
    notaBtn.remove();
    volverBtn.remove();
}

function activaAnyadir() {
    if(formulario.nombre.checkValidity() && formulario.email.checkValidity()
      && formulario.id.checkValidity()) {
      anyadirBtn.disabled = false;
      return true;
    }
    anyadirBtn.disabled = true;
    return false;
}

/*
|--------------------------------------------------------------------------
| Validaciones
|--------------------------------------------------------------------------
|
*/

/* Elementos del formulario */
const nombre = formulario.nombre;
const email = formulario.email;
const id = formulario.id;

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
    if(validaNombre() && validaEmail() && validaId()
      && confirm('¿Añadir nuevo alumno?')) {
      new Alumno(nombre.value, email.value);
    } else {
    evento.preventDefault();
    return false;
  }
}
/**
 * Valida el campo Nombre
 * @returns {boolean} El resultado de la validación.
 */
function validaNombre() {
  borrarError();
  const e = document.querySelector('#nombre');
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
  console.log('Nombre correcto');
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
    return false;
  }
  console.log('Email correcto');
  return true;
}

/**
 * Valida el campo ID
 * @returns {boolean} El resultado de la validación.
 */
function validaId() {
    borrarError();
    const e = document.querySelector('#id');
    if(!e.checkValidity() && !(e.value != alumnos.length+1)) {
        if(e.validity.valueMissing) {
            e.setCustomValidity(missing(e));
        }
        if(e.validity.patternMismatch) {
            e.setCustomValidity(missmatch(e));
        }
        if(e.value != alumnos.length+1) {
            e.setCustomValidity(missmatch(e));
        }
        e.reportValidity();
        error(e);
        return false;
    }
    console.log('ID correcto');
    return true;
}

/*
|--------------------------------------------------------------------------
| Eventos
|--------------------------------------------------------------------------
|
*/

/**
 * Acceso cliente.
 */
 alumnoBtn.addEventListener('click', visualizar);

/**
 * Acceso administrador.
 */
adminBtn.addEventListener('click', administrar);

/**
 * Volver al inicio.
 */
volverBtn.addEventListener('click', volver);

/**
 * Activación el botón de guardado.
 */
formulario.addEventListener('keyup', activaAnyadir);

 /* Validaciones */
nombre.addEventListener('blur', validaNombre);
email.addEventListener('blur', validaEmail);
id.addEventListener('blur', validaId);

/**
 * Validación y guardado de los datos.
 */
anyadirBtn.addEventListener('click', validar);

/**
 * Meter una nota
 */
notaBtn.addEventListener('click', () => {
    const a = prompt('ID de alumno')-1;
    alumnos[a].cambiarNota();
});
