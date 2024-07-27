<template>
    <div class="panel panel-default">
        <div class="panel-heading">
            <PlayerCharacterName></PlayerCharacterName>
        </div>
        <div class="panel-body">
            <PlayerCharacterHealthbar></PlayerCharacterHealthbar>
        </div>
    </div>
</template>

<script>
import PlayerCharacterName from "./PlayerCharacterName"
import PlayerCharacterHealthbar from "./PlayerCharacterHealthbar"
    export default{
        components: {
            PlayerCharacterName,
            PlayerCharacterHealthbar
        }
    }
</script>

<style>
    .panel{
        -webkit-box-shadow: 0px 0px 48px -7px rgba(0, 0, 0, 0.75);
        -moz-box-shadow: 0px 0px 48px -7px rgba(0, 0, 0, 0.75);
        box-shadow: 0px 0px 48px -7px rgba(0, 0, 0, 0.75);
        margin: 40px;
    }
</style>