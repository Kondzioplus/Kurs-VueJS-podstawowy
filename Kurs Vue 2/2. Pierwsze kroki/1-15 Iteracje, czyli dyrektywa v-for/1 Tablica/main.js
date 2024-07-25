new Vue({
    data: {
       
        fruits: [
          'Jabłko',
          'Gruszka',
          'Śliwka',
          'Banan',
        ],
  },
    computed: {
        filteredFruits: function(){
            return this.fruits.filter(function(v){
                return v.length >= 7;
            })
        }
    }
  }).$mount('#app');