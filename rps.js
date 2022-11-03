function getComputerChoice() {
  var choiceArray = ['Rock', 'Paper', 'Scissors'];
  const randomElement =
    choiceArray[Math.floor(Math.random() * choiceArray.length)];
  console.log(randomElement);
  return randomElement;
}
const playerSelection = 'scissors';
const playerSelection1 = playerSelection.toLowerCase();
const computerSelection = getComputerChoice();
function playRound(playerSelection1, computerSelection) {
  if (playerSelection === 'rock' && computerSelection == 'Scissors') {
    console.log('You won! congrats');
  } else if (playerSelection1 === 'scissors' && computerSelection == 'Rock') {
    console.log('You lost. Try again');
  } else if (playerSelection1 === 'paper' && computerSelection == 'Rock') {
    console.log('You won! congrats');
  } else if (playerSelection1 === 'rock' && computerSelection == 'Paper') {
    console.log('You lost. Try again');
  } else if (playerSelection1 === 'paper' && computerSelection == 'Scissors') {
    console.log('You lost. Try again');
  } else if (playerSelection1 === 'scissors' && computerSelection == 'Paper') {
    console.log('You won! congrats');
  } else if (playerSelection1 === computerSelection.toLowerCase()) {
    console.log('Wow! You tied!');
  }
  return playerSelection1;
}

console.log(playRound(playerSelection1, computerSelection));
