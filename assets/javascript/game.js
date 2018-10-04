// Creates an array that lists out all of the options for letters
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// List of all Variables
var lettersGuessedText = document.getElementById("lettersGuessedText");
var computerChoiceText = document.getElementById("computerchoice-text");
var userWin = document.getElementById("userWins");
var userLoss = document.getElementById("userLosses");
var wins = 0;
var lostround = 0;
var guessesAvailable = 10;
var lettersGuessed = [];

// Randomly chooses a choice from the options array. This is the Computer's guess.
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

// This function is run whenever the user presses a key.
document.onkeyup = function (event) {

    //Display Wins and Losses
    userLosses.textContent = "Losses: " + lostround;
    userWins.textContent = "Wins: " + wins;


     // If user runs out of guesses end code and reset game.
    if (guessesAvailable === 0) {
        alert("Game Over");
        lostround++;
        resetGame();
        return;
    }

    // Determines which key was pressed and converts to lower case.
    var userGuess = event.key.toLowerCase();


    // Only run the following code block if the userGuess equals an alphabet letter.

    if (computerChoices.indexOf(userGuess) > -1 && lettersGuessed.indexOf(userGuess) === -1) {
       
        // Adds the userGuess to the array lettersGuessed.
        lettersGuessed.push(userGuess);

        // Display all user guess.
        lettersGuessedText.textContent = "Your Guesses So Far: " + lettersGuessed;

        //Display Guesses Available
        guessesLeft.textContent = "Guesses Left: " + guessesAvailable;

        
        //If userguess is equal to computer guess    
        if (userGuess === computerGuess) {
            wins++;
            resetGame();
            console.log(userWin);
            alert("Way to go! You must be Psychic!");
        }

        // If userguess is not equal to computer guess
        if (userGuess !== computerGuess) {
            guessesAvailable--;
        }



    }
}

function resetGame() {
    guessesAvailable = 10;
    lettersGuessed = [];
    computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
}
