console.log("Hello World");

computerPlay = () => {
    let randomNumber = (Math.floor(Math.random()*3) + 1);
    // console.log(randomNumber);
    switch (randomNumber) {
        case 1:
            return 'ROCK';
        case 2:
            return 'PAPER';
        default:
            return 'SCISSORS';
    }
}

const WIN = 1;
const LOSE = 0;
const DRAW = null;

playRound = (playerSelection, computerSelection) => {
    let outcome = null;
        switch (computerSelection) {
            case 'ROCK':
                if (playerSelection === 'PAPER') {
                    outcome = WIN;
                } else if (playerSelection === 'SCISSORS') {
                    outcome = LOSE;
                } else {
                    outcome = DRAW;
                }
                break;
            case 'PAPER':
                if (playerSelection === 'SCISSORS') {
                    outcome = WIN;
                } else if (playerSelection === 'ROCK') {
                    outcome = LOSE;
                } else {
                    outcome = DRAW;
                }
                break;
            default:
                if (playerSelection === 'ROCK') {
                    outcome = WIN;
                } else if (playerSelection === 'PAPER') {
                    outcome = LOSE;
                } else {
                    outcome = DRAW;
                }
        }

        switch (outcome) {
            case 0:
                console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
                break;
            case 1:
                console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
                break;
            default:
                console.log(`It's a tie!`)
        }

        return outcome;
}

game = () => {
    let playerScore = 0;
    let computerScore = 0;
    let playerSelection = null;
    for (let i = 1; i <= 5; i++) {
        console.log(`Round #${i}`)
        let keepGoing = true;
        while (keepGoing) {
            playerSelection = prompt("ROCK / PAPER / SCISSORS: ");
            if (playerSelection) {
                playerSelection = playerSelection.toUpperCase()
                console.log(playerSelection)
            } else if (playerSelection === null) {
                break;
            } else {
                // DO NOTHING
            }
            switch (playerSelection) {
                case 'ROCK':
                case 'PAPER':
                case 'SCISSORS':
                    keepGoing = false;
                    break;
                default:
                    alert('Please enter input correctly.')
                    keepGoing = true;
            }
        }
        let computerSelection = computerPlay();
        let roundOutcome = playRound(playerSelection, computerSelection);
        switch (roundOutcome) {
            case 0:
                computerScore += 1;
                break;
            case 1:
                playerScore += 1;
                break;
            default:
                // DO NOTHING
        }
        console.log(`Player: ${playerScore}`);
        console.log(`Computer: ${computerScore}`);
    }

    if (playerScore === computerScore) {
        console.log(`IT'S A DRAW!`)
    } else if (playerScore > computerScore) {
        console.log('PLAYER WINS! :)')
    } else {
        console.log('COMPUTER WINS! :(')
    }
}

game();