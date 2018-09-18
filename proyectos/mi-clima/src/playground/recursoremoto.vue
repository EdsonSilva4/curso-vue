<template>
  <div>
    <h1>recurso remoto</h1>
  </div>
</template>

<script>
import axios from 'axios'

  export default {
    created () {
      var promesa = new Promise(function(resolve, reject) {
        reject({ error: 'Hubo un problema al procesar la solicitud'})
      })
      promesa.then(function(success) {
        console.log(success)
        alert(success.mensaje)
      }).catch(function(error) {
        console.log(error)        
      })
    }
  }
</script>

<style scoped>

</style>