import Vue from 'vue'
import App from './App.vue'
import GlobalButton from './components/GlobalButton.vue'

Vue.config.productionTip = false


Vue.component('global-button', GlobalButton);

new Vue({
  render: h => h(App),
}).$mount('#app')
