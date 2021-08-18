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
    // logging computer selection to ensure that it matches the float
    console.log(computerSelection);
    if (playerSelection === 'rock') {
        if (computerSelection === 'rock') {
            textDiv.innerHTML = ('It\'s a tie!')
            scoreBoardDiv.innerHTML = (playerScore + '-' + computerScore);
        }
        else if (computerSelection === 'paper') {
            textDiv.innerHTML = ('You Lose! Paper beats Rock!')
            computerScore++;
            scoreBoardDiv.innerHTML = (playerScore + '-' + computerScore);
            checkWinner();
        }
        else if (computerSelection === 'scissors') {
            textDiv.innerHTML = ('You Win! Rock Smashes Scissors!')
           playerScore++;
           scoreBoardDiv.innerHTML = (playerScore + '-' + computerScore);
           checkWinner();
        }
    } else if (playerSelection === 'paper') {
        if (computerSelection === 'rock') {
            textDiv.innerHTML = ('You Win! Paper covers Rock.')
           playerScore++;
           scoreBoardDiv.innerHTML = (playerScore + '-' + computerScore);
           checkWinner();
        }
        else if (computerSelection === 'paper') {
            textDiv.innerHTML = ('It\'s a tie!')
            scoreBoardDiv.innerHTML = (playerScore + '-' + computerScore);
        }
        else if (computerSelection === 'scissors') {
            textDiv.innerHTML = ('You Lose! Scissors cut Paper!');
            computerScore++;
            scoreBoardDiv.innerHTML = (playerScore + '-' + computerScore);
            checkWinner();
        }
    } else if (playerSelection === 'scissors') {
        if (computerSelection === 'rock') {
            textDiv.innerHTML = ('You Lose! Rock smashes Scissors!')
           computerScore++;
           scoreBoardDiv.innerHTML = (playerScore + '-' + computerScore);
           checkWinner();
        }
        else if (computerSelection === 'paper') {
            textDiv.innerHTML = ('You Win! Scissors cut Paper!');
            playerScore++;
            scoreBoardDiv.innerHTML = (playerScore + '-' + computerScore);
            checkWinner();
        }
        else if (computerSelection === 'scissors') {
            textDiv.innerHTML = ('It\'s a tie!')
            scoreBoardDiv.innerHTML = (playerScore + '-' + computerScore);
        }
    }
    
    //catches mistyped answers to the prompt
    else {
        return('please select "rock", "paper", or "scissors"');
    }
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