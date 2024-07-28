<template>
    <div class="col-md-6">
        <div class="panel panel-primary">
        <div class="panel-heading">
            <div class="panel-title" style="display: flex;justify-content:space-between;">
                <h4 >Champion</h4>
            <button type="button" class="btn btn-danger" @click="remove">Usuń</button>
            </div>
        </div>
        <div class="panel-body">
            <div class="col-md-6">
                <div class="input-group margin-bottom">
                <span class="input-group-addon"><em>Imię postaci</em></span>
                <span class="input-group-addon"><b>{{ name }}</b></span>
            </div>
            <div class="input-group margin-bottom">
                <span class="input-group-addon">Pseudonim postaci</span>
                <span class="input-group-addon"><b>{{ pseudo }}</b></span>
            </div>
            </div>
            <div class="row margin-bottom">
                <div class="col-md-6">
                    <div class="progress">
                        <div class="progress-bar progress-bar-danger progress-bar-striped" role="progressbar" style="width: 100%;">
                            <b>{{ hp }}</b> {{ hp }} HP
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="progress">
                        <div class="progress-bar progress-bar-primary progress-bar-striped" role="progressbar" style="width: 100%;">
                            <b>{{ mp }}</b> {{ mp }} MP
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  </template>
  
  <script>
  
    export default {
      name: 'AboutChampionPanel',
      props:{
        name: String,
        pseudo: String,
        hp: Number,
        mp: Number
      },
      methods:{
        remove(){
          this.$emit('remove', this.name);
        }
      }
    }
  </script>
  
  <style scoped>
    .margin-bottom{
        margin-bottom: 6px;
    }
  </style>