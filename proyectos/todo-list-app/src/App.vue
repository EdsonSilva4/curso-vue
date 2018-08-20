<template>
  <div id="app">
    <div class="formulario box clearfix">
      <FormularioTarea @agregar-tarea="agregarTarea"/>
    </div>
    <div class="tareas columns">
      <div class="panel lista no-completadas column">
        <p class="panel-heading">Tareas Pendientes</p>
        <Tarea v-for="tarea in noCompletadas" :tarea="tarea" @completar-tarea="completarTarea" />
        
      </div>
      <div class="panel column lista completadas">
        <h4 class="panel-heading">Tareas Completadas</h4>
        <Tarea v-for="tarea in completadas" :tarea="tarea"/>
        
      </div>
    </div>
  </div>
</template>

<script>
// import TareaCompletada from './components/TareaCompletada'
// import TareaNoCompletada from './components/TareaNoCompletada'
import Tarea from './components/Tarea'
import FormularioTarea from './components/FormularioTarea'

export default {
  name: 'app',
  data() {
    return {
      noCompletadas: [],
      completadas: []
    }
  },
  methods: {
    agregarTarea(tarea) {
      this.noCompletadas.unshift(tarea)
    },
    completarTarea(t) {
      t.completada = true
      this.noCompletadas = this.noCompletadas.filter(function(item) {
        return item.id != t.id
      })
      this.completadas.unshift(t)
    }
  },
  components: {
    Tarea,
    FormularioTarea
  }
}
</script>

<style lang="sass">
</style>
