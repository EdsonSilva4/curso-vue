<template>
  <div>
    <h1 class="heading">Posicion</h1>
    <div v-if="posicionUsuario.coords">
      <p><label class="label">Latitud </label><span>{{ posicionUsuario.coords.latitude }}</span></p>
      <p><label class="label">Longitud </label><span>{{ posicionUsuario.coords.longitude }}</span></p>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        posicionUsuario: {},
        error: null
      }
    },
    created () {
      if (navigator.geolocation) {
        //console.log('El navegador puede encontrar la posicion del usuario')
        var comp = this
        navigator.geolocation.getCurrentPosition(function(posicion) {
          // acá va el código que maneja el éxito al obtener la posicion.
          comp.posicionUsuario = posicion
          console.log(posicion)
        }, function(error) {
          // acá va el código que maneja error al obtener la posicion. 
          console.log(error)
        }, {
          enableHighAccuracy: true,
          timeout: 5000,
          maximumAge: 0
        })
      } else {
        this.error = 'El navegador no puede encontrar la posicion del usuario'
      }
    }
  }
</script>

<style scoped>

</style>