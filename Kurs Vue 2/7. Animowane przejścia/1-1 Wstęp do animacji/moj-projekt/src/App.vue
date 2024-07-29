<template>
  <div id="app">
    <h1>Transition</h1>
    <button class="btn btn-primary"  @click="display = !display">Przełącz</button>
    <hr>
    <transition name="fade" mode="out-in">
      <div class="alert alert-success" key="1" v-if="display">
      Witaj!
    </div>
    <div class="alert alert-info" key="2" v-else>
      Witaj!
    </div>
    </transition>
  </div>
</template>

<script>


export default {
  name: "App",
    data:() => ({
      display: false
    })
}
  
</script>
  
<style>
  #app {
  padding: 20px;
}

.fade-enter-active {
  transition: opacity 0.5s;
}

.fade-leave-active {
  transition: opacity 1s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
