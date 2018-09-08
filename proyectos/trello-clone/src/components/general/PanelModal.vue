<template>
  <div :class="{ 'is-active': activo }" class="modal">
    <div class="modal-background"></div>
    <div class="modal-content card section">
      <!-- Acá puede haber cualquier contenido -->
      <slot></slot>
    </div>
    <button class="modal-close is-large" aria-label="close" @click="cerrar"></button>
  </div>
</template>

<script>
  export default {
    props: {
      activo: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      cerrar () {
        this.$emit('cerrar')
      }
    }
  }
</script>

<style scoped>

</style>