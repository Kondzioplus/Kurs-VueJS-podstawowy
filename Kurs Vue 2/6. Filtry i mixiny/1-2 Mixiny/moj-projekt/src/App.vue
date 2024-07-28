<template>
  <!-- eslint-disable -->
  <div id="app">
   {{ text }}
   <hr>
   {{ text | upperCase }}
   <hr>
   {{ text | reverse | upperCase | reverse }}
   <hr>
   Bez filtra: {{ cost }} PLN
   <hr>
   Z filtrem: {{  cost | readablePrice }}
   <hr>
   VAT: {{ cost | VAT }}
   <hr>
   <input v-model="filterName">
   <ul>
    <li v-for="(name, index) in filteredNames" :key="index">{{ name }}</li>
   </ul>
   <hr>
   <NewComp></NewComp>
  </div>
</template>

<script>
import NewComp from './NewComp';
import NameMixin from './names.js';
export default {
  name: "App",
  mixins: [NameMixin],
  data: () => ({
    text: 'Cześć jestem Konrad!',
    cost: 152.99347565,
    
    
  }),
  
  filters: {
    upperCase(value){
      return value.toUpperCase();
    }
  },
  components: {
    NewComp
  },
  created(){
        console.log('Jestem w App.vue!!!');
      }
}
  
</script>
  
<style>
  #app {
  padding: 20px;
}
</style>
