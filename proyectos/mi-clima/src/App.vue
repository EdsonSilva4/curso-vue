<template>
  <div id="app">
    <clima-actual />
  </div>
</template>

<script>
// import Posicion from '@/playground/posicion.vue'
// import RecursoRemoto from '@/playground/recursoremoto.vue'
// import DarkSky from '@/playground/darksky.vue'
import ClimaActual from '@/components/ClimaActual.vue'

export default {
  name: 'app',
  components: {
    ClimaActual
  }
}
</script>

<style>
</style>
