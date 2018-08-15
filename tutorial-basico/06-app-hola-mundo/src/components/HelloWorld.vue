<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>Hoy es {{ dia }}</p>
    <button @click="decirHola">Saludar</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      dia: 'lunes'
    }
  },
  methods: {
    decirHola () {
      alert(this.saludito);
    }
  },
  props: {
    msg: String,
    saludito: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
