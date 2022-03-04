function juego() {
  function generarCartas() {
    const numeros = [1, 2, 3, 4];
    const colores = ['red', 'green', 'blue', 'yellow'];
    const deck = [];

    numeros.forEach(numero => {
      colores.forEach(color => {
        // Son dos cartas iguales
        for (i = 0; i < 2; i++) {
          const carta = {
            numero,
            color,
            girada: false,
            borrada: false,
          };
          deck.push(carta);
        };
      });
    });
    return deck;
  }
  return {
    mostrado: false,
    cartas: generarCartas(),
    /* Ej.2 */
    score: 0,

    get cartasGiradas() {
      return this.cartas.filter(carta => carta.girada)
    },

    get cartasBorradas() {
      return this.cartas.filter(carta => carta.borrada)
    },

    get puntos() {
      return this.score;
    },

    girarCarta(carta) {
      if (this.cartasGiradas.length == 2) {
        return
      }

      carta.girada = !carta.girada;
      if (this.cartasGiradas.length == 2) {
        setTimeout(() => {
          if (this.cartasGiradas[0].color == this.cartasGiradas[1].color &&
            this.cartasGiradas[0].numero == this.cartasGiradas[1].numero) {
            lanzarMensaje('son-pareja', 'Eureka');
            /* Ej.2 */
            this.score += 10;

            this.cartasGiradas.forEach(carta => carta.borrada = true);
            if (this.cartasBorradas.length == this.cartas.length) {
              setTimeout(() => { alert('Enhorabuena has ganado') }, 250);
            }


            console.log(this.cartasGiradas);
          } else {
            lanzarMensaje('no-son-pareja', "Do'h")
            /* Ej.2 */
            this.score -= 2;
          }
          this.cartasGiradas.forEach(carta => carta.girada = false)

        }, 750);

      }
    },
    reiniciar() {
      // Puntuacion a 0
      console.log('puntuacion a 0')
      this.score = 0;

      // Cartas borradas
      // Cartas giradas
      this.cartas.forEach(carta => {
        carta.girada = false;
        carta.borrada = false;
      });
      // Barajamos de nuevo
    },
  }
}

/* Ej.1 */
function lanzarMensaje(event, msj) {
  const evento = new CustomEvent(event, { detail: { mensaje: msj } });
  dispatchEvent(evento);
};

/* Ej.7 */
function barajar(baraja) {
  baraja.sort(() => Math.random() - 0.5);
  mostrarCartas(baraja);
};

function mostrarCartas(baraja) {
  setTimeout(() => {
    baraja.forEach(carta => carta.girada = false);
  }, 2000);
  baraja.forEach(carta => carta.girada = true);
}
