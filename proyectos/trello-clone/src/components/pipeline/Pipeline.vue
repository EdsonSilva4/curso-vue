<template>
  <div class="panel">
    <div class="panel-heading">
       {{ datos.titulo}}
    </div>
    <div class="panel-block">
      <span>stuff</span>
    </div>
    <div class="panel-block">
      <button class="button is-link is-outlined is-fullwidth">
        + Agregar tarea
      </button>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      datos: {
        type: Object,
        required: true
      }
    }
  }
</script>

<style scoped>

</style>