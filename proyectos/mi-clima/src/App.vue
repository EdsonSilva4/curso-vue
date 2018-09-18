<template>
  <div id="app">
    <posicion/>
    <recurso-remoto />
  </div>
</template>

<script>
import Posicion from '@/playground/posicion.vue'
import RecursoRemoto from '@/playground/recursoremoto.vue'

export default {
  name: 'app',
  components: {
    Posicion,
    RecursoRemoto
  }
}
</script>

<style>
</style>
