
/*
make Get computer choice function
Make round
    make player selection 
        Needs to take input
        Make input all lowercase
    computer selection  
return a string the displays winner or loser\
ensure it is case insensitive "rock, ROCK, RoCk"
Make game with for loop to go 5 round and display overall winner
*/


function getComputerChoice() {
    const choice = ['rock', 'paper', 'scissors'];
    const randomComputerSelection = choice[(Math.random() * choice.length)| 0];
    return randomComputerSelection
}

function getPlayerChoice() {
    let playerChoice = prompt('Pick either "rock", "paper", or "scissors');
    let updatedPlayerSelection = playerChoice.toLowerCase();
    if(updatedPlayerSelection == 'rock'){
        return updatedPlayerSelection;
    }
    else if (updatedPlayerSelection == 'paper'){
        return updatedPlayerSelection
    }
    else if (updatedPlayerSelection == 'scissors'){
        return updatedPlayerSelection
    }
    else{
        getPlayerChoice()
    }
}

function playRound(playerSelection, computerSelection) {
    if(playerSelection === computerSelection){
        return 'It is a tie'
    }
    else if(playerSelection == 'rock'){
        if(computerSelection == 'paper'){
            computerScore++
            return 'Computer Won Round';
        }else{
            playerScore++
            return 'Player Won Round'
        }
    }
    else if(playerSelection == 'paper'){
        if(computerSelection == 'scissors'){
            computerScore++
            return 'Computer Won Round';
        }else{
            playerScore++
            return 'Player Won Round'
        }
    }
    else if(playerSelection == 'scissors'){
        if(computerSelection == 'rock'){
            computerScore++
            return 'Computer Won Round';
        }else{
            playerScore++
            return 'Player Won Round'
        }
    }
  }

function game(){
    for (let i = 0; i < 5; i++) {
    const playerSelection = getPlayerChoice();
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection))
    console.log(playerScore)
    console.log(computerScore)
    }
    gameWinner()
    console.log(gameWinner())
}

function gameWinner(){
    if(playerScore > computerScore){
        return 'Player wins game!'
    }
    else if (computerScore > playerScore){
        return 'Computer wins game :('
    }
    else{
        return 'It is a tie!'
    }
}

let playerScore = 0;
let computerScore = 0;


game()