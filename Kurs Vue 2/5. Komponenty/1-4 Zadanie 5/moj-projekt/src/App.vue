<template>
  <!-- eslint-disable --> 
  <div id="app">
    <TheAddChampionPanel @add="champions.push($event)" :names="namesList"></TheAddChampionPanel>
    <AboutChampionPanel v-for="champion in champions" 
                        :name="champion.name"
                        :pseudo="champion.pseudo"
                        :hp="champion.hp"
                        :mp="champion.mp"
                        :key="champion.name"
                        @remove="remove"></AboutChampionPanel>

  </div>
</template>

<script>
import TheAddChampionPanel from './components/TheAddChampionPanel';
import AboutChampionPanel from './components/AboutChampionPanel';
  export default {
    name: 'app',
    components: {
      TheAddChampionPanel,
      AboutChampionPanel
    },
    data: () => ({
      champions:[
        {
          name: 'Lux',
          pseudo: 'the Light',
          hp: 120,
          mp: 890
        },
        {
          name: 'Macho',
          pseudo: 'the Strong',
          hp: 690,
          mp: 80
        }
      ]
    }),
    methods: {
      remove(name){
        const index = this.champions.findIndex(v => v.name == name);
        this.champions.splice(index, 1);
      }
    },
    computed: {
      namesList() {
        return this.champions.map(v => v.name)
      }
    }
  }
</script>

<style>
  #app{
    padding:20px;
  }
</style>