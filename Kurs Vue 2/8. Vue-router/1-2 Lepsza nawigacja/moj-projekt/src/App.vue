<template>
  <div id="app">
    <TheNavigation></TheNavigation>
    <transition name="slide" mode="out-in" appear>
      <router-view/>
    </transition>
    
  </div>
</template>

<script>
import TheNavigation from './components/TheNavigation';

  export default {
    components: {
      TheNavigation
    }
  }

</script>

<style>
 #app{
    padding:20px;
  }

  .slide-enter-active, .slide-leave-active{
    transition: all 1s;
  }

  .slide-enter, .slide-leave-to{
    opacity: 0;
    transform: translateX(30px);
  }

  .slide-move{
    transition: transform 1s;
  }

  .slide-leave-active{
    position: absolute;
    width: 100%;
  }
</style>
