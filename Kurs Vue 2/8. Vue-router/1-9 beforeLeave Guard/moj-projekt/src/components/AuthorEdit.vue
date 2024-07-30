<template>
<!-- eslint-disable -->
    <div>
        <h4>{{ header }}</h4>
        <hr>
        <router-link :to="{ name: 'author-name', params: { name: $route.params.name } }" tag="button" class="btn btn-primary">
          {{ btn }}
        </router-link>
    </div>
</template>

<script>
/* eslint-disable */
export default{
    props:{
        name: String
    },
    computed: {
        lang(){
            return this.$route.query.lang;
        },
        header(){
            return this.lang == 'pl' ? 'Edycja autora' : 'Author\'s editing';
        },
        btn(){
            return this.lang == 'pl' ? 'Powrót' : 'Back';
        }
    },
    beforeRouteEnter (to, from, next) {
        let pass = prompt('podaj hasło');
        if(pass === '123'){
            next();
        } else {
            next(false);
        }
    },
    beforeRouteLeave (to, from, next) {
        if(confirm('czy napewno chcesz opuścić stronę?')){
            next();
        } else {
            next(false);
        }
    }
}
</script>