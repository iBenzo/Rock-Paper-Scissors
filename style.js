

/*This is the variables to keep track of the score */
let playerScore = 0;
let computerScore = 0;

/*This is the portion to get the two selections for the player and computer*/ 

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

/* This is the round function to choose a winner and add to the score*/

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
/*This is the whole 5 round game, it runs the selections, and adds the scores and round winner to the console log */
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

/*This is the function to decide the overall game winner */
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

/*This just runs the game function*/
game()