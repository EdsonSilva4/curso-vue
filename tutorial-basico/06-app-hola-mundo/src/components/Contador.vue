<template>
  <div>
    <p>Conteo de clicks {{contador}}</p>
    <button @click="aumentar">Subir Contador</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      contador: 0
    }
  },
  methods: {
    aumentar() {
      this.contador++;
    }
  }
}
</script>

<style>

</style>
