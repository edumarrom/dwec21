document.addEventListener('alpine:init', () => {
  Alpine.data('juego', () => ({
    cartas: [
      { color: 'cyan', girada: false, borrada: false },
      { color: 'magenta', girada: false, borrada: false },
      { color: 'yellow', girada: false, borrada: false },
      { color: 'black', girada: false, borrada: false },
      { color: 'cyan', girada: false, borrada: false },
      { color: 'magenta', girada: false, borrada: false },
      { color: 'yellow', girada: false, borrada: false },
      { color: 'black', girada: false, borrada: false }
    ],
    get cartasGiradas() {
      return this.cartas.filter(carta => carta.girada);
    },
    get cartasBorradas() {
      return this.cartas.filter(carta => carta.borrada);
    },
    get puntos() {
      return this.cartasBorradas.length;
    },
    girarCarta(carta) {
      carta.girada = !carta.girada;

      if (this.cartasGiradas.length == 2) {
        setTimeout(() => {
          console.log('Has girado 2 cartas');
          if (this.cartasGiradas[0].color == this.cartasGiradas[1].color) {
            mensajePareja('Has encontrado una pareja');
            this.cartasGiradas.forEach(carta => carta.borrada = true);
            console.log('Y son iguales');

            if (this.puntos == this.cartas.length) {
              setTimeout(() => alert('¡Has ganado!'), 250);
            }
          }
          this.cartasGiradas.forEach(carta => carta.girada = false);
        }, 750);
      }
      console.log(this.cartasGiradas);
    }
  }));
});
