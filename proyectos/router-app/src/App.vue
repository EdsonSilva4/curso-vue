<!-- Este es el componente raiz de nuestra aplicacion, a traves de el se
renderizan los demas componentes-->

<template>
<div id="app" class="container">
  <AppHeader> </AppHeader>
  <router-view />

</div>
</template>

<script>

// Importamos el componente del menu de la app, desde su ruta en nuestro proyecto.
import appHeader from './components/appHeader.vue';


export default {
  name: 'App',
  components: {
    AppHeader: appHeader
  }
}
</script>
