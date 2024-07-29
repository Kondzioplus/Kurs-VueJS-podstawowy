<template>
  <!-- eslint-disable -->
  <div id="app">
    <h1>Transition</h1>
    
    Dodaj imię: <input type="text" v-model="newName" @keyup.enter="addName">
    <hr>
    
      <transition-group name="slide" tag="ul" class="list-group">
        <li 
      class="list-group-item" 
      @click="names.splice(index, 1)"
      :key="name"
      v-for="(name, index) in names">{{ name }}</li>
      </transition-group>
    
</div>
</template>

<script>
/* eslint-disable */

export default {
  name: "App",
    data:() => ({
      names: ['Konrad', 'Adriana', 'Tomasz', 'Teresa', 'Patrycja', 'Bartłomiej', 'Adam'],
      newName: '',
    }),
    methods: {
      addName(){
        if(this.newName.trim() === "" || this.names.filter(v => v.toLowerCase() == (this.newName.trim().toLowerCase())).length >= 1)
        return;

        const pos = Math.floor(Math.random()* this.names.length);
        this.names.splice(pos, 0, this.newName.trim());
        this.newName = '';
      }
    },
   }

  
</script>
  
<style>
  #app {
  padding: 20px;
}

  .slide-enter-active, .slide-leave-active {
    transition: 0.87s;
  }

  .slide-enter, .slide-leave-to {
    opacity: 0;
    transform: translateX(30px);
  }

  .slide-move {
    transition: transform 1s;
  }

  .slide-leave-active {
    position: absolute;
    width: 100%;
  }
</style>
