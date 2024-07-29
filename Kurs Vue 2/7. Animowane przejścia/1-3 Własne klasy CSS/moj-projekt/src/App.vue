<template>
  <!-- eslint-disable -->
  <div id="app">
    <h1>Transition</h1>
    <button class="btn btn-primary"  @click="display = !display">Przełącz</button>
    <select v-model="entryAnimation" class="form-control">
      <option>rollIn</option>
      <option>lightSpeedIn</option>
      <option>bounceIn</option>
    </select>
    <hr>
    <transition name="my-unique-super-name"
    :duration="{ enter: 1000, leave: 2500 }"
    :enter-active-class="entryClasses"
    leave-active-class="animated rotateOutUpRight">
      <div class="alert alert-success" v-show="display">
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
      entryAnimation: 'bounceIn',
    }),
    computed:{
      entryClasses(){
        return 'animated ' + this.entryAnimation;
      }
    }
}
  
</script>
  
<style>
  #app {
  padding: 20px;
}

.animated{
  animation-duration: 3s;
}
</style>
