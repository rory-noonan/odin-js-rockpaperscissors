const validChoices = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
  let index = Math.floor(Math.random() * validChoices.length);
  return validChoices[index];
}

function playRound(playerChoice, computerChoice) {
  let playerValue = playerChoice.toUpperCase();
  let computerValue = computerChoice.toUpperCase();
  if (playerValue === computerValue) {
    console.log(
      `Draw! You selected ${playerChoice} and the computer selected ${computerChoice}`
    );
    return null;
  } else if (
    (playerValue === "SCISSORS" && computerValue === "PAPER") ||
    (playerValue === "PAPER" && computerValue === "ROCK") ||
    (playerValue === "ROCK" && computerValue === "SCISSORS")
  ) {
    console.log(`You won! ${playerChoice} beats ${computerChoice}`);
    return true;
  } else {
    console.log(`You lost! ${computerChoice} beats ${playerChoice}`);
    return false;
  }
}

function game() {
  var playerScore = 0;
  var computerScore = 0;
  while (playerScore < 5 && computerScore < 5) {
    let gameWon = playRound(prompt(), getComputerChoice());
    switch (gameWon) {
      case null:
        break;
      case true:
        playerScore++;
        break;
      case false:
        computerScore++;
        break;
    }
    console.log(`Player: ${playerScore} Computer: ${computerScore}`);
  }
}

game();
