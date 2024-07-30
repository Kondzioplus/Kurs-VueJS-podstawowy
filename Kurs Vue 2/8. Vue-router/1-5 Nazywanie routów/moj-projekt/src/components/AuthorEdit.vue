<template>
<!-- eslint-disable -->
    <div>
        <h4>Edycja autora</h4>
        <hr>
        <<router-link :to="{ name: 'author-name', params: { name: $route.params.name } }" tag="button" class="btn btn-primary">
          Powrót
        </router-link>
    </div>
</template>

<script>
/* eslint-disable */
export default{
    props:{
        name: String
    }
}
</script>