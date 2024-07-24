new Vue({
    el: '#app',
    data: {
       buttonStyle: 'display:block;',
       modalStyle: 'display:none;',
       header: 'Witaj świecie',
       content: 'Hej, <a href="#">Tomek</a>!'
    },
    methods: {
       openModal: function(){
        this.buttonStyle = this.modalStyle;
        this.modalStyle = 'display:flex;';
       },
       hideModal: function(){
        this.buttonStyle = 'display:block;';
        this.modalStyle = 'display:none;';
       }
    }
})