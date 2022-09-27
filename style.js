

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
/*game()
*/

/*This creates the buttons action and removes the homepage content*/
const body = document.body;
const div = document.createElement('div');
const divTwo = document.createElement('div');
const divThree = document.createElement('div');
const divFour = document.createElement('div');
const buttonRock = document.createElement('button');

const buttonPaper = document.createElement('button');
const buttonScissors = document.createElement('button');
const computerScoreDisplayText = document.createElement('p');
const playerScoreDisplayText = document.createElement('p');
const head = document.createElement('h1');
const header = document.querySelector('#title');
const btn = document.querySelector('#playButton');
const homePageContainer = document.querySelector('#homePage');
btn.addEventListener('click',() => {
    homePageContainer.remove();
    header.remove();
    btn.remove();

    body.append(div);
    div.setAttribute('id', 'playPage');

    div.append(divTwo);
    div.append(divThree);
    divThree.setAttribute('id', 'divThree');

    divTwo.append(head);
    head.innerText = "Scoreboard";
    divTwo.append(divFour);
    
    divFour.setAttribute('id', 'divFour');
    divFour.append(computerScoreDisplayText);
    computerScoreDisplayText.innerText = 'Computer score:';
    divFour.append(playerScoreDisplayText);
    playerScoreDisplayText.innerText = 'player score:';

    divThree.append(buttonRock);
    buttonRock.setAttribute('id', 'rock');
    divThree.append(buttonPaper);
    buttonPaper.setAttribute('id', 'paper');
    divThree.append(buttonScissors);
    buttonScissors.setAttribute('id', 'scissors');
})