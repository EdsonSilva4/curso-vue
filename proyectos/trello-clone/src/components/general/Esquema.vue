<template>
  <div>
    <navegacion/>
    <div class="cuerpo">
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