new Vue({
    el: '#app',
    data: {
        firstName: 'Tomek',
        lastName: 'Kucharski'
    },
    methods: {
        changeName: function(event){
            this.firstName = event.target.value;
        },
        upperFirstName: function(){
           return this.firstName.toUpperCase();
        }
    }
})