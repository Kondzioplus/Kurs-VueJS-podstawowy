<template>
  <div class="author">
    <h1>Młody programista VueJS - {{ name }}</h1>
    <button class="btn btn-success" @click="redirect('Konrad')">Konrad</button> &nbsp;
    <button class="btn btn-success" @click="redirect('Adam')">Adam</button>
    <hr>
    <router-view></router-view>
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
   

    methods: {
      redirect(name){
        this.$router.push('/author/' + name)
      }
    }
  }
</script>

<style scoped>
  .author{
    margin-top: 20px;
  }
</style>