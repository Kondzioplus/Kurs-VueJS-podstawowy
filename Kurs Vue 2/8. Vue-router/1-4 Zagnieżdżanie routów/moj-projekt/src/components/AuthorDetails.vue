<template>
    <div class="panel panel-primary">
        <div class="panel-heading">
            Panel autora
        </div>
        <div class="panel-body">
            Autor to <b>{{ name }}</b>
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