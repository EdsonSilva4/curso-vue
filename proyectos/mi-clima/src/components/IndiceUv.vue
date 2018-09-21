<template>
  <div style="display: block">
    <div style="display: inline-block" v-for="i in indiceUv">
      <img width="50" height="50" src="@/assets/sol.png" alt="">
    </div> 
  </div>
</template>

<script>
  export default {
    props: {
      indiceUv: {
        type: Number,
        required: true
      }
    }
  }
</script>

<style scoped>

</style>