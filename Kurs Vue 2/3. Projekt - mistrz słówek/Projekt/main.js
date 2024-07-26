new Vue({
  el: "#app",
  data:{
   result: 0,
   answer: '',
   words: [],
   dictionary: [],
   currentwordId: 0,
   currentWord: '',
  },
  methods:{
    // metoda obliczająca wynik
    randWord: function(){
      this.currentWordId = Math.floor(Math.random() * this.dictionary.length);
      this.currentWord = this.dictionary[this.currentWordId][1];
    },
    // metoda inicjująca dane startowe
    initialState: function(){
      this.dictionary = [
        ['flower', 'kwiatek'],
        ['garden', 'ogród'],
        ['doniczka', 'pot']
      ];
      this.words = [];
      this.result = 0;
    },
    // metoda sprawdzająca poprawność odpowiedzi
    checkAnswer: function(){
      if(this.answer.trim().toLowerCase() == this.dictionary[this.currentWordId][0]){
        this.result += 1;
        this.dictionary.splice(this.currentWordId, 1);
        this.randWord();
      } else{
        this.result -= 0.5;
      }
      this.answer = '';
    }
  }
});