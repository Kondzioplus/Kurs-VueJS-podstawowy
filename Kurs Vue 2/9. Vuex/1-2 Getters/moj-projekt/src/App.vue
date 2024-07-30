<template>
  <!-- eslint-disable -->
  <div id="app">
    <h1>{{gameName}}</h1>
    <ul class="list-group">
      <li class="list-group-item active">Postać <b>{{user.name}}</b></li>
      <li class="list-group-item">Siła: <b>{{user.strength}}</b></li>
      <li class="list-group-item">Szybkość: <b>{{user.speed}}</b></li>
      <li class="list-group-item">Zręczność: <b>{{user.dextertity}}</b></li>
      <li class="list-group-item">Odporność: <b>{{user.resistance}}</b></li>
    </ul>

    <div class="panel panel-info">
      <div class="panel-heading">
        Przedmioty
      </div>
      <ul class="list-group">
        <li class="list-group-item active">Nazwa przedmiotu (Cena)</li>
        <li class="list-group-item" v-for="(item, index) in items" :key="index">{{ item.name }} {{ item.price }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex';
  import {mapGetters} from 'vuex';

  export default {
    computed: {
      ...mapState(['user']),
      ...mapGetters({
        items: 'getValuableItems',
      })
      },
      gameName(){
        return this.$store.state.gameName;
      },
     /* items(){
        return this.$store.getters['getValuableItems'];
      }
    }*/
  };
</script>

<style>
body{
background: #6190E8;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #A7BFE8, #6190E8);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #A7BFE8, #6190E8); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

}
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