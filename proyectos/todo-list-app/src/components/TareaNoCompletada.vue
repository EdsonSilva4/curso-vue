<template>
  <div class="panel-block tarea pendiente">
      <div>
        <p>{{ tarea.titulo }}</p>
        <p>{{ tarea.descripcion }}</p>
      </div>
      <div class="is-pulled-right">
        <button class="button is-link " @click.prevent="completarTarea()">Completar</button>
      </div>
      
  </div>
</template>

<script>
export default {
  props: {
    tarea: {
      type: Object,
      required: true
    }
  },
  methods: {
    completarTarea() {
      // mandar evento que indique que el usuario quiere completar 
      // la tarea de este componente.
      this.$emit('completar-tarea', this.tarea)
    }
  }
}
</script>

<style>

</style>
