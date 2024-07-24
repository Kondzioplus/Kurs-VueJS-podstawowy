new Vue({
    el: '#app',
    data: {
        isBackgroundCyan: false,
        isColorRed: false,
       
       
    },
    computed: {
        classObject: function() {
            return {
                colorRed: this.isColorRed, 
                'background-cyan' : this.isBackgroundCyan}
        }
    }

})