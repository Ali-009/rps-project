
//generate a random value for Rock, Paper, Scissors
function computerPlay(){
  let choice = 0;

  //Give choice a random value between 0 and 2
  choice = Math.floor(Math.random()*3);

  //Switch resultment that outputs either Rock, Paper or Scissors
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

//Play a round. Note that this function never takes invalid values as arguments
//This is the function that basically holds the rules of the game
function playRound(playerSelection, computerSelection){


  //A variable to hold a value based on the player winning or losing
  let result;

  //The basic rules of the game written in if-else resultments
  if(playerSelection === computerSelection){

    result = "draw";

  } else if(playerSelection === "rock"){

    result = (computerSelection === "scissors" ? "win" : "lose");

  } else if(playerSelection === "paper"){

    result = (computerSelection === "rock" ? "win" : "lose");

  } else if(playerSelection === "scissors"){

    result = (computerSelection === "paper" ? "win" : "lose");

  }

//Returning the result of the function as a string
if(result === "draw"){
    console.log(`The match resulted in a ${result}`);
  } else if(result === "win"){
    console.log(`You ${result}, ${playerSelection} beats ${computerSelection}`);
  } else if(result === "lose"){
    console.log(`You ${result}, ${computerSelection} beats ${playerSelection}`);
  }

  //Returning the result
  return result;

}

//This function runs five rounds of the game
function game(){

  let playerSelection;
  let computerSelection;

  //roundResult stores the value of every round as a string
  let roundResult;

  //The player and computer total wins from playing five rounds
  let playerResult = 0;
  let computerResult = 0;


  for(let i=0; i < 5; i++){

    //The player and the computer select a value every round
    //The player's value is tested
    do{

    playerSelection = prompt("Let's Play Rock, Paper, Scissors!");
    //setting the selection to lowercase
    playerSelection = playerSelection.toLowerCase();

    //Anything that isn't valid is equivalent to undefined
    if(playerSelection != "rock" && playerSelection != "paper"
        && playerSelection != "scissors"){
          playerSelection = undefined;
          alert("Please insert rock, paper, or scissors")
        }

    }while(playerSelection === undefined);

    computerSelection = computerPlay();

    //Updating roundResult based on game rules
    roundResult = playRound(playerSelection, computerSelection);

    //if the round is won by the player, increment their result
    //otherwise if it was lost, increment the computer's result
    //else return nothing
    roundResult === "win" ? playerResult++ :
    roundResult === "lose" ? computerResult++ :
    null;

  }

  console.log(`Your result is ${playerResult}, compared to the computer's result of ${computerResult}`);

  if(playerResult > computerResult){
    console.log("Congrats! You won.");
  } else if (playerResult < computerResult){
    console.log("You lost. Better luck next time.");
  } else {
    console.log("It's a tie!");
  }

}

//Run the function game() to play five rounds of RPS
game();
