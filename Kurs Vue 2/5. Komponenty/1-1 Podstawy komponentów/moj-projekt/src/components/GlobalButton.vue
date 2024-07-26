<template>
    <button @click="counter++">{{ counter }}</button>
</template>

<script>
    export default{
        data: () => ({
            counter: 0
        })
    }
</script>