/*console.log("Hello World!");

The above code was an initial test */

function computerPlay(){
  let choice = 0;

  //Give choice a random value between 0 and 2
  choice = Math.floor(Math.random()*3);

  //Switch statement that outputs either Rock, Paper or Scissors
  switch(choice){
    case 0:
      console.log("Rock");
      break;
    case 1:
      console.log("Paper");
      break;
    case 2:
      console.log("Scissors");
      break;
    default:
      console.log("Error");
  }
}

//Testing computerPlay() function
computerPlay();
