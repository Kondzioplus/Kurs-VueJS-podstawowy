new Vue({
    el: '#app',
    data: {
        x: 0,
        y: 0
    },
    methods: {
        changeMyColor: function(event , stance){
            if(stance === undefined){
                event.target.classList.toggle('red');
            } else{
                if(stance === true){
                    event.target.classList.add('yellow');
                } else{
                    event.target.classList.remove('yellow');
                }
            }
        },
        updateMouseXY: function(event){
            this.x = event.clientX;
            this.y = event.clientY;
        }
    }
})