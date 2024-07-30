<template>
  <div class="author">
    <h1>Młody programista VueJS - {{ name }}</h1>
    <button class="btn btn-success" @click="backToHome">Wróc na stronę główną</button>
  </div>
</template>

<script>
/* eslint-disable */
  export default {
    /*data(){
      return {
        name: this.$route.params.name
      };
    },
    watch: {
      '$route'(to, from){
        this.name = to.params.name;
      }
    },*/
    props:{
      name: {
        type: String,
      }
    },

    methods: {
      backToHome() {
        // this.$router.push('/')
        this.$router.replace({name: 'home'});
      }
    }
  }
</script>