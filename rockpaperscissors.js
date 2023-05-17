const validChoices = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
  let index = Math.floor(Math.random() * validChoices.length);
  return validChoices[index];
}
