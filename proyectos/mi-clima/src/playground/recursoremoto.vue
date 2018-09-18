<template>
  <div>
    <h1>recurso remoto</h1>
    <p v-if="foto == null">Cargando...</p>
    <img v-if="foto !== null" :src="foto" alt="">
  </div>
</template>

<script>
import axios from 'axios'

  export default {
    data () {
      return {
        foto: null
      }
    },
    created () {
      /*var promesa = new Promise(function(resolve, reject) {
        reject({ error: 'Hubo un problema al procesar la solicitud'})
      })
      promesa.then(function(success) {
        console.log(success)
        alert(success.mensaje)
      }).catch(function(error) {
        console.log(error)        
      })*/
      var comp = this
      axios.get('https://dog.ceo/api/breeds/image/random').then(function(datos) {
        console.log(datos);
        comp.foto = datos.data.message
      }, function(error) {
        // caso de error. 
        console.log(error)
      })
    }
  }
</script>

<style scoped>

</style>