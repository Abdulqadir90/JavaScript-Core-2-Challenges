let randomNumber = Math.floor(Math.random() * 100 + 1);

let numOfTries = document.querySelector(".Tries-output");
let finalOutput = document.querySelector(".final-output");
let reset = document.querySelector(".btnNewGame");
let playerGuess = document.querySelector(".inputs-Values");
let triesLimit = 3;
let currentTries = 0;





function guessNumber() {
  //Collect input from the user
  console.log('player', playerGuess.value);
  console.log('RandomNumber', randomNumber)

  numOfTries.innerHTML = currentTries;
  //If the user inputs a bad input ie 0, empty string, number greater that 100, number less than zero Print "Please enter a number between 1 and 100"
  if (playerGuess.value === '' || playerGuess.value <= 0 || playerGuess.value > 100) {
    finalOutput.innerHTML = 'Please enter a number between 1 and 10';
  } else if (playerGuess.value > randomNumber) {
    finalOutput.innerHTML = 'Your guess is too high';
  } else if (playerGuess.value < randomNumber) {
    finalOutput.innerHTML = ('You guessed too low');
  } else {
    finalOutput.innerHTML = ('Well done G');
  }
  //If the users guess is higher than the random number print Number is too high, try again (hint use .final-out class to print)

  //If the users guess is lower than the random number print Number is too low, try again  (hint use .final-out class to print)

  //If the user has guessed the random number correctly print out the randomNumber with a message "Guess is correct. You win!"
}

// For this task we will be making a "New Game" button function which will reset our game,
// Once the user clicks on this button the user will have new random number to guess
// 1. Reset the values inside the body of the function
// 2. Attach our new game button using an event listener to the .btnNewGame button
function newGame() {
  //Your code here
  //Reset randomNumber
  randomNumber = Math.floor(Math.random() * 100 + 1);
  //Reset users input field
  playerGuess.value = '';
  //Reset tries, and triesTaken by the user
  numOfTries.innerHTML = '';
  finalOutput.innerHTML = 'Guess a number between 1 and 100';
  //current tries
  currentTries = 0;
}

//keyboard exception
function keyBoardEvents(e) {
  if (currentTries !== triesLimit) {
  if (e.keyCode === 13) {
    currentTries++;
    guessNumber();
  }
}
   else{
    finalOutput.innerHTML = 'You ran out of goes bro';
  }
}

document.querySelector(".btnGuess").addEventListener("click", guessNumber);
document.addEventListener("keypress", keyBoardEvents);
document.querySelector('.btnNewGame').addEventListener('click', newGame);