<template>
<div class="hello">
  <h1> Esta es la pagina de lista de productos </h1>
  <appProducto v-for="producto in productos"></appProducto>
</div>
</template>

<script>
import producto from './producto';
export default {
  data() {
    return {
      productos: [{
          id: 1,
          nombre: 'celular samsung',
          precio: '300'
        },
        {
          id: 2,
          nombre: 'celular apple',
          precio: '800'
        },
        {
          id: 3,
          nombre: 'celular nokia',
          precio: '80'
        },
      ]
    }
  },

  components: {
    appProducto: producto
  }
}
</script>
