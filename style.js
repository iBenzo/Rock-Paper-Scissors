

/*This is the variables to keep track of the score */
let playerScore = 0;
let computerScore = 0;

/*This is the portion to get the two selections for the player and computer*/ 

function getComputerChoice() {
    const choice = ['rock', 'paper', 'scissors'];
    const randomComputerSelection = choice[(Math.random() * choice.length)| 0];
    return randomComputerSelection
}

/* This is the round function to choose a winner and add to the score*/

function playRound(playerSelection, computerSelection) {
    if(playerSelection === computerSelection){
        return 'It is a tie'
    }
    else if(playerSelection == 'rock'){
        if(computerSelection == 'paper'){
            computerScore++;
            computerScoreDisplayText.innerText = `Computer score: ${computerScore}`;
        }else{
            playerScore++
            playerScoreDisplayText.innerText = `player score: ${playerScore}`; 
        }
    }
    else if(playerSelection == 'paper'){
        if(computerSelection == 'scissors'){
            computerScore++;
            computerScoreDisplayText.innerText = `Computer score: ${computerScore}`;
        }else{
            playerScore++
            playerScoreDisplayText.innerText = `player score: ${playerScore}`;
        }
    }
    else if(playerSelection == 'scissors'){
        if(computerSelection == 'rock'){
            computerScore++;
            computerScoreDisplayText.innerText = `Computer score: ${computerScore}`;
        }else{
            playerScore++
            playerScoreDisplayText.innerText = `player score: ${playerScore}`;
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
    //removes first page
    homePageContainer.remove();
    header.remove();
    btn.remove();
    //creates a new page
    body.append(div);
    div.setAttribute('id', 'playPage');
    //sets up the layout for the playing page
    div.append(divTwo);
    div.append(divFour);
    div.append(divThree);
    divThree.setAttribute('id', 'divThree');
    divTwo.append(head);
    divTwo.setAttribute('id', 'divTwo');
    head.innerText = "Scoreboard";

    divFour.setAttribute('id', 'divFour');
    divFour.append(computerScoreDisplayText);
    computerScoreDisplayText.innerText = `Computer score: ${computerScore}`;
    divFour.append(playerScoreDisplayText);
    playerScoreDisplayText.innerText = `player score: ${playerScore}`;

    divThree.append(buttonRock);
    buttonRock.setAttribute('id', 'rock');
    buttonRock.innerText = 'Rock';
    divThree.append(buttonPaper);
    buttonPaper.setAttribute('id', 'paper');
    buttonPaper.innerText = 'Paper';
    divThree.append(buttonScissors);
    buttonScissors.setAttribute('id', 'scissors');
    buttonScissors.innerText = 'scissors';    

    //Creates the click action of rock selection
    const rockBtn = document.querySelector('#rock');
    rockBtn.addEventListener('click', () =>{
        let playerSelection = 'rock';
        const computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
    })

    //Creates the click action of paper selection
    const paperBtn = document.querySelector('#paper');
    paperBtn.addEventListener('click', () =>{
        let playerSelection = 'paper';
        const computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
    })

    //Creates the click action of scissors selection
    const scissorsBtn = document.querySelector('#scissors');
    scissorsBtn.addEventListener('click', () =>{
        let playerSelection = 'scissors';
        const computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
    })
})