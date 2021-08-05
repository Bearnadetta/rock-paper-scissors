let computerSelection = '';
//Randomly returns either rock, paper, or scissors.
 function computerPlay () {
    let float = Math.floor(Math.random() * 3);
    console.log(float)
        if (float === 0) {
            computerSelection = 'rock';
            return computerSelection;
        }
        else if (float === 1) {
            computerSelection = 'paper';
            return computerSelection;
        }
        else {
            computerSelection = 'scissors';
            return computerSelection;
        }
    }
console.log(computerSelection);
let playerSelection = ''
function rockPaperScissors (playerSelection) {
    if playerSelection.toLowerCase() === 'rock' {
        
    }
}