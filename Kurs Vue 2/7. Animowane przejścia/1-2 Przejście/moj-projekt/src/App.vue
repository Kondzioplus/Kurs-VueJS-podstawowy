<template>
  <!-- eslint-disable -->
  <div id="app">
    <h1>Transition</h1>
    <button class="btn btn-primary"  @click="display = !display">Przełącz</button>
    <hr>
    <transition name="fade" mode="out-in" appear>
      <div class="alert alert-success" key="1" v-if="display">
      Witaj!
    </div>
    <div class="alert alert-info" key="2" v-else>
      Witaj!
    </div>
    </transition>
    <hr>
    <h1>Transition</h1>
    <button class="btn btn-primary"  @click="anim = !anim">Przełącz</button>
    <hr>
    <transition name="fade-bounce" mode="out-in" type="transition">
      <div class="alert alert-warning" key="1" v-if="anim">
      Witaj!
    </div>
    <div class="alert alert-danger" key="2" v-else>
      Witaj!
    </div>
    </transition>
  </div>
</template>

<script>


export default {
  name: "App",
    data:() => ({
      display: false,
      anim: false,
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

.fade-bounce-enter,
.fade-bounce-leave-to {
  opacity: 0;
}

.fade-bounce-enter-active {
  animation: bounce-in 2s;
  transition: opacity 2s;
}

.fade-bounce-leave-active {
  animation: bounce-out 2s reverse;
  transition: opacity 2s;
}

@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
</style>
