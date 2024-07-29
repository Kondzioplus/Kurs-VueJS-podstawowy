<template>
  <!-- eslint-disable -->
  <div id="app">
    <h1>Transition</h1>
    <button class="btn btn-primary"  @click="display = !display">Przełącz</button>
    <hr>
    <transition
    :css="false"
    @before-enter="beforeEnter"
    @enter="enter"
    @after-enter="afterEnter"
    @enter-cancelled="enterCancelled"

    @before-leave="beforeLeave"
    @leave="leave"
    @after-leave="afterLeave"
    @leave-cancelled="leaveCancelled"
    >
      <div class="alert alert-success" style="display: inline-block;" v-if="display">
      Witaj!
    </div>
    </transition>
</div>
</template>

<script>
/* eslint-disable */

export default {
  name: "App",
    data:() => ({
      display: false,
      
    }),
   methods: {
    beforeEnter(el){
      el.style.opacity = 0;
    },
    enter(el, done){
      Velocity(el, 
      { opacity: 1, fontSize: '1.45em' },
      { duration: 300 }
    );
      Velocity(el, 
      { fontSize: '1em' },
      { complete: done }
    );
    },
    afterEnter(el){

    },
    enterCancelled(el){

    },
    beforeLeave(el){

    },
    leave(el, done){
      Velocity(el, 
        { translateX: '20px', rotateZ: '50deg'},
        { duration: 600 },
      );

      Velocity(el, 
        { rotateZ: '100deg'},
        { loop: 2 },
      );

      Velocity(el, 
        { translateY: '30px', translateX: '30px', rotateZ: '45deg', opacity: 0 },
        { complete: done },
      );
      
    },
    afterLeave(el){

    },
    leaveCancelled(el){

    },
   },
}
  
</script>
  
<style>
  #app {
  padding: 20px;
}

</style>
