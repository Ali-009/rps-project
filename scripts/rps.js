
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

function playerPlay(){

  let playerSelection;

  playerSelection = prompt("Let's Play Rock, Paper, Scissors!");

  //Recursion in case of invalid input, otherwise return input
  if(playerSelection !== "rock" && playerSelection !== "paper"
    && playerSelection !== "scissors"){
      alert("Please Insert Rock Paper Or Scissors");
      return playerPlay();
  } else{
    return playerSelection.toLowerCase();;
  }

}

//The function that holds the game's basic rules
function playRound(playerSelection, computerSelection){

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

  return result;

}

function printRoundResult(playerSelection, computerSelection, result){

  if(result === "draw"){
    console.log(`The match resulted in a ${result}`);
  } else if(result === "win"){
    console.log(`You ${result}, ${playerSelection} beats ${computerSelection}`);
  } else if(result === "lose"){
    console.log(`You ${result}, ${computerSelection} beats ${playerSelection}`);
  }

}

function determineWinner(playerResult, computerResult){

  if(playerResult > computerResult){
    console.log("Congrats! You won.");
  } else if (playerResult < computerResult){
    console.log("You lost. Better luck next time.");
  } else {
    console.log("It's a tie!");
  }
}

//This function runs five rounds of the game
function game(){

  let playerSelection;
  let computerSelection;

  let playerResult = 0;
  let computerResult = 0;
  let roundResult;

  for(let i=0; i < 5; i++){

    playerSelection = playerPlay();
    computerSelection = computerPlay();

    roundResult = playRound(playerSelection, computerSelection);
    printRoundResult(playerSelection, computerSelection, roundResult);

    if(roundResult === "win"){
      playerResult++;
    } else if(roundResult === "lose") {
      computerResult++;
    } else {
      continue;
    }
  }

  console.log(`Your result is ${playerResult}, compared to the computer's result of ${computerResult}`);

  determineWinner(playerResult, computerResult);

}

//Run the function game() to play five rounds of RPS
game();
