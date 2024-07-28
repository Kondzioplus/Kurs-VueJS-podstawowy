<template>
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
  </div>
</template>

<script>


export default {
  name: "App",
  components: {
    
  },
  data: () => ({
    text: 'Cześć jestem Konrad!',
    cost: 152.99347565,
    names: [
      'Konrad', 'Adriana', 'Patrycja', 'Bartłomiej'
    ],
    filterName: '',
  }),
  computed:{
      filteredNames(){
        return this.names.filter(v => v.match(this.filterName));
      }
    },
  filters: {
    upperCase(value){
      return value.toUpperCase();
    }
  }
}
  
</script>
  
<style>
  #app {
  padding: 20px;
}
</style>
