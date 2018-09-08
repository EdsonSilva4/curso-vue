<template>
  <div class="esquema is-fullheight">
    <navegacion/>
    <div class="cuerpo section">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import Navegacion from './Navegacion'

export default {
  components: {
    Navegacion
  }  
}
</script>

<style scoped>
  
</style>