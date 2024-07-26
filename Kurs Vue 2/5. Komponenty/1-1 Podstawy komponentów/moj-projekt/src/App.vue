<template>
  <div id="app">

    <global-button></global-button>
    <RoundedButton></RoundedButton>
    
  </div>
</template>

<script>
import RoundedButton from './components/roundedButton.vue';

  export default {
    name: 'app',
    components: {
      RoundedButton
    },
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
