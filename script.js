let playerScore = 0;
let computerScore = 0;
const rockButton = document.querySelector('#rockButton');
const paperButton = document.querySelector('#paperButton');
const scissorsButton = document.querySelector('#scissorsButton');
const scoreBoardDiv = document.querySelector('#scoreBoardDiv');
const textDiv = document.querySelector('#textDiv');
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
    if (playerSelection === 'rock') {
        if (computerSelection === 'rock') {
            textDiv.textContent = ('It\'s a tie!')
        }
        else if (computerSelection === 'paper') {
            textDiv.textContent = ('You Lose! Paper beats Rock!')
            computerScore++;
        }
        else if (computerSelection === 'scissors') {
            textDiv.textContent = ('You Win! Rock Smashes Scissors!')
           playerScore++;
        }
    } else if (playerSelection === 'paper') {
        if (computerSelection === 'rock') {
            textDiv.textContent = ('You Win! Paper covers Rock.')
           playerScore++;
        }
        else if (computerSelection === 'paper') {
            textDiv.textContent = ('It\'s a tie!')
        }
        else if (computerSelection === 'scissors') {
            textDiv.textContent = ('You Lose! Scissors cut Paper!');
            computerScore++;
        }
    } else if (playerSelection === 'scissors') {
        if (computerSelection === 'rock') {
            textDiv.textContent = ('You Lose! Rock smashes Scissors!')
           computerScore++;
        }
        else if (computerSelection === 'paper') {
            textDiv.textContent = ('You Win! Scissors cut Paper!');
            playerScore++;
        }
        else if (computerSelection === 'scissors') {
            textDiv.textContent = ('It\'s a tie!')
        }
    } scoreBoardDiv.textContent = (playerScore + '-' + computerScore);
    checkWinner();

}
const checkWinner = function() {
    if (playerScore >= 5 ) {
        alert('You did it! You won!');
        gameStart();
    }else if (computerScore >= 5 ) {
        alert('You have been bested by the machines');
        gameStart();
    }
}

const gameStart = function() {
    playerScore = 0;
    computerScore = 0;
    scoreBoardDiv.innerHTML = (playerScore + '-' + computerScore);
    textDiv.innerHTML = ('Choose Rock, Paper, or Scissors to start a new game!');
}

window.onload = gameStart;