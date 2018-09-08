<template>
  <div>
    <p>{{ valor.titulo }}</p>
    <tarea f-for="tarea in valor.tareas" :tarea="tarea"/>
  </div>
</template>

<script>
  export default {
    data() {
      return {
      }
    },
    props: {
      valor: { // esta es tu pipeline que te llega desde afuera
        type: Object,
        required: true
      }
    }
    /** otras partes de tu componente van acá */
  }
</script>

<style scoped>

</style>