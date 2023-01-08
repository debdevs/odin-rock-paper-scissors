





function getComputerChoice() {
  var choiceArray = ['Rock', 'Paper', 'Scissors'];
  const randomElement =
    choiceArray[Math.floor(Math.random() * choiceArray.length)];

  return randomElement;
}
const playerSelection = 'scissors';
const playerSelection1 = playerSelection.toLowerCase();

let winner = null;
function playRound(playerSelection1) {
  const computerSelection = getComputerChoice();
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

  document.getElementById("pc").innerHTML = "Rock";




  const container = document.querySelector('#container');
  const player_choice = document.createElement('div');
  player_choice.classList.add('player_choice');
  player_choice.textContent = "Player Choice:" + playerSelection1;
  container.appendChild(player_choice);


  const computer_choice = document.createElement('div');
  computer_choice.classList.add('computer_choice');
  computer_choice.textContent = "Computer Choice:" + computerSelection;
  container.appendChild(computer_choice);



  const winner_display = document.createElement('div');
  winner_display.classList.add('winner_display');
  winner_display.textContent = "Winner: " + winner;
  container.appendChild(winner_display);
  
  return [playerSelection1, computerSelection, winner];
}



const buttons = document.querySelectorAll('button');

 
buttons.forEach((button) => {


  button.addEventListener('click', () => {
    alert(button.id);
    playRound(button.id)
  });
});



// function game() {
//   const winner_calc = [];
//   let player_wins = 0;
//   let computer_wins = 0;
//   for (let i = 0; i < 5; i++) {
//     console.log('NEW');
//     console.log(i);
//     // const playerSelection = document.getElementById('input').value;
//     let playerSelection = prompt('Please enter your choice', '');
//     const playerSelection1 = playerSelection.toLowerCase();
//     const computerSelection = getComputerChoice();

//     let values = playRound(playerSelection1, computerSelection);

//     const player = values[0],
//       computer = values[1],
//       winner = values[2];
//     winner_calc.push(winner);

//     if (winner === 'computer') {
//       computer_wins++;
//     } else if (winner === 'you') {
//       player_wins++;
//     } else {
//       console.log('TIE');
//     }

//     console.log(player, computer, winner);
//     console.log('Player Wins: ' + player_wins);
//     console.log('Computer Wins: ' + computer_wins);
//     if (i >= 4 && player_wins > computer_wins) {
//       console.log('ROUND WINNER IS PLAYER');
//     } else if (i >= 4 && player_wins < computer_wins) {
//       console.log('ROUND WINNER IS COMPUTER');
//     }
//   }
//   return winner;
// }

//console.log(game(winner));
