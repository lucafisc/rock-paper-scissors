let computerSelection;
let playerSelection;

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
          break;
        case "scissors":
          roundMessage = `${computerSelection} beats ${playerSelection}. You lost!`;
          break;
      }
    } else if (computerSelection == "paper") {
      switch (playerSelection) {
        case "scissors":
          roundMessage = `${playerSelection} beats ${computerSelection} You won!`;
          break;
        case "rock":
          roundMessage = `${computerSelection} beats ${playerSelection} You lost!`;
          break;
      }
    } else if (computerSelection == "scissors") {
      switch (playerSelection) {
        case "rock":
          roundMessage = `${playerSelection} beats ${computerSelection} You won!`;
          break;
        case "paper":
          roundMessage = `${computerSelection} beats ${playerSelection} You lost!`;
          break;
      }
    }
  }
  console.log(roundMessage);
}

function game() {
  for (let i = 0; i < 5; i++) {
    playRound();
  }
}

playRound();

/*game();*/
