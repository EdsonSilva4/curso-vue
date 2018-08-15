<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Contador />
    <HelloWorld saludito="hola" msg="Hola mundo en vivo!"/>
    <HelloWorld saludito="chau" msg="Chau mundo"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Contador from './components/Contador'

export default {
  name: 'app',
  components: {
    HelloWorld,
    Contador
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
  margin-top: 120px;
}
</style>
