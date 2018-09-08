<template>
  <div class="column">
    <div class="field" v-show="!mostrarFormulario">
      <div class="control">
        <button class="button is-link is-outlined is-fullwidth"  @click.prevent="toggleMostrarFormulario">
          + Agregar tarea
        </button>
      </div>
    </div>
    <div v-show="mostrarFormulario">
      <form @submit.prevent="agregarTarea">
        <div class="field">
          <div class="control">
            <input class="input" v-model="tituloTarea" placeholder="Tarea">
          </div>
        </div>
        <div class="field is-grouped">
          <div class="control">
            <button class="button is-primary" type="submit">Crear</button>
          </div>
          <div class="control" >
            <button class="button is-text" @click.prevent="reset()">Cancelar</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        mostrarFormulario: false,
        tituloTarea: ''
      }
    },
    methods: {
      toggleMostrarFormulario () {
        this.mostrarFormulario = !this.mostrarFormulario
      },
      agregarTarea () { 
        this.$emit('crearTarea', { titulo: this.tituloTarea })
        this.reset()
      },
      reset() {
        this.mostrarFormulario = false,
        this.tituloTarea = ''
      }
    }
  }
</script>

<style scoped>

</style>