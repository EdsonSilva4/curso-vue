<template>
  <div>
    <h1>Google APIs</h1>
    <div>
      <div>
        <p>Ingresa tu direccion</p>
        <input type="text" v-model="direccion">
        <button @click.prevent="buscarDireccion">Buscar direccion</button>
      </div>
      {{ infoMapa }}
    </div>
    <div v-show="infoMapa.latitud">
      <button @click="mostrarClima">Mostrar Clima!</button>
      <div>
        {{ infoClima }}
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
// var axios2 = require('axios'); solo usar en servidores, no en apps graficas
  export default {
    data() {
      return {
        direccion: '',
        infoMapa: {},
        infoClima: {}
      }
    },
    created() {
      var comp = this
      var apiUrl = 'https://maps.googleapis.com/maps/api/geocode/json?address=Liceo 31 Malvin Montevideo'
      // promise de JS. ejecuta una funcion cuando falla y otra cuando sale bien
      var apiPromise = axios.get(apiUrl)
      apiPromise.then(function (success) {
        // funcion que se llama cuando sale todo bien
        console.log('Anduvo bien! ', success)
        comp.infoMapa = {
          direccionCompleta: success.data.results[0].formatted_address,
          latitud: success.data.results[0].geometry.location.lat,
          longitud: success.data.results[0].geometry.location.lng
        }
      }, function(error) {
        // funcion que se llama cuando sale todo mal
        console.log('Anduvo mal! ', error)
      })
      console.log('Hola')
    },
    methods: {
      buscarDireccion() {
        var comp = this
        var apiUrl = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + this.direccion
        // promise de JS. ejecuta una funcion cuando falla y otra cuando sale bien
        var apiPromise = axios.get(apiUrl)
        apiPromise.then(function (success) {
          // funcion que se llama cuando sale todo bien
          console.log('Anduvo bien! ', success)
          comp.infoMapa = {
            direccionCompleta: success.data.results[0].formatted_address,
            latitud: success.data.results[0].geometry.location.lat,
            longitud: success.data.results[0].geometry.location.lng
          }
        }, function(error) {
          // funcion que se llama cuando sale todo mal
          console.log('Anduvo mal! ', error)
        })
      },
      mostrarClima() {
        var comp = this
        var urlClima = 'https://api.darksky.net/forecast/74d84104e027e5e3237123561df65c53/-34.89232450000001,-56.1039215'
        axios.get(urlClima).then(function (exito) {
          comp.infoClima = exito.data
        }, function(error) {

        })
        console.log(this.infoMapa.latitud, this.infoMapa.longitud)
      }
    }
  }
</script>

<style scoped>

</style>