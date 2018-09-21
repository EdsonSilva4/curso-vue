<template>
  <div class="section content">
    <div v-if="clima == null">
      Cargando...
    </div>
    <div class="card" v-if="clima != null">
      <div class="card-content">
        <div class="media">
          <div class="media-content">
            <p class="title is-4">{{ clima.summary }}</p>
            <p class="subtitle is-6">{{ clima.temperature }}°F / {{ clima.apparentTemperature }}°F</p> 
          </div>
        </div>
        <div class="content">
          <div class="field">
            <label class="label">Humedad </label><span>{{ clima.humidity }}</span>
          </div>
          <div class="field">
            <label class="label" >Indice UV</label>
            <indice-uv :indice-uv="clima.uvIndex" />
            
          </div>
          <div class="field">
            <label class="label">Presión Atmosférica </label><span>{{ clima.pressure }} hPa</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import IndiceUv from './IndiceUv'

  export default {
    data () {
      return {
        posicionUsuario: null,
        clima: null
      }
    },
    created () {
      this.cargarPosicionUsuario()
    },
    methods: {
      cargarPosicionUsuario () {
        if (navigator.geolocation) {
          //console.log('El navegador puede encontrar la posicion del usuario')
          var comp = this
          navigator.geolocation.getCurrentPosition(function(posicion) {
            // acá va el código que maneja el éxito al obtener la posicion.
            comp.posicionUsuario = posicion
            comp.cargarClima()
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
      },
      cargarClima () {
        var comp = this
        axios
          .get(`/api/clima/forecast/bbca4f72ec00600cfc8fbec51c83d826/${comp.posicionUsuario.coords.latitude},${comp.posicionUsuario.coords.longitude}`)
          .then(function(respuesta) {
            comp.clima = respuesta.data.currently // informacion actual del clima. 
          }, function(error) {
            console.log('Error: ', error) // salio todo mal
          })
      }
    },
    components: {
      IndiceUv
    }
  }
</script>

<style scoped>

</style>