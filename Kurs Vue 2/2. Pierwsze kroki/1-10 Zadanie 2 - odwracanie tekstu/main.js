new Vue({
    el: '#app',
    data: {
        content: ' ',
        watcherContent: ' ',
    },
    computed: {
        reversedContent: function(){
            return this.content.split('').reverse().join('');
        }
    },
    watch: {
        content: function(newValue, oldValue){
            this.watcherContent = newValue.split('').reverse().join('');
        }
    }
})