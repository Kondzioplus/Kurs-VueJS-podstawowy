export default {
    data: () => ({
        
        names: [
          'Konrad', 'Adriana', 'Patrycja', 'Bartłomiej'
        ],
        filterName: '',
      }),
      computed:{
          filteredNames(){
            return this.names.filter(v => v.match(this.filterName));
          }
        },
      created(){
        console.log('Jestem w Mixinie!!!');
      }
}