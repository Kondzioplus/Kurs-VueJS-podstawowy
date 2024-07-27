<template>
  <div id="app">
    <PlayerCharacter></PlayerCharacter>
  </div>
</template>

<script>
import PlayerCharacter from "./components/PlayerCharacter"

  export default {
    name: 'app',
    components: {
      PlayerCharacter
    }
    
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
