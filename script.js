let playerScore = 0;
let computerScore = 0;
const rockButton = document.querySelector('#rockButton');
const paperButton = document.querySelector('#paperButton');
const scissorsButton = document.querySelector('#scissorsButton');
//plays a round when one of the buttons is clicked
rockButton.addEventListener('click', () => {
    playRound('rock', computerPlay());
});
paperButton.addEventListener('click', () => {
    playRound('paper', computerPlay());
});
scissorsButton.addEventListener('click', () => {
    playRound('scissors', computerPlay());
});
//Randomly returns either rock, paper, or scissors.
 function computerPlay () {
    let float = Math.floor(Math.random() * 3);
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
function playRound(playerSelection,computerSelection) {
    computerSelection = (computerPlay());
    // logging computer selection to ensure that it matches the float
    console.log(computerSelection);
    if (playerSelection === 'rock') {
        if (computerSelection === 'rock') {
            console.log('It\'s a tie!')
            return('It\'s a tie!')
        }
        else if (computerSelection === 'paper') {
            computerScore++;
            console.log('You Lose! Paper beats Rock!')
            return('You Lose! Paper beats Rock!');
        }
        else if (computerSelection === 'scissors') {
           playerScore++;
           console.log('You Win! Rock Smashes Scissors!')
            return('You Win! Rock Smashes Scissors!');
        }
    } else if (playerSelection === 'paper') {
        if (computerSelection === 'rock') {
           playerScore++;
           console.log('You Win! Paper covers Rock.')
            return('You Win! Paper covers Rock.')
        }
        else if (computerSelection === 'paper') {
            console.log('It\'s a tie!')
            return('It\'s a tie!');
        }
        else if (computerSelection === 'scissors') {
            computerScore++;
            console.log('You Lose! Scissors cut Paper!');
            return('You Lose! Scissors cut Paper!');
        }
    } else if (playerSelection === 'scissors') {
        if (computerSelection === 'rock') {
           computerScore++;
           console.log('You Lose! Rock smashes Scissors!')
           return('You Lose! Rock smashes Scissors!')
        }
        else if (computerSelection === 'paper') {
            playerScore++;
            console.log('You Win! Scissors cut Paper!');
            return('You Win! Scissors cut Paper!');
        }
        else if (computerSelection === 'scissors') {
            console.log('It\'s a tie!')
            return('It\'s a tie!');
        }
    }
    //catches mistyped answers to the prompt
    else {
        return('please select "rock", "paper", or "scissors"');
    }
}

