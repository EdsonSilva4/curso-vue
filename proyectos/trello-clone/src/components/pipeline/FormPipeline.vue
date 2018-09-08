<template>
  <div class="panel">
    <div class="panel-block">
      <a class="button" v-show="!mostrarFormulario" @click.prevent="toggleMostrarFormulario">
        + Agregar una lista
      </a>
      <form class="form" @submit.prevent="agregarPipeline" v-show="mostrarFormulario">
        <div class="field">
          <div class="control">
            <span class="label">Título</span>
            <input type="text" class="input" v-model="tituloPipeline" placeholder="Nueva Lista">
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
        tituloPipeline: ''
      }
    },
    methods: {
      /**
       * aviso a los componentes externos que el usuario desea agregar un pipleine
       * y limpio el formulario
       */
      agregarPipeline () {
        this.$emit('crearPipeline', { titulo: this.tituloPipeline })
        this.reset()
      },
      /**
       * Esconde o muestra el formulario
       */
      toggleMostrarFormulario () {
        this.mostrarFormulario = !this.mostrarFormulario
      },
      /**
       * Limpia y esconde el formulario
       */
      reset () {
        this.tituloPipeline = ''
        this.mostrarFormulario = false
      }
    }
  }
</script>

<style scoped>

</style>