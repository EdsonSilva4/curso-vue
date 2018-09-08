<template>
  <div>
    <form class="form" @submit.prevent="guardar">
      <div class="field">
        <div class="control">
          <span class="label">Título</span>
          <input type="text" placeholder="Titulo de la tarea" v-model="tareaInterna.titulo">
        </div>
      </div>
      <div class="field">
        <div class="control">
          <span class="label">Descripcion</span>
          <textarea class="textarea" v-model="tareaInterna.descripcion" placeholder="Descripción de la tarea"></textarea>
        </div>
      </div>
      <div class="field">
        <div class="control is-pulled-right">
          <button type="submit" class="button is-success">Guardar</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        // tareaInterna es una copia de la tarea que me permite cancelar cualquier edicion a los datos
        tareaInterna: {
          titulo: '',
          descripcion: ''
        }
      }
    },
    props: {
      tarea: {
        type: Object,
        required: true
      }
    },
    mounted () {
      /**
       * esto me permite poner en tareaInterna la tarea seleccionada para editar al momento en que
       * es cambiada en este componente. 
       */
      this.tareaInterna = this.tarea
    },
    methods: {
      /**
       * Copia la información temporal de "tareaInterna" hacia tarea.
       */
      guardar () {
        this.tarea.titulo = this.tareaInterna.titulo
        this.tarea.descripcion = this.tareaInterna.descripcion
      }
    }
  }
</script>

<style scoped>

</style>