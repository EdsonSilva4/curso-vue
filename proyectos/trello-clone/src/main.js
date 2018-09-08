import Vue from 'vue'
import App from './App.vue'

import './sass/index.sass'
import '@fortawesome/fontawesome-free/css/all.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
