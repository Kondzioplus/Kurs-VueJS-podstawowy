<template>
    <div>
        <h1>{{ title }}</h1>
     
     <input v-model="filterName">
     <ul>
      <li v-for="(name, index) in filteredNames" :key="index">{{ name }}</li>
     </ul>
    </div>
  </template>
  
  <script>
  import NameMixin from './names.js';
  
  export default {
    name: "App",
    mixins: [NameMixin],
    data: () => ({
        title: 'Hello World!',
        filterName: 'Konr',
    })
   
  }
    
  </script>
    
  <style>
    #app {
    padding: 20px;
  }
  </style>
  