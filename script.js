let computerSelection = '';
//Randomly returns either rock, paper, or scissors.
 function computerPlay () {
    let float = Math.floor(Math.random() * 3);
    console.log(float)
        if (float === 0) {
            computerSelection = 'Rock';
            return computerSelection;
        }
        else if (float === 1) {
            computerSelection = 'Paper';
            return computerSelection;
        }
        else {
            computerSelection = 'Scissors';
            return computerSelection;
        }
    }
console.log(computerSelection);