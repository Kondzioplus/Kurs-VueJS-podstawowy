new Vue({
  el: "#app",
  data:{
   result: 0,
   answer: '',
   words: [],
   dictionary: [],
   currentWordId: 0,
   currentWord: '',
   lastAnswer: null
  },
  methods:{
    // metoda obliczająca wynik
    randWord: function(restrict){
      var randedId = Math.floor(Math.random() * this.dictionary.length);
      // sprawdzenie czy wylosowany indeks nie jest równy zrestrictowanym, jeśli tak, wylosuj inny
      if(restrict !== undefined && this.dictionary.length >= 2){
        if(randedId == restrict){
          if(randedId > 0){
            randedId--;
          } else{
            randedId = Math.round((Math.random() * this.dictionary.length-2)+1);
          }
        }
      }
      this.currentWordId = randedId;
      this.currentWord = this.dictionary[this.currentWordId][1];
    },
    // metoda inicjująca dane startowe
    initialState: function(){
      this.dictionary = [
        ['flower', 'kwiatek'],
        ['garden', 'ogród'],
        ['pot', 'doniczka']
      ];
      this.words = [];
      this.result = 0;
      this.answer = null;
      this.randWord();
    },
    // metoda sprawdzająca poprawność odpowiedzi
    checkAnswer: function(){
      if(this.answer.trim().toLowerCase() == this.dictionary[this.currentWordId][0]){
        this.result += 1;
        this.words.push(this.dictionary.splice(this.currentWordId, 1)[0]);
        this.lastAnswer = true;
        this.randWord();
      } else{
        this.result -= 0.5;
        this.lastAnswer = false;
        this.randWord(this.currentWordId);
      }
      this.answer = '';
    }
  },
  created: function(){
    this.initialState();
    
  }
});