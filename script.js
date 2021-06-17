const btn1 = document.getElementById("rock");
const btn2 = document.getElementById("paper");
const btn3 = document.getElementById("scissors");
const comScore = document.getElementById("Computer-Score");
const userScore = document.getElementById("Player-Score");
const main = document.getElementById('text');
const endGame = document.createElement('h2');
main.classList.add('h2');
const restart = document.getElementById('restart');

function computerPlay() {
    let choice = Math.floor(Math.random() * 3);
    if (choice === 0){ return 'rock';}
    else if (choice === 1) {return 'paper';}
    else if (choice === 2){ return 'scissors';}
}

let computerSelection;
let playerSelection;

let computerScore = 0;
let playerScore = 0;

restart.addEventListener('click', () => 
{
    playerScore = computerScore = 0;
    userScore.innerText = "Player Score: " + playerScore;
    comScore.innerText = "Computer Score: " + computerScore;
    endGame.textContent = " ";
});

btn1.addEventListener('click', () => { 
    playerSelection = "rock"; 
    computerSelection = computerPlay();
    game(computerSelection, playerSelection);
    
});

btn2.addEventListener('click', () => { 
    playerSelection = "paper"; 
    computerSelection = computerPlay();
    game(computerSelection, playerSelection);
});

btn3.addEventListener('click', () => { 
    playerSelection = "scissors"; 
    computerSelection = computerPlay();
    game(computerSelection, playerSelection);
});

function game(computer, player){
          
    console.log('Computer selects: ' + computerSelection);
    console.log('Player selects: ' + playerSelection);

    let result = playRound(playerSelection, computerSelection);
    console.log(result);
    if(result === 'You Lose'){computerScore++;}
    else if (result === 'You Win!'){playerScore++;}
    console.log('Computer: ' + computerScore + '\nPlayer: ' + playerScore);
    comScore.innerText = '0' + computerScore;
    userScore.innerText = '0' + playerScore;

    let winner;
    if(computerScore > playerScore){winner = 'Computer wins the game';}
    else if (computerScore < playerScore){winner = 'You win the game!';}
    else if (computerScore === playerScore){ winner = 'Tie Game!';}
    console.log(winner);

    checkScore();
}

function checkScore(){
    if (playerScore == 5) {
        endGame.textContent = 'Game Over. Player Wins!';
        main.appendChild(endGame);
        playerScore = 0;
        computerScore = 0;
    }
    if (computerScore == 5) {
        endGame.textContent = 'Game Over. Computer Wins!';
        main.appendChild(endGame);
        playerScore = 0;
        computerScore = 0;
    }
}

function playRound(playerSelection, computerSelection){
    if(playerSelection ==='rock') {
        if(computerSelection ==='paper'){
            return 'You Lose';
        }
        else if (computerSelection === 'rock'){
            return 'Tie Game!';
        }
        else if (computerSelection === 'scissors'){
            return 'You Win!';
        }
    }
    
    else if(playerSelection === 'paper') {
        if(computerSelection === 'paper'){
            return 'Tie Game!';
        }
        else if (computerSelection === 'rock'){
            return 'You Win!';
        }
        else if (computerSelection === 'scissors'){
            return 'You Lose';
        }
    }

    else if(playerSelection ==='scissors') {
        if(computerSelection==='paper'){
            return 'You Win!';
        }
        else if (computerSelection === 'rock'){
            return 'You Lose';
        }
        else if (computerSelection === 'scissors'){
            return 'Tie Game!';
        }
    }
}