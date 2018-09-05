// Es muy importante declarar los componentes (y sus rutas de acceso) que
//necesitamos importar para que el router de nuestra aplicacion funcione
//correctamente.
import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import categoria from '@/components/categoria/categoria.vue'
import productos from '@/components/productos/productos.vue'
import appHeader from '@/components/appHeader'

//Declaramos que vamos a utilizar el router en nuestra instancia de Vue
Vue.use(Router)

//Acá definimos las rutas que deberan colocar en el navegador para acceder
// a nuestros componentes, el componente al que se accede y un nombre de acceso
//para dicho componente.

export default new Router({
  routes: [{
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/categoria',
      name: 'categoria',
      component: categoria
    },
    {
      path: '/productos',
      name: 'productos',
      component: productos
    },

  ]
})
