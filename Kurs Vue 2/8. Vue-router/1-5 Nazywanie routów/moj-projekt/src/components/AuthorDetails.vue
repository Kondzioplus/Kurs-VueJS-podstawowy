<template>
    <!-- eslint-disable -->
    <div class="panel panel-primary">
        <div class="panel-heading">
            Panel autora
        </div>
        <div class="panel-body">
            Autor to <b>{{ name }}</b> <br>
            <router-link :to="'/author/' + $route.params.name + '/edit'" tag="button" class="btn btn-primary">Edytuj</router-link>
        </div>
    </div>
</template>

<script>
export default{
    props:{
        name: String
    }
}
</script>