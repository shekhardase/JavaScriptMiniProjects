// Generate a random number between 1 and 100
let RandomNumber = parseInt(Math.random() * 100 + 1);

// Selecting necessary elements from the HTML document
const submit = document.querySelector('#subt');
const UserInput = document.querySelector('#guessField');
const GuessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const hint = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');
const p = document.createElement('p');

// Array to store previous guesses, and tracking the number of guesses
let prevGuess = [];
let numGuess = 1;
// Flag to control whether the game is ongoing or not
let playGame = true;

// If the game is ongoing, add an event listener for the submit button click
if (playGame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault();
        const guess = parseInt(UserInput.value);
        // Call the function to validate the user's guess
        validateGuess(guess);
    });
}

// Function to validate the user's guess
function validateGuess(guess) {
    if (isNaN(guess)) {
        alert('Please enter a valid number.');
    } else if (guess < 1) {
        alert('Please enter a number greater than 1.');
    } else if (guess > 100) {
        alert('Please enter a number less than 100.');
    } else {
        prevGuess.push(guess);
        // If the maximum number of guesses (11) is reached, end the game
        if (numGuess === 11) {
            displayGuess(guess);
            displayMessage(`Game Over, Random number was ${RandomNumber}`);
            endGame();
        } else {
            // If the maximum number of guesses is not reached, continue the game
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

// Function to check the user's guess against the random number
function checkGuess(guess) {
    if (guess === RandomNumber) {
        displayMessage(`You guessed it right!`);
        endGame();
    } else if (guess < RandomNumber) {
        displayMessage(`Number is too low.`);
    } else if (guess > RandomNumber) {
        displayMessage(`You guessed too high.`);
    }
}

// Function to display the user's guess
function displayGuess(guess) {
    UserInput.value = '';
    GuessSlot.innerHTML += `${guess} `;
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`;
}

// Function to display messages to the user
function displayMessage(message) {
    hint.innerHTML = `<h2>${message}</h2>`;
}

// Function to end the game
function endGame() {
    UserInput.value = '';
    UserInput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;
    startOver.appendChild(p);
    playGame = false;
    // Call function to start a new game when the "Start New Game" button is clicked
    newGame();
}

// Function to start a new game
function newGame() {
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function (e) {
        // Generate a new random number and reset variables
        RandomNumber = parseInt(Math.random() * 100 + 1);
        prevGuess = [];
        numGuess = 1;
        GuessSlot.innerHTML = '';
        remaining.innerHTML = `<span class="lastResult">10</span>`;
        UserInput.removeAttribute('disabled');
        startOver.removeChild(p);
        hint.innerHTML = ''; 
        playGame = true;
    });
}



