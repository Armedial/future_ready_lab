/*eslint-env browser*/


function playGame(){




alert("First enter a low number, then a high number. Then guess a random number between the two.");

//get the low and high bounds
//uses parseInt() to make sure we have numbers and not strings
var from = parseInt(prompt("Enter the lower bound"));

var to = parseInt(prompt("Enter the higher bound"));

var target = Math.round(Math.random() * (to-from) + from);

var currentGuess = parseInt(prompt("Guess a Number between" + from + " and " +to));

var totalGuesses =1;

if (currentGuess < target){
    currentGuess= parseInt( prompt("Enter a higher number") ) totalGuesses++;
}
//loop until user guesses correct number
while(currentGuess !=target){}
else if(currentGuess>target){currentGuess=parseInt(prompt("Enter a lower number")); totalGuesses++}

else {alert("it took" +totalGuesses + "Tries to guess this number")}

}