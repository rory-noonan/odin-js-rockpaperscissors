const playButton = document.querySelector("#play");
playButton.addEventListener("click", game);

const resultsDisplay = document.querySelector("#results");
const scoreDisplay = document.querySelector("#score");

const validChoices = ["Rock", "Paper", "Scissors"];
var playerScore = 0;
var computerScore = 0;

function getComputerChoice() {
  let index = Math.floor(Math.random() * validChoices.length);
  return validChoices[index];
}

function playRound(playerChoice, computerChoice) {
  let playerValue = playerChoice.toUpperCase();
  let computerValue = computerChoice.toUpperCase();
  if (playerValue === computerValue) {
    return null;
  } else if (
    (playerValue === "SCISSORS" && computerValue === "PAPER") ||
    (playerValue === "PAPER" && computerValue === "ROCK") ||
    (playerValue === "ROCK" && computerValue === "SCISSORS")
  ) {
    return true;
  } else {
    return false;
  }
}

function refreshScoreDisplay(result) {
  resultsDisplay.textContent = result;
  scoreDisplay.textContent = `\nThe score is now Player ${playerScore} vs. Computer ${computerScore}`;
}

function getPlayerChoice() {
  return "rock"; // Dummy data for now
}

function game() {
  const playerChoice = getPlayerChoice();
  const computerChoice = getComputerChoice();
  let gameWon = playRound(playerChoice, computerChoice);
  let result = "";
  switch (gameWon) {
    case null:
      result = `Draw! You selected ${playerChoice} and the computer selected ${computerChoice}`;
      break;
    case true:
      playerScore++;
      result = `You won! ${playerChoice} beats ${computerChoice}`;
      break;
    case false:
      computerScore++;
      result = `You lost! ${computerChoice} beats ${playerChoice}`;
      break;
  }
  refreshScoreDisplay(result);
}
