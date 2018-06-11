var wins = 0
var losses = 0
var maxGuesses = 10
var currentGuesses = [];
var chosenWord
var wordLength = []
var hiddenWord = []
var userInput;

words = [
"teemo", 
"lissandra",
"adc", 
"summoner", 
"swain",
"darius",
"noxus",
"graves",
"jungle",
"dragon",
"baron",
"demacia",
"garen",

]
function randomWord(){
    var random = math.floor(math.random() * 13);
    chosenWord = words[random];
}

function hideWord(){
    wordLength = chosenWord.split("")

};
function hideWord2(){
    for (var i = 0; i < wordLength.length; i++)
    hiddenWord.push("_ ");
}
function resetGame(){
    maxGuesses = 10
    currentGuesses = [];
    wordLength = []
     hiddenWord = []
    randomWord();
    hideWord()
    document.querySelector("#win").innerHTML = "";
    document.querySelector("#lose").innerHTML = "";

}

function winCondition(){
    if (wordLength === hiddenWord){
        wins++;
        document.querySelector("#winCount").innerHTML = wins;
        resetGame()
    }
}
if (maxGuesses < 1){
    losses++;
    document.querySelector("#lossCount").innerHTML = losses;
    resetGame()
}
else if (maxGesses <= 13){
    maxGuesses--;
    document.querySelector("#lives").innnerHTML = maxGuesses

}

function previousGuess(){
    currentGuesses.push(userKeyPress + "");
    document.querySelector("#prevGuess").innerHTML = previousGuesses;


}
// CHECK HERE???
function inputCheck(){
    for (var i = 0; i < wordLength.length;i++)
    userInput === wordLength[i] ? hiddenWord = userInput : document.querySelector("#blanks").innerHTML = hiddenWord
}

document.onKeyDown = function(event){
    userInput = string.fromCharCode(event.which).toLowerCase;
    
    winCondition();
    previousGuess();
    inputCheck();


}