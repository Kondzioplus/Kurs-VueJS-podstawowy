<template>
  <!-- eslint-disable -->
  <div id="app">
    <h1>Zadanie #7</h1>
    <ul class="nav nav-tabs">
      <li :class="{active: cmp === 'TheHome'}" @click="cmp = 'TheHome'"><a href="#">Home</a></li>
      <li :class="{active: cmp === 'TheSecretForm'}" @click="cmp = 'TheSecretForm'"><a href="#">Secret form</a></li>
      <li :class="{active: cmp === 'ThePublicForm'}" @click="cmp = 'ThePublicForm'"><a href="#">Public form</a></li>
    </ul>
    
    <transition name="slide" mode="out-in">
     <keep-alive include="PublicInfo">
      <component :is="cmp"></component>
     </keep-alive>
    </transition>

  </div>
</template>

<script>
// eslint-disable
  import TheHome from './components/TheHome'
  import ThePublicForm from './components/ThePublicForm'
  import TheSecretForm from './components/TheSecretForm'

  export default {
    name: 'app',
    data: () => ({
        cmp: 'TheHome',
    }),
    components:{
      TheHome,
      ThePublicForm,
      TheSecretForm
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