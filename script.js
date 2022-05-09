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
      (playerSelection === "rock") |
      (playerSelection === "paper") |
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

/*Add 1 point to player's score*/
function playerGetsPoint() {
  playerScore++;
}
/*Add 1 point to computers's score*/
function computerGetsPoint() {
  computerScore++;
}

/*Decide who won current round*/
function playRound() {
  computerSelection = computerPlay();
  playerSelection = playerPlay();
  let roundMessage;

  if (playerSelection == computerSelection) {
    roundMessage = "It's a tie!";
  } else if (playerSelection !== computerSelection) {
    if (computerSelection == "rock") {
      switch (playerSelection) {
        case "paper":
          roundMessage = `${playerSelection} beats ${computerSelection}. You won!`;
          playerGetsPoint();
          break;
        case "scissors":
          roundMessage = `${computerSelection} beats ${playerSelection}. You lost!`;
          computerGetsPoint();
          break;
      }
    } else if (computerSelection == "paper") {
      switch (playerSelection) {
        case "scissors":
          roundMessage = `${playerSelection} beats ${computerSelection} You won!`;
          playerGetsPoint();
          break;
        case "rock":
          roundMessage = `${computerSelection} beats ${playerSelection} You lost!`;
          computerGetsPoint();
          break;
      }
    } else if (computerSelection == "scissors") {
      switch (playerSelection) {
        case "rock":
          roundMessage = `${playerSelection} beats ${computerSelection} You won!`;
          playerGetsPoint();
          break;
        case "paper":
          roundMessage = `${computerSelection} beats ${playerSelection} You lost!`;
          computerGetsPoint();
          break;
      }
    }
  }
  console.log(roundMessage);
}

/*Stop the game when either user or computer has 5 points*/
function game() {
  do {
    playRound();
    console.log(
      `Player Score = ${playerScore}. Computer Score = ${computerScore}`
    );
  } while (playerScore <= 5 || computerScore <= 5);

  console.log("Game Over!");
}

game();
