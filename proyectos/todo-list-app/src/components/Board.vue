<template>
  <div>
    <pipeline f-for="pipeline in pipelines" :valor="pipeline" />
  </div>
</template>

<script>
  export default {
    data() {
      return {
        pipelines: [],
        nuevoPipeline: {
          titulo: '',
          tareas: []
        }
      }
    },
    methods: {
      agregarPipeline() {
        this.pipelines.push(this.nuevoPipeline)
        this.nuevoPipeline = {
          titulo: '', tareas: []
        }
      }
    }
  }
</script>

<style scoped>

</style>