/*console.log("Hello World!");

The above code was an initial test */

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

function playRound(playerSelection, computerSelection){

  /* Changing user input to toLowerCase
  in order to make it case-insensitive */
  playerSelection = playerSelection.toLowerCase();

  //A variable to hold a value based on the player winning or losing
  let result = "draw";

  //In case of invalid input
  if(playerSelection != "rock" && playerSelection != "paper"
      && playerSelection != "scissors"){
        return "Please input either rock, paper or scissors";
      }

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

//Returning the result of the function
  if(result === "draw"){
    return `The match resulted in a ${result}`;
  } else if(result === "win"){
    return `You ${result}, ${playerSelection} beats ${computerSelection}`;
  } else if(result === "lose"){
    return `You ${result}, ${computerSelection} beats ${playerSelection}`;
  }

}

/*Testing computerPlay() function
console.log(computerPlay()); */

//Testing playRound
let playerSelection = prompt("Let's Play Rock, Paper and Scissors!");
let computerSelection = computerPlay();

console.log(playRound(playerSelection, computerSelection));
