<template>
    <!-- eslint-disable -->
    <div class="panel panel-primary">
        <div class="panel-heading">
            <h5 class="panel-title">
                <slot name="header">Przywitanie</slot>
            </h5>
        </div>
        <div class="panel-body">
            <slot :superhero="superhero"></slot>
        </div>
    </div>
</template>

<script>
export default {
    data: () => ({
    superhero: 'batman',
  })
}
   
           
</script>

<style scoped>
    
</style>