<template>
  <div>
    <form-pizarron :pizarron="pizarron"/>
  </div>
</template>

<script>
  import FormPizarron from './FormPizarron.vue'
  
  export default {
    data() {
      return {
        pizarron: {
          titulo: 'Mi Pizarrón',
          pipelines: []
        }
      }
    },
    components: {
      FormPizarron
    }
  }
</script>

<style scoped>

</style>