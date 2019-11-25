import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

require('tailwindcss/dist/tailwind.css');

window.onbeforeunload = confirmExit;
function confirmExit() {
		return "Sicher?";
}

new Vue({
  render: h => h(App),
}).$mount('#app')
