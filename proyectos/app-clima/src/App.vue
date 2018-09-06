<template>
  <div id="app">
    <google-apis></google-apis>
  </div>
</template>

<script>
import GoogleApis from '@/playground/google-apis'

export default {
  name: 'app',
  components: {
    'google-apis': GoogleApis
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
