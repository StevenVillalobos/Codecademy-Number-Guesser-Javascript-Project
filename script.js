let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => {
    return Math.floor(Math.random() * 9 + 1);
}


const compareGuesses = (humanGuess, computerGuess, secretNumber) => {

    if ((Math.abs(humanGuess-secretNumber)) === (Math.abs(computerGuess-secretNumber)))
        return true;

    if ((Math.abs(humanGuess-secretNumber)) < (Math.abs(computerGuess-secretNumber)))
        return true;
    else {
        return false;
    }
}

const updateScore = (winner = '') => {
    if (winner === 'human') {
        return humanScore +=1;
    } else {
        return computerScore +=1};
  }

const advanceRound = () => {
    return currentRoundNumber += 1;
  }