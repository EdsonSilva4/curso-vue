<template>
  <div id="app" >
    <esquema >
      <pizarron />
    </esquema>
  </div>
</template>

<script>
  import Esquema from './components/general/Esquema.vue'
  import Pizarron from './components/pizarron/Pizarron.vue'
  
  export default {
    name: 'app',
    components: {
      Pizarron,
      Esquema
    }
  }
</script>

<style>
  #app {
    height: inherit;
  }
</style>
