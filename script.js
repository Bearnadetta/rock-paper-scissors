const computerSelection = '';
const playerSelection = '';
let playerScore = 0;
let computerScore = 0;
//Randomly returns either rock, paper, or scissors.
 function computerPlay () {
    let float = Math.floor(Math.random() * 3);
    //used to log the float and ensure that the random number is accurately read
    console.log(float)
        if (float === 0) {
            return('rock')
        }
        else if (float === 1) {
            return('paper')
        }
        else {
            return('scissors');
        }
    }
// plays a single round of rock paper scissors when called
function playRound(playerSelection, computerSelection) {
    //prompts the player to type rock, paper, or scissors
    playerSelection = window.prompt('Choose Rock, Paper, or Scissors!', '')
    computerSelection = (computerPlay());
    // logging computer selection to ensure that it matches the float
    console.log(computerSelection);
    if (playerSelection.toLowerCase() === 'rock') {
        if (computerSelection === 'rock') {
            return('It\'s a tie!')
        }
        else if (computerSelection === 'paper') {
            computerScore++;
            return('You Lose! Paper beats Rock!');
        }
        else if (computerSelection === 'scissors') {
           playerScore++;
            return('You Win! Rock Smashes Scissors!');
        }
    } else if (playerSelection.toLowerCase() === 'paper') {
        if (computerSelection === 'rock') {
           playerScore++;
            return('You Win! Paper covers Rock.')
        }
        else if (computerSelection === 'paper') {
            return('It\'s a tie!');
        }
        else if (computerSelection === 'scissors') {
            computerScore++;
            return('You Lose! Scissors cut Paper!');
        }
    } else if (playerSelection.toLowerCase() === 'scissors') {
        if (computerSelection === 'rock') {
           computerScore++;
            return('You Lose! Rock smashes Scissors!')
        }
        else if (computerSelection === 'paper') {
            playerScore++;
            return('You Win! Scissors cut Paper!');
        }
        else if (computerSelection === 'scissors') {
            return('It\'s a tie!');
        }
    }
    //catches mistyped answers to the prompt
    else {
        return('please select "rock", "paper", or "scissors"');
    }
}

//runs the playRound function five times
function game() {
    for(let i = 0; i < 5; i++) {
    alert(playRound(playerSelection, computerSelection));
    let scoreBoard = (playerScore + '-' + computerScore);
    console.log(scoreBoard);
    }
    if (playerScore > computerScore) {
        alert('You are the winner!');
    }
    else if (computerScore > playerScore) {
        alert('You have been bested by the machines!');
    }
    else {
        alert('it\'s a draw!');
    }
}
//runs game function on page load
game();