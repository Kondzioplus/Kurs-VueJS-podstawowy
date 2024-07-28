import Vue from 'vue'
import App from './App.vue'


Vue.config.productionTip = false
Vue.filter('readablePrice', function(value){
  return value.toFixed(2) +' PLN';
});
Vue.filter('VAT', function(value){
  return (value* .23).toFixed(2) + ' PLN';
});
Vue.filter('reverse', function(value){
  return value.split('').reverse().join('');
});

export const eventBus = new Vue();

new Vue({
  render: h => h(App),
}).$mount('#app')
