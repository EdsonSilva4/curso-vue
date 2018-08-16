<template>
  <div class="panel-block tarea completada" >
      <p>{{ tarea.titulo }}</p>
      <p>{{ tarea.descripcion }}</p>
  </div>
</template>

<script>
export default {
  props: {
    tarea: {
      type: Object,
      required: true
    }
  }
}
</script>

<style>

</style>
