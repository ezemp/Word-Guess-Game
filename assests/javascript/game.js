window.onLoad = function(){
    var alphabet = ["a", "b", "c", "d","e", "f", "g", "h", "i", "j", "k", "l", "m", "n" ,"o", "p", "q", "r", "s","t", "u", "v", "w", "x", "y", "z"];
    var word ;
    var guess;
    var guesses;
    var lives;
    var correct;
    var space;

    document.onkeyup(userGuess)

    lifeUpdate = function() {
        showLives.innerHTML = "You have" + lives + "lives"
        if(lives < 1){
            showLives.alert("Game Over")
        }
        for (var i = 0; i < guesses.lenth; i++){
            if(correct + space === guessess.length){
                showLives.alert(" You're Winner")
            }
        }
    }

}


function userGuess(){
    guessLetter(key.toLowerCase());

   play = function(){
    
    word = ["teemo", "pyke", "summoner", "adc", "urf", "nidalee", "alistar"]
    randomWord = word[math.floor(math.random() * word.length)];
   }
}

