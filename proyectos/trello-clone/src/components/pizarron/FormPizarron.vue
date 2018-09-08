<template>
  <div>
    <!-- Muestra el titulo del pizarron si no estamos en modoEdicion  -->
    <div v-show="!modoEdicion" @click="cambiarModoEdicion" class="clickable" title="Cambiar Título">
      <h3 class="title is-3">{{ pizarron.titulo }}</h3>
     
    </div>
    <!-- Permite editar el titulo del pizarron si estamos en modoEdicion -->
    <div v-show="modoEdicion">
      <form @submit.prevent="actualizar">
        <div class="field has-addons">
          <div class="control">
            <input class="input" type="text" v-model="titulo">
          </div>
          <div class="control">
            <!-- Boton para guardar cambios-->
            <button type="submit" class="button is-success" title="Guardar">
              <i class="fas fa-save"></i>
            </button> 
          </div>
          <div class="control">
            <!-- Boton para cancelar -->
            <button type="button" class="button" @click.prevent="cancelar" title="Cancelar">
              <i class="fas fa-undo"></i>
            </button>
          </div>
        </div>
        
        
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