var alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z"
];

//variables to keep track of wins, losses, guesses left and letters already guessed
var wins = 0;
var losses = 0;
var guessesLeft = 5;
var alreadyGuessed = [];
var gameMessage = "Guess What Letter I'm thinking of by pressing a key";
var computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];

function updateGameMessage() {
  document.getElementById("gameMessage").textContent = gameMessage;
}

//global function to display our game info on the screen
function displayStats() {
  document.getElementById("guessesLeft").textContent =
    "Guesses Left: " + guessesLeft;
  document.getElementById("userGuesses").textContent =
    "Already Guessed Letters: " + alreadyGuessed;
  document.getElementById("wins").textContent = "Wins: " + wins;
  document.getElementById("losses").textContent = "Losses: " + losses;
}

//global function to reset the game
function resetGame() {
  computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
  alreadyGuessed = [];
  guessesLeft = 5;
  displayStats();
}

//invoke display stats function to display all our info on page load
displayStats();
updateGameMessage();

//on key up event handler
document.onkeyup = function(event) {
  //take the key the user presses and sets it equal to our userGuess variable
  var userGuess = event.key.toLowerCase();
  gameMessage = "You Guessed " + userGuess;
  updateGameMessage();

  //logging the computer guess and the user guess to the console
  console.log("Computer Guess: " + computerGuess);
  console.log("User Guess: " + userGuess);
  //decrese guesses Left by one
  guessesLeft--;
  //update game info on screen
  displayStats();
  // Check to see if there are guesses available

  //check if the  userGues is a letter  and also if that letter has already been guessed
  if (
    alphabet.indexOf(userGuess) > -1 &&
    alreadyGuessed.indexOf(userGuess) === -1
  ) {
    //if the key is a letter and it hasn't already been guessed we want to store it in our alreadyGuessed array and decrease our guesses left
    alreadyGuessed.push(userGuess);
    //update screen
    displayStats();

    //check if userGuess is equal to the computerguess
    if (userGuess === computerGuess) {
      //add to the wins
      wins++;
      gameMessage = "You Won! Guess a Letter to Play Again.";
      updateGameMessage();
      //reset the game
      resetGame();
    }
    if (guessesLeft === 0) {
      //increase the losses
      losses++;
      gameMessage =
        "Sorry! You ran out of guesses.  Guess a Letter to Play Again.";
      updateGameMessage();
      //reset the game
      resetGame();
    }
  }
};
