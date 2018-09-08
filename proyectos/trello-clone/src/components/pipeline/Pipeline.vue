<template>
  <div class="panel">
    <div class="panel-heading">
       {{ datos.titulo}}
       <a class="is-pulled-right" @click.prevent="confirmarEliminar">
         <span class="panel-icon has-text-danger">
           <i class="fas fa-trash "></i>
         </span>
       </a>
    </div>
    <div class="panel-block column">
      <draggable class="dragArea" :list="datos.tareas" :options="{ group: 'tareas' }">
        <tarea v-for="tarea in datos.tareas" :key="tarea.titulo" :tarea="tarea"/>
      </draggable>
    </div>
    <div class="panel-block">
      <form-tarea @crearTarea="crearTarea" />
    </div>
  </div>
</template>

<script>
  import draggable from 'vuedraggable'

  import FormTarea from '../tareas/FormTarea.vue'
  import Tarea from '../tareas/Tarea.vue'
  export default {
    props: {
      datos: {
        type: Object,
        required: true
      }
    },
    methods: {
      /**
       * crea una tarea nueva a partir de datosTarea
       * @param {Object} datosTarea un objeto que contiene el titulo de la tarea
       */
      crearTarea (datosTarea) {
        this.datos.tareas.push({
          titulo: datosTarea.titulo,
          descripcion: ''
        })
      },
      /**
       * Pide al usuario confirmacion para eliminar este pipeline. 
       */
      confirmarEliminar () {
        var confirma = window.confirm('Estás seguro de borrar esta lista? (todas las tareas en la lista se perderán')
        if (confirma) {
          this.eliminar()
        }
      },
      /**
       * Emite el evento "eliminar" para este pipeline, provocando que el pizarron lo borre
       */
      eliminar () {
        this.$emit('eliminar', this.datos)
      }
    },
    components: {
      'form-tarea': FormTarea,
      'tarea': Tarea,
      'draggable': draggable
    }
  }
</script>

<style scoped>
  .dragArea {
    min-height: 20px;
  }
</style>