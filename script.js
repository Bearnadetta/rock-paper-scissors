const computerSelection = '';
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
//prompts the player to type rock, paper, or scissors
const playerSelection = '';
// plays a single round of rock paper scissors when called
function playRound(playerSelection, computerSelection) {
    playerSelection = window.prompt('Choose Rock, Paper, or Scissors!', '')
    computerSelection = (computerPlay());
    // logging computer selection to ensure that it matches the float
    console.log(computerSelection);
    if (playerSelection.toLowerCase() === 'rock') {
        if (computerSelection === 'rock') {
            return('It\'s a tie!')
        }
        else if (computerSelection === 'paper') {
            return('You Lose! Paper beats Rock!');
        }
        else if (computerSelection === 'scissors') {
            return('You Win! Rock Smashes Scissors!');
        }
    } else if (playerSelection.toLowerCase() === 'paper') {
        if (computerSelection === 'rock') {
            return('You Win! Paper covers Rock.')
        }
        else if (computerSelection === 'paper') {
            return('It\'s a tie!');
        }
        else if (computerSelection === 'scissors') {
            return('You Lose! Scissors cut Paper!');
        }
    } else if (playerSelection.toLowerCase() === 'scissors') {
        if (computerSelection === 'rock') {
            return('You Lose! Rock smashes Scissors!')
        }
        else if (computerSelection === 'paper') {
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
    }
}
//runs game function on page load
game();