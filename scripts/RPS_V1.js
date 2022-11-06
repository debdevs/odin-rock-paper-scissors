function getComputerChoice() {
  var choiceArray = ['Rock', 'Paper', 'Scissors'];
  const randomElement =
    choiceArray[Math.floor(Math.random() * choiceArray.length)];

  return randomElement;
}
const playerSelection = 'scissors';
const playerSelection1 = playerSelection.toLowerCase();
const computerSelection = getComputerChoice();
let winner = null;
function playRound(playerSelection1, computerSelection) {
  if (playerSelection === 'rock' && computerSelection == 'Scissors') {
    console.log('You won! congrats');
    winner = 'you';
  } else if (playerSelection1 === 'scissors' && computerSelection == 'Rock') {
    console.log('You lost. Try again');
    winner = 'computer';
  } else if (playerSelection1 === 'paper' && computerSelection == 'Rock') {
    console.log('You won! congrats');
    winner = 'you';
  } else if (playerSelection1 === 'rock' && computerSelection == 'Paper') {
    console.log('You lost. Try again');
    winner = 'computer';
  } else if (playerSelection1 === 'paper' && computerSelection == 'Scissors') {
    console.log('You lost. Try again');
    winner = 'computer';
  } else if (playerSelection1 === 'scissors' && computerSelection == 'Paper') {
    console.log('You won! congrats');
    winner = 'you';
  } else if (playerSelection1 === computerSelection.toLowerCase()) {
    console.log('Wow! You tied!');
    winner = 'tie!';
  }
  return [playerSelection1, computerSelection, winner];
}
function game() {
  for (let i = 0; i < 5; i++) {
    console.log('NEW');
    console.log(i);
    let values = playRound(playerSelection1, computerSelection);
    console.log(values);
    const firstName = values[0],
      lastName = values[1],
      winner = values[2];
  }
  return winner;
}

console.log(game(winner));
