<template>
  <div>
    <button @click="cargarClima">Cargar Datos de Clima</button>
    <div class="columns" v-if="clima != null">
      <div class="column">
        <div class="field">
          <label class="label">Temperatura </label><span>{{ clima.temperature }} °F</span>
        </div>
        <div class="field">
          <label class="label">Presión Atmosférica </label><span>{{ clima.pressure }} hPa</span>
        </div>
      </div>
      <div class="column">
        <div class="field">
          <label class="label">Sensación Térmica </label><span>{{ clima.apparentTemperature }} °F</span>
        </div>
        <div class="field">
          <label class="label">Humedad </label><span>{{ clima.humidity }}</span>
        </div>
        <div class="field">
          <label class="label">Índice UV </label><span>{{ clima.uvIndex }}</span>
        </div>
      </div>
      
    </div>
  </div>
</template>

<script>
import axios from 'axios'

  export default {
    data () {
      return {
        clima: null
      }
    },
    methods: {
      cargarClima () {
        var comp = this
        axios
          .get('/api/clima/forecast/bbca4f72ec00600cfc8fbec51c83d826/37.8267,-122.4233')
          .then(function(respuesta) {
            console.log(respuesta) // salio todo bien
            comp.clima = respuesta.data.currently // informacion actual del clima. 
          }, function(error) {
            console.log('Error: ', error) // salio todo mal
          })
      }
    }
  }
</script>

<style scoped>

</style>