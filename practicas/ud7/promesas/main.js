const promesa = new Promise((resolver, rechazar) => {
  const n1 = prompt( 'Introduce variable 1' );
  const n2 = prompt( 'Introduce variable 2' );
  (n1 == n2) ? resolver( 'Son iguales' ) : rechazar(Error( 'Algo raro ha pasado' ));
  });
  promesa.then((resultado) => console.log(resultado))
  .catch((error) => console.log(error.message));
