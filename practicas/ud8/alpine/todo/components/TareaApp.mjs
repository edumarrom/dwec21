export default () => {
  return {
    tareas: [],
    nuevaTarea: '',
    enviarTarea() {
      this.tareas.push( { cuerpo: this.nuevaTarea, completada: false } );
        this.nuevaTarea = '';
        console.table(this.tareas);
    }
  }
}
