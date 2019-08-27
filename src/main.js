import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

require('tailwindcss/dist/tailwind.css');

new Vue({
  render: h => h(App),
}).$mount('#app')
