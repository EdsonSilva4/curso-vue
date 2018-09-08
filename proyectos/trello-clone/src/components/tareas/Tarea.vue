<template>
  <div class="card mb-10">
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
    }
  }
</script>

<style scoped>
  .mb-10 {
    margin-bottom: 10px;
  }
</style>