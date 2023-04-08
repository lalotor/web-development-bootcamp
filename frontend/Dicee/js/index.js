function init() {
  var dice1 = rollDice(1);
  var dice2 = rollDice(2);

  if (dice1 > dice2) {
    updateWinner(1);
  } else if (dice2 > dice1) {
    updateWinner(2);
  } else {
    document.querySelector("h1").textContent = "Draw!";
  }
}

function calculateRandomIntegerUpTo(topLimit, isZeroIndexed) {
  return Math.floor(Math.random() * topLimit) + (isZeroIndexed? 0 : 1);
}

function rollDice(diceId) {
  var randomNumber = calculateRandomIntegerUpTo(6, false);
  document.querySelector(".img" + diceId).setAttribute("src", "images/dice" + randomNumber + ".png");
  return randomNumber;
}

function updateWinner(diceId) {
  document.querySelector("h1").textContent = "Player " + diceId + " Wins!";
  document.querySelector(".flag-player" + diceId).classList.remove("hidden");
}