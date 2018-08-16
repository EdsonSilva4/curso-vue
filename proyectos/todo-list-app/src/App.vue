<template>
  <div id="app">
    <div class="formulario box clearfix">
      <form>
        <div class="field is-horizontal">
          <div class="field-body">
            <div class="field">
              <input type="text" class="input" placeholder="titulo" v-model="tarea.titulo">
            </div>
            <div class="field">
              <input type="text" class="input" placeholder="descripcion" v-model="tarea.descripcion">
            </div>
          </div>
          
        </div>
        <div>
          <button class="button is-primary" @click.prevent="agregarTarea">Agregar</button>
        </div>
      </form>
    </div>
    <div class="tareas columns">
      <div class="panel lista no-completadas column">
        <p class="panel-heading">Tareas Pendientes</p>
        <div class="panel-block tarea pendiente" v-for="tarea in noCompletadas">
            <div>
              <p>{{ tarea.titulo }}</p>
              <p>{{ tarea.descripcion }}</p>
            </div>
            <div class="is-pulled-right">
              <button class="button is-link " @click.prevent="completarTarea(tarea)">Completar</button>
            </div>
            
        </div>
        
      </div>
      <div class="panel column lista completadas">
        <h4 class="panel-heading">Tareas Completadas</h4>
        <TareaCompletada v-for="tarea in completadas" :tarea="tarea"/>
        
      </div>
    </div>
  </div>
</template>

<script>
import TareaCompletada from './components/TareaCompletada'

export default {
  name: 'app',
  data() {
    return {
      tarea: {
        titulo: '',
        descripcion: ''
      },
      noCompletadas: [],
      completadas: []
    }
  },
  methods: {
    agregarTarea() {
      this.tarea.id = new Date().getTime() // instante actual
      this.noCompletadas.unshift(this.tarea)
      this.tarea = {
        titulo: '',
        descripcion: ''
      }
    },
    completarTarea(t) {
      this.noCompletadas = this.noCompletadas.filter(function(item) {
        return item.id != t.id
      })
      this.completadas.unshift(t)
    }
  },
  components: {
    TareaCompletada
  }
}
</script>

<style lang="sass">
</style>
