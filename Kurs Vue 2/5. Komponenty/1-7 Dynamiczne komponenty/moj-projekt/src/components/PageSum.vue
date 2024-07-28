<template>
    <!-- eslint-disable -->
    <div class="jumbotron">
        <div class="container">
            <h1>Sumowanie</h1>
            <div class="input-group">
                <span class="input-group-addon">Czynnik</span>
                <input type="number" class="form-control" v-model="a" placeholder="A" aria-describedby="sizing-addon2">
            </div>
            <div class="input-group">
                <span class="input-group-addon">Czynnik</span>
                <input type="number" class="form-control" v-model="b" placeholder="B" aria-describedby="sizing-addon2">
            </div>
            <hr>
            <p>Suma to <b>{{ c }}</b></p>
        </div>
    </div>
</template>

<script>
export default {
    data: () => ({
            a: 0,
            b: 0
        }),
        computed:{
            c(){
                return Number(this.a) + Number(this.b);
            }
        },
        deactivated() {
            alert(`${this.a} + ${this.b} = ${this.c}`);
        },
}
</script>

<style>

</style>