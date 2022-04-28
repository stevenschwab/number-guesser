let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

const generateTarget = () => {
  return Math.floor(Math.random() * 10);
}

const getAbsoluteDistance = (num1, num2) => {
  if (num1 < 0 || num1 > 9) {
    alert('Your number is out of range.');
  }
  return Math.abs(num1 - num2);
}

const compareGuesses = (userGuess, computerGuess, targetNumber) => {
  const userAway = getAbsoluteDistance(userGuess, targetNumber);
  const computerAway = getAbsoluteDistance(computerGuess, targetNumber);
  if (userAway === computerAway || userAway < computerAway) {
    return true;
  } else {
    return false;
  }
}

const updateScore = aString => {
  if (aString === 'human') {
    humanScore++;
  } else {
    computerScore++;
  }
}

const advanceRound = () => {
  currentRoundNumber++;
}