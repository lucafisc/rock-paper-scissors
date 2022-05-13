/*Declare global variables*/
let myPoints = 0;
let computerPoints = 0;
let computerSelection;
let playerSelection;
let computerScore = 0;

//Hide gameover screen
function startGame() {
  let startScreen = document.getElementById("startgame");
  let endScreen = document.getElementById("gameover");
  startScreen.style.display = "flex";
  endScreen.style.display = "none";
}

startGame();

//Ask for user input and return it
function playerInput(e) {
  if (e.target.id === "rock") {
    playerSelection = "rock";
  } else if (e.target.id === "paper") {
    playerSelection = "paper";
  } else {
    playerSelection = "scissors";
  }
  return playerSelection;
}
//Return and animate computer choice
function computerInput(e) {
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
  return computerSelection;
}
//Animate computer choice
function animateComputer() {
  let computerBlink = document.querySelector(
    `div[data-selector="${computerSelection}"`
  );
  computerBlink.classList.add("blink-me");
  computerBlink.addEventListener("animationend", () => {
    computerBlink.classList.remove("blink-me");
  });
}

//Add event listener for buttons
const buttons = document.getElementsByClassName("user-choice");
for (const btn of buttons) {
  btn.addEventListener("click", (e) => {
    playerInput(e);
    computerInput(e);
    animateComputer();
    playRound();
    checkScore();
  });
}

//Decide who won current round
function playRound() {
  if (playerSelection == computerSelection) {
    tieHappened();
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

//Add 1 point to player's score and display victory message
function playerGetsPoint(e) {
  myPoints++;
  let winAudio = document.getElementById("win");
  winAudio.currentTime = 0;
  winAudio.play();

  updatePlayerScore();

  let infoBoard = document.getElementById("my-infoboard");
  infoBoard.textContent = `${playerSelection} beats ${computerSelection}. You won!`;
  setTimeout(() => {
    infoBoard.textContent = "me";
  }, 1400);

  return myPoints;
}
function updatePlayerScore() {
  let playerScore = document.getElementById("myscore");

  playerScore.textContent = myPoints;
}

//Add 1 point to computers's score and display defeat message
function computerGetsPoint() {
  let looseAudio = document.getElementById("loose");
  looseAudio.currentTime = 0;
  looseAudio.play();
  computerPoints++;
  updateComputerScore();

  let infoBoardC = document.getElementById("computer-infoboard");
  infoBoardC.textContent = `${computerSelection} beats ${playerSelection}. You lost!`;
  setTimeout(() => {
    infoBoardC.textContent = "enemy";
  }, 1400);

  return computerPoints;
}
function updateComputerScore() {
  let computerScore = document.getElementById("computer-score");

  computerScore.textContent = computerPoints;
}
//Display tie and continue game
function tieHappened() {
  let audioName = document.getElementById("tie");
  audioName.currentTime = 0;
  audioName.play();

  let infoBoard = document.getElementById("my-infoboard");
  infoBoard.textContent = `a tie!`;
  setTimeout(() => {
    infoBoard.textContent = "me";
  }, 1400);

  let infoBoardC = document.getElementById("computer-infoboard");
  infoBoardC.textContent = `a tie!`;
  setTimeout(() => {
    infoBoardC.textContent = "enemy";
  }, 1400);
}
//Check if someone won
function checkScore() {
  if (myPoints >= 5 || computerPoints >= 5) {
    gameOver();
  }
}
//Stop game, reset score and show gameover screen
function gameOver() {
  let startScreen = document.getElementById("startgame");
  let endScreen = document.getElementById("gameover");
  startScreen.style.display = "none";
  endScreen.style.display = "flex";
  let gameMessage = document.getElementById("endgame-message");
  let gameSubText = document.getElementById("endgame-subtext");

  if (myPoints > computerPoints) {
    gameMessage.textContent = "You won!";
    gameSubText.textContent = "congratulations!";
  } else {
    gameMessage.textContent = "You lost!";
    gameSubText.textContent = "better luck next time";
  }

  myPoints = 0;
  computerPoints = 0;
  updatePlayerScore();
  updateComputerScore();
}
//Play again button
let playAgain = document.getElementById("new-game-btn");
playAgain.addEventListener("click", () => {
  startGame();
});
