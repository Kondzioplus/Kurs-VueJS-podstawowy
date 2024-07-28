<template>
  <div id="app">
    {{ color }}
    <CustomControl v-model="color"></CustomControl>   
  </div>
</template>

<script>
import CustomControl from "./components/CustomControl";

  export default {
    name: 'app',
    components: {
      CustomControl
    },
    data: () => ({
      color: '#428bca'
    })
  }
  
</script>

<style>
#app {
  padding: 20px;
}
</style>
