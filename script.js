/*Declare global variables*/
let myPoints = 0;
let computerPoints = 0;
let computerSelection;
let playerSelection;
let computerScore = 0;
const buttons = document.getElementsByClassName("user-choice");

//Ask for user input and return it
function playerPlay(e) {
  if (e.target.id === "rock") {
    playerSelection = "rock";
  } else if (e.target.id === "paper") {
    playerSelection = "paper";
  } else {
    playerSelection = "scissors";
  }

  // let playerChoice = document.querySelector(`div[id="${playerSelection}"`);
  // playerChoice.classList.add("user-choice");
  // playerChoice.addEventListener("animationend", () => {
  //   playerChoice.classList.remove("user-choice");
  // });

  return playerSelection;
}

//Return and animate computer choice
function computerPlay(e) {
  computerRandomNumber = Math.floor(Math.random() * 3);
  let selector;

  switch (computerRandomNumber) {
    case 0:
      computerSelection = "rock";
      selector = "computer-rock";
      break;
    case 1:
      computerSelection = "paper";
      selector = "computer-paper";
      break;
    case 2:
      computerSelection = "scissors";
      selector = "computer-scissors";
      break;
  }
  //Animate computer choice
  animateComputer();

  return computerSelection;

  function animateComputer() {
    let computerBlink = document.querySelector(`div[id="${selector}"`);
    computerBlink.classList.add("blink-me");
    computerBlink.addEventListener("animationend", () => {
      computerBlink.classList.remove("blink-me");
    });
  }
}

//Add event listener for buttons
for (const btn of buttons) {
  btn.addEventListener("click", (e) => {
    playerPlay(e);
    computerPlay(e);
    playRound();
  });
}

/*Decide who won current round*/
function playRound() {
  // playerSelection = playerPlay(e);
  // computerSelection = computerPlay(e);
  let roundMessage;

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

// /*Add 1 point to player's score and display victory message*/
function playerGetsPoint(e) {

  let winAudio = document.getElementById("win");
  winAudio.currentTime = 0;
  winAudio.play();
  
  let playerScore = document.getElementById("myscore");
  myPoints ++
  playerScore.textContent = myPoints;
  
  let infoBoard = document.getElementById("my-infoboard");
  infoBoard.textContent = `${playerSelection} beats ${computerSelection}. You won!`;
  setTimeout(() => {
    infoBoard.textContent = "me";
  }, 1400);

}
/*Add 1 point to computers's score and display defeat message*/
function computerGetsPoint() {

  let looseAudio = document.getElementById("loose");
  looseAudio.currentTime = 0;
  looseAudio.play();

  let computerScore = document.getElementById("computer-score");
  computerPoints ++
  computerScore.textContent = computerPoints

  let infoBoardC = document.getElementById("computer-infoboard");
  infoBoardC.textContent = `${computerSelection} beats ${playerSelection}. You lost!`;
  setTimeout(() => {
    infoBoardC.textContent = "enemy";
  }, 1400);

 
  console.log(roundMessage);
}


function tieHappened() {
  let audioName = document.getElementById('tie');
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




// /*Stop the game when either user or computer has 5 points*/
function game() {

  while (true) {

    if (myPoints === 5) {
      console.log("Congratulations, you won!✌️")
      break;
    }
     else if (computerPoints === 5){
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


