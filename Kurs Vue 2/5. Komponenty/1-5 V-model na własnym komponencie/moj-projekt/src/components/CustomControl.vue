<template>
    <!-- eslint-disable -->
    <div class="control">
        <div class="picks">
            <div 
            class="pick"
            v-for="color in freeColors"
            :key="color"
            :style="{backgroundColor: color}"
            @click="updateModel(color)"></div>
        </div>
        <div class="current" :style="{backgroundColor: value}">

        </div>
    </div>
</template>

<script>

    export default{
        data: () => ({
            colorsList: [
                '#428bca',
                '#5cb85c',
                '#f0ad4e',
                '#d9534f',
                '#5bc0de',
            ]
        }),
        props: {
            value: String
        },
        computed: {
            freeColors(){
                return this.colorsList.filter(v => v !== this.value);
            }
        },
        methods: {
            updateModel(color){
                this.$emit('input', color);
            }
        },
    }
</script>

<style scoped>
    .control {
        width: 200px;
        height: 100px;
        border: 6px solid #333;
        position: relative;
        display: flex;
    }

    .control > .picks {
        width: 50%;
        height: 100%;   
        display: flex;
        flex-wrap: wrap;
    }

    .control > .picks >.pick {
        width: 50%;
        height: 50%;
        border: 5px solid rgba(0, 0, 0, 0.4);
        cursor: pointer;
    }

    .control > .current {
        width: 50%;
        height: 100%;
        border: 5px solid rgba(0, 0, 0, 0.4);
        transition: 1s;
    }   
</style>