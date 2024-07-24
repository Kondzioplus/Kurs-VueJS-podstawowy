new Vue({
    el:'#app',
    data: {
        password: '',
        loggedIn: false,
        logginAttempt: 0,
    },
    methods: {
        checkPassword: function() {
            this.logginAttempt++;
            if (this.password === 'ABC'){
                this.loggedIn = true;
            }
        }
    }
})