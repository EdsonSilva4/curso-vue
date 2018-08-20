<template>
  <form>
    <div class="field is-horizontal">
      <div class="field-body">
        <div class="field">
          <input type="text" class="input" placeholder="titulo" v-model="tarea.titulo">
        </div>
        <div class="field">
          <input type="text" class="input" placeholder="descripcion" v-model="tarea.descripcion">
        </div>
      </div>
      
    </div>
    <div>
      <button class="button is-primary" @click.prevent="agregarTarea">Agregar</button>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      tarea: {
        titulo: '',
        descripcion: '',
        completada: false
      }
    }
  },
  methods: {
    agregarTarea() {
      this.tarea.id = new Date().getTime() // instante actual
      
      // emito un evento para agregar una nueva tarea
      this.$emit('agregar-tarea', this.tarea)

      // re-inicializo la tarea
      this.tarea = {
        titulo: '',
        descripcion: '',
        completada: false
      }

    }
  }
}
</script>

<style>

</style>
