<template>
  <div id="app">
    <posicion/>
    <dark-sky />
  </div>
</template>

<script>
import Posicion from '@/playground/posicion.vue'
//import RecursoRemoto from '@/playground/recursoremoto.vue'
import DarkSky from '@/playground/darksky.vue'

export default {
  name: 'app',
  components: {
    Posicion,
    DarkSky
  }
}
</script>

<style>
</style>
