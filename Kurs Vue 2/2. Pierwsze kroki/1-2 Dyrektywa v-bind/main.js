new Vue({
    el: '#app',
    data: {
        firstName: 'Adam',
        lastName: 'Kucharski',
        h1Style: 'color:red'
    },
    methods: {
        changeName: function(event){
            this.firstName = event.target.value;
        },
        upperFirstName: function(){
           return this.firstName.toUpperCase();
        },
        changeColor: function(){
            if(this.h1Style === 'color:red'){
                this.h1Style = 'color:cyan';
            } else {
                this.h1Style = 'color:red';
            }
        }
    }
})