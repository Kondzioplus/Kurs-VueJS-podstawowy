<template>
  <div id="app">
    <BootstrapPanel>
      <template slot-scope="{ superhero }">
        <template slot="header">Hej!!!</template>
      Hej co słychać?
      {{ color }} {{ superhero }}
      </template>
    </BootstrapPanel>
  </div>
</template>

<script>
import BootstrapPanel from "./components/BootstrapPanel";

export default {
  name: "App",
  components: {
    BootstrapPanel
  },
  data: () => ({
    color: 'niebieski',
  })
}
  
</script>
  
<style>
  #app {
  padding: 20px;
}
</style>
