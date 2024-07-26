<template>
    <div class="healthbar">
        <button type="button" class="btn btn-primary" @click="minusHp">
            Uderz
        </button>
        <div class="progress">
            <div 
            :class="{ active: animated }"
            class="progress-bar progress-bar-danger progress-bar-striped"
            role="progressbar"
            aria-valuenow="100"
            aria-valuemin="0"
            aria-valuemax="100"
            :style="{ width: helathbarWidth }"
            @click="animated = !animated">{{currentHp}}/{{ maxHp }} HP</div>
        </div>
    </div>
</template>

<script>
    export default{
        data: () => ({
            currentHp: 981,
            maxHp: 981,
            animated: false
        }),
        methods: {
            minusHp(){
                this.currentHp -= 10;
            },
            respawn(){
                this.currentHp = this.maxHp;
            }
        },
        computed: {
            helathbarWidth(){
                return (this.currentHp / this.maxHp) * 100 + '%';
            }
        },
        watch: {
            currentHp(newValue){
                if(newValue < 0){
                    this.respawn();
                }
            }
        }
    }
</script>

<style>
    .healthbar{
        display: flex;
        align-items: center;
    }
    .progress{
        width: 100%;
        margin: 0;
        margin-left: 10px;
    }
</style>