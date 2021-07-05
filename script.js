const btn1 = document.getElementById("rock");
const btn2 = document.getElementById("paper");
const btn3 = document.getElementById("scissors");
const comScore = document.getElementById("Computer-Score");
const userScore = document.getElementById("Player-Score");
const main = document.getElementById('text');
const endGame = document.createElement('h2');
main.classList.add('h2');
const restart = document.getElementById('restart');

const light1 = document.getElementById('lightPR');
const light2 = document.getElementById('lightPP');
const light3 = document.getElementById('lightPS');

const light4 = document.getElementById('lightCR');
const light5 = document.getElementById('lightCP');
const light6 = document.getElementById('lightCS');

const playerLight = document.getElementsByClassName('player-selections')[0];
const compLight = document.getElementsByClassName('comp-selections')[0];

const selectionsDiv = document.getElementById("Selections");
const selections = document.createElement('h2');

function computerPlay() {
    let choice = Math.floor(Math.random() * 3);
    if (choice === 0){
        light4.style.setProperty('--light-color', 'yellow');
        light4.classList.add('lights');
        
        return 'rock';}
    else if (choice === 1) {
        light5.style.setProperty('--light-color', 'yellow');
        light5.classList.add('lights');
        
        return 'paper';}
    else if (choice === 2){
        light6.style.setProperty('--light-color', 'yellow');
        light6.classList.add('lights');
        
        return 'scissors';}
}

function resetLights(){
    light1.style.setProperty('--light-color', 'white');
    light2.style.setProperty('--light-color', 'white');
    light3.style.setProperty('--light-color', 'white');
    light4.style.setProperty('--light-color', 'white');
    light5.style.setProperty('--light-color', 'white');
    light6.style.setProperty('--light-color', 'white');

    light1.classList.add('lights');
    light2.classList.add('lights');
    light3.classList.add('lights');
    light4.classList.add('lights');
    light5.classList.add('lights');
    light6.classList.add('lights');

    playerLight.appendChild(light1);
    playerLight.appendChild(light2);
    playerLight.appendChild(light3);
    compLight.appendChild(light4);
    compLight.appendChild(light5);
    compLight.appendChild(light6);
}

let computerSelection;
let playerSelection;

let computerScore = 0;
let playerScore = 0;

restart.addEventListener('click', () => 
{
    playerScore = computerScore = 0;
    userScore.innerText = '0' + playerScore;
    comScore.innerText = '0' + computerScore;
    endGame.textContent = " ";
    resetLights();
});

btn1.addEventListener('click', () => { 
    resetLights();
    playerSelection = "rock"; 
    computerSelection = computerPlay();
    game(computerSelection, playerSelection);

    light1.style.setProperty('--light-color', 'yellow');
    light1.classList.add('lights');
    
});

btn2.addEventListener('click', () => {
    resetLights(); 
    playerSelection = "paper"; 
    computerSelection = computerPlay();
    game(computerSelection, playerSelection);


    light2.style.setProperty('--light-color', 'yellow');
    light2.classList.add('lights');
   
});

btn3.addEventListener('click', () => { 
    resetLights();
    playerSelection = "scissors"; 
    computerSelection = computerPlay();
    game(computerSelection, playerSelection);

    light3.style.setProperty('--light-color', 'yellow');
    light3.classList.add('lights');
    
});

function game(computer, player){
          
    console.log('Computer selects: ' + computer);
    console.log('Player selects: ' + player);

    let result = playRound(player, computer);
    console.log(result);
    if(result === 'You Lose'){computerScore++;}
    else if (result === 'You Win!'){playerScore++;}
    console.log('Computer: ' + computerScore + '\nPlayer: ' + playerScore);
    comScore.innerText = '0' + computerScore;
    userScore.innerText = '0' + playerScore;
    selectionsDiv.appendChild(selections);

    let winner;
    if(computerScore > playerScore){winner = 'Computer wins the game';}
    else if (computerScore < playerScore){winner = 'You win the game!';}
    else if (computerScore === playerScore){ winner = 'Tie Game!';}
    console.log(winner);

    checkScore();
}

function checkScore(){
    if (playerScore == 5) {
        // endGame.textContent = 'Game Over. Player Wins!';
        // main.appendChild(endGame);
        alert('Game Over. Player Wins!');
        playerScore = 0;
        computerScore = 0;
    }
    if (computerScore == 5) {
        // endGame.textContent = 'Game Over. Computer Wins!';
        // main.appendChild(endGame);
        alert('Gamer Over. Computer Wins!');
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