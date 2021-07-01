
//generate a random value for Rock, Paper, Scissors
function computerPlay(){
  let choice = 0;

  //Give choice a random value between 0 and 2
  choice = Math.floor(Math.random()*3);

  switch(choice){
    case 0:
      return "rock";
      break;
    case 1:
      return "paper";
      break;
    case 2:
      return "scissors";
      break;
    default:
      return "error";
  }
}

//The function that holds the game's basic rules
function playRound(e){

  let playerScore = document.querySelector("#playerScore");
  let computerScore = document.querySelector("#computerScore");

  if(+playerScore.textContent >= 5 || +computerScore.textContent >= 5){
    playerScore.textContent = "0";
    computerScore.textContent = "0";
  }

  let computerSelection = computerPlay();
  let playerSelection = e.target.textContent.toLowerCase();

  let result;

  if(playerSelection === computerSelection){
    result = "draw";
  } else if(playerSelection === "rock"){
    result = (computerSelection === "scissors" ? "win" : "lose");
  } else if(playerSelection === "paper"){
    result = (computerSelection === "rock" ? "win" : "lose");
  } else if(playerSelection === "scissors"){
    result = (computerSelection === "paper" ? "win" : "lose");
  }

  printRoundResult(playerSelection, computerSelection, result);
  updateScore(result);

}

function printRoundResult(playerSelection, computerSelection, result){

  let resultDiv = document.querySelector('#results');

  let resultText = document.querySelector('#results > p');

  if(resultText){
    resultDiv.removeChild(resultText);
  }

  resultText = document.createElement('p');


  if(result === "draw"){
    resultText.textContent = `The match resulted in a ${result}`;
  } else if(result === "win"){
    resultText.textContent = `You ${result}, ${playerSelection} beats ${computerSelection}`;
  } else if(result === "lose"){
    resultText.textContent = `You ${result}, ${computerSelection} beats ${playerSelection}`;
  }

  resultDiv.appendChild(resultText);

}

function updateScore(result){

  let playerScore = document.querySelector("#playerScore");
  let computerScore = document.querySelector("#computerScore");

  if(result === "win"){
    playerScore.textContent = (+playerScore.textContent) + 1;
  } else if(result === "lose"){
    computerScore.textContent = (+computerScore.textContent) + 1;
  }

  checkWinner(playerScore, computerScore);

}

function checkWinner(playerScore, computerScore){

  let winner = document.createElement('p');
  winner.setAttribute('id', "winner");

  if(playerScore.textContent === "5"){
    winner.textContent = "Congrats! You Win";
  } else if(computerScore.textContent === "5"){
    winner.textContent = "The computer won. Better luck next time.";
  }

  document.querySelector("#score").appendChild(winner);

}


function game(){

  let computerSelection = computerPlay();

  let buttons = document.querySelectorAll('button');


  buttons.forEach(
    (button) => button.addEventListener('click', playRound)
  );

}

game();
