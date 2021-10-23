/* 5. Realiza un script que muestre los dígitos que componen un
  número introducido por el usuario. Este debe ser menor de 1000.

  Haz 3 versiones usando for, for...in y  for...of
*/

function main() {
  let n = document.getElementById("n").value;
  resultado = document.getElementById('resultado');

  if (n < 1000) {
    muestraDigitoFor(n, resultado);
    muestraDigitoForIn(n, resultado);
    muestraDigitoForOf(n, resultado);
  } else {
    resultado.innerHTML += `El número ${n} tiene más de 3 dígitos.`;
  }
}

function muestraDigitoFor(n, resultado) {
  resultado.innerHTML += `<h2><code>muestraDigitoFor(${n})</code></h2>`;
  if (n < 1000) {
    let aux = String(n);
    resultado.innerHTML += `Los dígitos de ${n} son: <ul>`;
    for (let i = 0; i < aux.length; i++) {
      resultado.innerHTML += `<li>${aux[i]}</li>`;
    }
    resultado.innerHTML += '</ul>';
  }
}

function muestraDigitoForIn(n, resultado) {
  resultado.innerHTML += `<h2><code>muestraDigitoForIn(${n})</code></h2>`;
  if (n < 1000) {
    let aux = String(n);
    resultado.innerHTML += `Los dígitos de ${n} son: <ul>`;
    for (let k in aux) {
      resultado.innerHTML += `<li>${aux[k]}</li>`;
    }
    resultado.innerHTML += '</ul>';
  }
}

function muestraDigitoForOf(n, resultado) {
  resultado.innerHTML += `<h2><code>muestraDigitoForOf(${n})</code></h2>`;
  if (n < 1000) {
    let aux = String(n);
    resultado.innerHTML += `Los dígitos de ${n} son: <ul>`;
      for (let digit of aux) {
        resultado.innerHTML += `<li>${digit}</li>`;
      }
      resultado.innerHTML += '</ul>';
  }
}
