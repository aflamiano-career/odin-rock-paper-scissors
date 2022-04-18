const playerButtons = document.querySelectorAll('.js-player-selection button');

const hands = document.querySelector('.js-hands');
const playerHand = document.querySelector('.js-player-hand');
const computerHand = document.querySelector('.js-computer-hand');

const playerShowScore = document.querySelector('.js-player-show-score span');
const computerShowScore = document.querySelector('.js-computer-show-score span');

const roundResult = document.querySelector('.js-round-result');

const resetButton = document.querySelector('.js-btn-reset');

const WIN = 1;
const LOSE = 0;
const DRAW = null;
const POINT_LIMIT = 5;

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
            case 'SCISSORS':
                if (playerSelection === 'ROCK') {
                    outcome = WIN;
                } else if (playerSelection === 'PAPER') {
                    outcome = LOSE;
                } else {
                    outcome = DRAW;
                }
        }
    return outcome;
}

const displayHands = (playerSelection, computerSelection) => {
    hands.removeAttribute('style');
    playerHand.innerText = `Player: ${playerSelection}`;
    computerHand.innerText = `Computer: ${computerSelection}`;
}

const resetScore = () => {
    computerShowScore.innerText = 0;
    playerShowScore.innerText = 0;
    roundResult.setAttribute('style', 'display:none');
    hands.setAttribute('style', 'display:none');
    playerButtons.forEach((button) => {
        button.blur();
    });
}

const calculateScore = (roundOutcome) => {
    let playerScore = parseInt(playerShowScore.innerText);
    let computerScore = parseInt(computerShowScore.innerText);
    roundResult.removeAttribute('style');
    switch (roundOutcome) {
        case LOSE:
            computerScore += 1;
            computerShowScore.innerText = computerScore;
            roundResult.innerText = `You lost this round!`;
            roundResult.classList.add('lose');
            roundResult.classList.remove('win', 'tie');
            break;
        case WIN:
            playerScore += 1;
            playerShowScore.innerText = playerScore;
            roundResult.innerText =`You won this round!`;
            roundResult.classList.add('win');
            roundResult.classList.remove('lose', 'tie');
            break;
        case DRAW:
            roundResult.innerText =`It's a tie!`;
            roundResult.classList.add('tie');
            roundResult.classList.remove('win', 'lose');
    }
    if (computerScore === POINT_LIMIT) {
        alert(`Computer has reached ${POINT_LIMIT}pts! COMPUTER WINS! :(`);
        resetScore();
    } else if (playerScore === POINT_LIMIT) {
        alert(`Player has reached ${POINT_LIMIT}pts! PLAYER WINS! :)`);
        resetScore();
    } else {
        // DO NOTHING
    }
}

game = () => {
    let playerSelection = null;
    let computerSelection = null;
    let roundOutcome = null;
    playerButtons.forEach((button) => { 
        button.addEventListener('click', (e) => {
            playerSelection = e.target.value.toUpperCase();
            computerSelection = computerPlay();
            roundOutcome = playRound(playerSelection, computerSelection);
            displayHands(playerSelection, computerSelection);
            calculateScore(roundOutcome);
        });
    });
    resetButton.addEventListener('click', resetScore);
}

game();