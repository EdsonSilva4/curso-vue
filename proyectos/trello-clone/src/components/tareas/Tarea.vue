<template>
  <div class="card mb-10 tarea" @dblclick="editarTarea">
    <div class="card-content">
      <div class="content">
        {{ tarea.titulo }}
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    props: {
      tarea: {
        type: Object,
        required: true
      }
    },
    methods: {
      /**
       * Emite un evento global para avisar que el usuario quiere editar una tarea
       */
      editarTarea () {
        this.$root.$emit('editartarea', this.tarea)
      }
    }
  }
</script>

<style scoped>
  .mb-10 {
    margin-bottom: 10px;
  }
  .tarea {
    cursor: pointer;
  }
</style>