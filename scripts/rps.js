/*console.log("Hello World!");

The above code was an initial test */

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

//Play a round of RPS
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

  //finalResult is the total wins from playing five rounds
  let finalResult = 0;


  for(let i=0; i < 5; i++){

    //The player and the computer select a value every round
    playerSelection = prompt("Let's Play Rock, Paper and Scissors!");
    computerSelection = computerPlay();

    //Updating roundResult based on game rules
    roundResult = playRound(playerSelection, computerSelection);
    //iteratively evaluating finalResult
    finalResult = (roundResult === "win" ? ++finalResult : finalResult );

    /*Important lesson learned above is
    that pre-fix (++x) returns the incremented value, while post-fix doesn't */

    /* Using the wrong increment for finalResult lead to it's value not changing
    at all */

    //Testing the value of finalResult
    //console.log(finalResult);

  }

  //Printing the finalResult
  console.log(`You have won ${finalResult} rounds out of 5.`);

}

/*Testing computerPlay() function
console.log(computerPlay()); */

//Testing playRound
/* let playerSelection = prompt("Let's Play Rock, Paper and Scissors!");
let computerSelection = computerPlay();

console.log(playRound(playerSelection, computerSelection)); */

//Run the function game() to play five rounds of RPS
game();
