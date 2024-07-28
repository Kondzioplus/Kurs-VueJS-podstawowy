<template>
  <!-- eslint-disable -->
  <div id="app">
    <ul class="nav nav-tabs">
      <li :class="{ active: component === 'PageHome'}" @click="component = 'PageHome'"><a href="#">Home</a></li>
      <li :class="{ active: component === 'PageSum'}" @click="component = 'PageSum'"><a href="#">Suma liczb</a></li>
      <li :class="{ active: component === 'PageAuthor'}" @click="component = 'PageAuthor'"><a href="#">Author</a></li>
    </ul>

    <Keep-alive>
      <component :is="component"></component>
    </Keep-alive>
  </div>
</template>

<script>
/* eslint-disable */ 
import PageAuthor from './components/PageAuthor';
import PageHome from './components/PageHome';
import PageSum from './components/PageSum';

export default {
  name: "App",
  components:{
      PageHome,
      PageSum,
      PageAuthor
    },
  data: () => ({
    component: 'PageHome'  // initial component
  })
}
  
</script>
  
<style>
  #app {
  padding: 20px;
}
</style>
