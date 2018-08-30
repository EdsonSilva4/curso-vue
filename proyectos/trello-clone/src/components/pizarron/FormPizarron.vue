<template>
  <div>
    <!-- Muestra el titulo del pizarron si no estamos en modoEdicion  -->
    <div v-show="!modoEdicion" @click="cambiarModoEdicion">
      {{ pizarron.titulo }}
    </div>
    <!-- Permite editar el titulo del pizarron si estamos en modoEdicion -->
    <div v-show="modoEdicion">
      <form @submit.prevent="actualizar">
        <input type="text" v-model="titulo">
        <!-- Boton para guardar cambios-->
        <button type="submit" class="button primary">Guardar</button> 
        <!-- Boton para cancelar -->
        <button type="button" class="button error" @click.prevent="cancelar">Cancelar</button>
      </form>
      
    </div>
    
  </div>
</template>

<script>
  export default {
    props: {
      pizarron: {
        type: Object,
        required: true 
      },
    },
    data() {
      return {
        titulo: '',
        modoEdicion: false
      }
    },
    methods: {
      /**
       * cambia el valor de modoEdicion a su opuesto
       */
      cambiarModoEdicion () {
        this.modoEdicion = !this.modoEdicion
      },
      /**
       * Cancela la acción de edicion, sin hacer cambios en el pizarron
       */
      cancelar () {
        this.titulo = this.pizarron.titulo
        this.cambiarModoEdicion()
      },
      /**
       * actualiza el titulo del pizarron.
       */
      actualizar () {
        this.pizarron.titulo = this.titulo
        this.cambiarModoEdicion()
      }

    },
    mounted () {
      this.titulo = this.pizarron.titulo
    }
  }
</script>

<style scoped>

</style>