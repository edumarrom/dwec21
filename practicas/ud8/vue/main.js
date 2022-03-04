Vue.component('Presentacion', {
  data() {
    return {saludo: 'Me llamo Eduardito, y me gusta el huevo frito.'}
  },
  template: `
    <div>
      <span>{{ saludo }}</span>
    </div>`
});

const app = new Vue({
  el: '#app',
  data: {
    mostrado: false,
    saludo: 'Soy nuevo por aquí!',
    methods: {
      mostrar() {
        this.mostrado = !mostrado;
      },
    },
  }
});
