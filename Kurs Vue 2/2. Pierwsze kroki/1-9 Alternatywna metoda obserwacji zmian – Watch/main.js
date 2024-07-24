new Vue({
    el: '#app',
    data: {
        status: 'Brak danych',
        isLoading: false,
        isLoaded: false
    },
    watch: {
        isLoading: function(newValue, oldValue){
            if(newValue && !this.isLoaded){
                this.status = 'Wczytywanie informacji o użytkownikach...';
                var that = this;
                this.isLoaded = true;
                setTimeout(function(){
                    that.status = 'Dane o użytkownikach wczytane pomyślnie!';
                }, 3000);
            }
        }
    },
    methods: {
        loadUsers: function(){
            this.isLoading = true;
        }
    }
})