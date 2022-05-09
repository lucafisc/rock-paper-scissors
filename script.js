/*Declare global variables*/

let computerSelection;
let playerSelection;
let playerScore = 0;
let computerScore = 0;

/*Ask for user input and check if it is rock, paper or scissors*/
function playerPlay() {
  while (true) {
    let userInput = prompt("Choose between Rock, paper or scissors!");
    playerSelection = userInput.toLowerCase();
    if (
      (playerSelection === "rock") ||
      (playerSelection === "paper") ||
      (playerSelection === "scissors")
    ) {
      break;
    }
  }
  return playerSelection;
}

/*Make computer randomly choose between rock, paper or scissors and print the result*/
function computerPlay() {
  computerRandomNumber = Math.floor(Math.random() * 3);

  switch (computerRandomNumber) {
    case 0:
      computerSelection = "rock";
      break;
    case 1:
      computerSelection = "paper";
      break;
    case 2:
      computerSelection = "scissors";
      break;
  }
  console.log(`Computer chooses ${computerSelection}`);
  return computerSelection;
}

/*Add 1 point to player's score and display victory message*/
function playerGetsPoint() {
  playerScore++;
  roundMessage = `${playerSelection} beats ${computerSelection}. You won!`;
  console.log(roundMessage);
}
/*Add 1 point to computers's score and display defeat message*/
function computerGetsPoint() {
  computerScore++;
  roundMessage = `${computerSelection} beats ${playerSelection}. You lost!`;
  console.log(roundMessage);
}

/*Decide who won current round*/
function playRound() {
  playerSelection = playerPlay();
  computerSelection = computerPlay();
  let roundMessage;

  if (playerSelection == computerSelection) {
    roundMessage = "It's a tie!";
    console.log(roundMessage);
  } else if (playerSelection !== computerSelection) {
    if (computerSelection == "rock") {
      switch (playerSelection) {
        case "paper":
          playerGetsPoint();
          break;
        case "scissors":
          computerGetsPoint();
          break;
      }
    } else if (computerSelection == "paper") {
      switch (playerSelection) {
        case "scissors":
          playerGetsPoint();
          break;
        case "rock":
          computerGetsPoint();
          break;
      }
    } else if (computerSelection == "scissors") {
      switch (playerSelection) {
        case "rock":
          playerGetsPoint();
          break;
        case "paper":
          computerGetsPoint();
          break;
      }
    }
  }

}

/*Stop the game when either user or computer has 5 points*/
function game() {

  while (true) {
    playRound();
    console.log(`Player Score = ${playerScore}. Computer Score = ${computerScore}`);

    if (playerScore === 5) {
      console.log("Congratulations, you won!✌️")
      break;
    }
     else if (computerScore === 5){
      console.log("Game over. Better luck next time!🥲")
      break;
     }
   
    }

    restartGame();
}

/*Restart the game and reset the scores*/
function restartGame() {
 let newGame = confirm("Play again?")
 if (newGame) {
   playerScore = 0;
   computerScore = 0;
   game();
 }
 else {
   console.log("See you next time!")
 }
}

game();
