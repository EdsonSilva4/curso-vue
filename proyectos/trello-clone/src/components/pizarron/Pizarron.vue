<template>
  <div>
    <form-pizarron :pizarron="pizarron"/>
    <div class="columns">
      <div class="column is-one-quarter-desktop is-half-tablet" v-for="(pipeline, index) in pizarron.pipelines" :key="index">
        <pipeline :datos="pipeline" />
      </div>
      <div class="column is-one-quarter-desktop is-half-tablet">
        <form-pipeline @crearPipeline="crearPipeline"/>
      </div>
    </div>
  </div>
</template>

<script>
  import FormPizarron from './FormPizarron.vue'
  import Pipeline from '@/components/pipeline/Pipeline.vue'
  import FormPipeline from '@/components/pipeline/FormPipeline.vue'

  export default {
    data() {
      return {
        pizarron: {
          titulo: 'Mi Pizarrón',
          pipelines: []
        }
      }
    },
    methods: {
      crearPipeline(pipeline) {
        this.pizarron.pipelines.push({
          titulo: pipeline.titulo,
          items: []
        })
      }
    },
    components: {
      FormPizarron,
      Pipeline,
      FormPipeline
    }
  }
</script>

<style scoped>

</style>