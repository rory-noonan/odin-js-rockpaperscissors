const validChoices = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
  let index = Math.floor(Math.random() * validChoices.length);
  return validChoices[index];
}

const playerChoice = "paper";
const computerChoice = getComputerChoice();

function playRound(playerChoice, computerChoice) {
  let playerValue = playerChoice.toUpperCase();
  let computerValue = computerChoice.toUpperCase();
  if (playerValue === computerValue) {
    return `Draw! You selected ${playerChoice} and the computer selected ${computerChoice}`;
  }
  // Player wins
  else if (
    (playerValue === "SCISSORS" && computerValue === "PAPER") ||
    (playerValue === "PAPER" && computerValue === "ROCK") ||
    (playerValue === "ROCK" && computerValue === "SCISSORS")
  ) {
    return `You won! ${playerChoice} beats ${computerChoice}`;
  } else {
    return `You lost! ${computerChoice} beats ${playerChoice}`;
  }
}

console.log(playRound(playerChoice, computerChoice));
