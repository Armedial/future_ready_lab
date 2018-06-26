/*eslint-env browser*/
function playGame(){
    alert("First enter a low number, then a high number. Then, guess a random number between them.");

    //get the low and high bounds
    //uses parseInt() to make sure we have numbers not strings
    var from = parseInt(prompt("Enter the lower bound."));
  while(from < 0 || from > 1000 || isNaN(from)){
     if(from < 0){
            from = parseInt(prompt("Enter a number greater than 0 kid"));
        } else if(from > 1000){
            from = parseInt(prompt("Your number was too high make it less than 1000"));
        } else if(isNaN(from)){
            from = parseInt(prompt("ENTER A NUMBER KID"));
        }
    }
    var to = parseInt(prompt("Enter the higher bound."));
    while(to > 1000 || to < 0 || to < from || isNaN(to)){
        if(to > 1000){
            to = parseInt(prompt("Enter a number less than 1000"));
        } else if(isNaN(to)){
            to = parseInt(prompt("Enter a number please"));
        } else if(to < from){
            to = parseInt(prompt("Please enter a number higher than the lower bound" + from));
        }
    }

    //get an integer between [from, to]
    //Math.random() returns decimals, used Math.round() to get whole number
    var target = Math.round(Math.random() * (to - from) + from);

    var currentGuess = parseInt(prompt("Guess a number between " + from + " and " + to));

    var totalGuesses = 1;

    //loop until user guesses correct number
     while(currentGuess != target) {
        if(currentGuess < from){
            currentGuess = parseInt(prompt("Enter a number greater than " + from));
        } else if(currentGuess > to){
            currentGuess = parseInt(prompt("Enter a number less than " + to));
        } else if(currentGuess < target){
            currentGuess = parseInt(prompt("Enter a higher number"));
            totalGuesses++
        } else if(currentGuess > target){
            currentGuess = parseInt(prompt("Enter a lower number"));
            totalGuesses++
        }
 }

    alert("It took " + totalGuesses + " tries to guess the correct number.");
} 