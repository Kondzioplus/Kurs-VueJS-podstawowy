<template>
    <div class="panel panel-primary">
        <div class="panel-heading">
            <h4 class="panel-title">Dodawanie Championa</h4>
        </div>
        <div class="panel-body">
            <div class="input-group margin-bottom">
                <span class="input-group-addon">Imię postaci</span>
                <input type="text" class="form-control" v-model="name" placeholder="imię">
            </div>
            <div class="input-group margin-bottom">
                <span class="input-group-addon">Pseudonim postaci</span>
                <input type="text" class="form-control" v-model="pseudo" placeholder="pseudonim">
            </div>
            <div class="row margin-bottom">
                <div class="col-md-6">
                    <div class="input-group">
                        <span class="input-group-addon">Max HP</span>
                        <input type="number" class="form-control" v-model="hp" placeholder="Maxymalna ilość HP">
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="input-group">
                        <span class="input-group-addon">Max MP</span>
                        <input type="number" class="form-control" v-model="mp" placeholder="Maxymalna ilość MP">
                    </div>
                </div>
            </div>
            <button type="button" class="btn btn-danger" @click="reset">
                Resetuj
            </button> &nbsp;
            <button type="button" class="btn btn-success" @click="add" :disabled="cantUseName">
                Dodaj
            </button>
        </div>
    </div>

</template>
    
<script>
    export default {
        name: 'AddChampionPanel',
        props:{
            names: Array
        },
        data: () => ({
            name: ' ',
            pseudo: ' ',
            hp: null,
            mp: null
        }),
        methods: {
            reset(){
                this.name = '',
                this.pseudo = '',
                this.hp = null,
                this.mp = null
            },
            add() {
                this.$emit('add', {
                    name: this.name.trim(),
                    pseudo: this.pseudo.trim(),
                    hp: this.hp,
                    mp: this.mp
                });
                this.reset();
            }
        },
        computed: {
            cantUseName(){
                return this.names.find(v => v == this.name.trim()) !==undefined;
            }
        }
    }
</script>

<style scouped>
    .margin-bottom{
        margin-bottom: 12px;
    }
</style>