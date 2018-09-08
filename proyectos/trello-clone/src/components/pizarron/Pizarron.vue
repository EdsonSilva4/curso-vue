<template>
  <div>
    <form-pizarron :pizarron="pizarron"/>
    <div class="columns">
      <div class="column is-one-quarter-desktop is-half-tablet" v-for="(pipeline, index) in pizarron.pipelines" :key="index">
        <!-- Pipeline. el evento eliminar se maneja con eliminarPipeline -->
        <pipeline :datos="pipeline" @eliminar="eliminarPipeline"/>
      </div>
      <div class="column is-one-quarter-desktop is-half-tablet">
        <form-pipeline @crearPipeline="crearPipeline"/>
      </div>
    </div>
    <panel-modal :activo="mostrarEdicionTarea" @cerrar="cerrarPanelEdicionTarea">
        <editar-tarea :tarea="tareaSeleccionada" v-if="tareaSeleccionada != null"></editar-tarea>
    </panel-modal>
    
  </div>
</template>

<script>
  import FormPizarron from './FormPizarron.vue'
  import Pipeline from '@/components/pipeline/Pipeline.vue'
  import FormPipeline from '@/components/pipeline/FormPipeline.vue'
  import EditarTarea from '@/components/tareas/EditarTarea.vue'
  import PanelModal from '@/components/general/PanelModal.vue'

  export default {
    data() {
      return {
        pizarron: {
          titulo: 'Mi Pizarrón',
          pipelines: [{
            titulo: 'Ejemplo',
            tareas: [
              {
                titulo: 'Tarea 1',
                descripcion: 'Descripcion de la tarea 1'
              },
              {
                titulo: 'Tarea 2',
                descripcion: 'Descripcion de la tarea 2'
              }
            ]
          }]
        },
        tareaSeleccionada: null,
        mostrarEdicionTarea: false
      }
    },
    methods: {
      /**
       * maneja el evento crearPipeline agregando un pipleine vacio al final de la lista del pizarron
       */
      crearPipeline(pipeline) {
        this.pizarron.pipelines.push({
          titulo: pipeline.titulo,
          tareas: []
        })
      },
      /**
       * Elimina la pipeline del pizarron
       */
      eliminarPipeline (pipeline) {
        // obtengo el indice del pipeline
        var indicePipeline = this.pizarron.pipelines.indexOf(pipeline)
        // borro el pipeline segun su indice
        this.pizarron.pipelines.splice(indicePipeline, 1)
      },
      /**
       * pone *tarea* como tareaSeleccionada
       */
      seleccionarTarea (tarea) {
        this.tareaSeleccionada = tarea
        this.mostrarEdicionTarea = true
      },
      cerrarPanelEdicionTarea () {
        this.mostrarEdicionTarea = false
        this.tareaSeleccionada = null
      }
    },
    created () {
      this.$root.$on('editartarea', this.seleccionarTarea)
    },
    computed: {
      mostrarPanelEdicion () {
        return this.tareaSeleccionada != null 
      }
    },
    components: {
      FormPizarron,
      Pipeline,
      FormPipeline,
      EditarTarea,
      PanelModal
    }
  }
</script>

<style scoped>

</style>