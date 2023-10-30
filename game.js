let currentPlayer = 1;
let round = 0;

document.querySelector(`.winner1`).style.display = "none";
document.querySelector(`.winner2`).style.display = "none";

const dice = document.querySelector(".dice");
dice.style.display = "none";

const roll = document.querySelector(".roll");
const newGame = document.querySelector(".newGame");

let player1TotalScore = Number(document.getElementById("#player1-total-score"));
let player2TotalScore = Number(document.getElementById("#player2-total-score"));

roll.addEventListener("click", (e) => {
  if (round == 6) {
    round = 0;
    dice.style.display = "none";
    // set to initial status
    //player 1 initial status
    player1TotalScore = 0;
    document.querySelector(`.winner1`).style.display = "none";
    document.querySelector(`.winner2`).style.display = "none";
    document.getElementById(`player1-current-score`).textContent = 0;
    document.getElementById(`player1-total-score`).textContent =
      player1TotalScore;
    document.querySelector(`.panel-1`).classList.add("active");

    //player 2 initial status
    player2TotalScore = 0;
    document.getElementById(`player2-current-score`).textContent = 0;
    document.getElementById(`player2-total-score`).textContent =
      player2TotalScore;
    document.querySelector(`.panel-2`).classList.remove("active");

    return;
  } else {
    round++;
  }

  // give a random number from 1 - 6
  let num = Math.floor(Math.random() * 6) + 1;

  // show corresponding picture of dice
  dice.setAttribute("src", `dice${num}.png`);
  dice.style.display = "block";

  // show the current score
  document.getElementById(`player${currentPlayer}-current-score`).textContent =
    num;

  if (currentPlayer == 1) {
    // calculate total score
    player1TotalScore += num;
    document.getElementById(`player1-total-score`).textContent =
      player1TotalScore;

    // change current player to next player
    document
      .querySelector(`.panel-${currentPlayer}`)
      .classList.remove("active");
    currentPlayer = 2;
    document.querySelector(`.panel-${currentPlayer}`).classList.add("active");
  } else {
    // calculate total score
    player2TotalScore += num;
    document.getElementById(`player2-total-score`).textContent =
      player2TotalScore;

    // change current player to next player
    document
      .querySelector(`.panel-${currentPlayer}`)
      .classList.remove("active");
    currentPlayer = 1;
    document.querySelector(`.panel-${currentPlayer}`).classList.add("active");
  }

  if (round == 6) {
    // shows the winner
    if (player1TotalScore == player2TotalScore) {
      document.querySelector(`.winner1`).style.display = "block";
      document.querySelector(`.winner2`).style.display = "block";
    } else if (player1TotalScore > player2TotalScore) {
      document.querySelector(`.winner1`).style.display = "block";
    } else {
      document.querySelector(`.winner2`).style.display = "block";
    }
  }
});

newGame.addEventListener("click", () => {
  round = 0;
  dice.style.display = "none";
  // set to initial status
  //player 1 initial status
  player1TotalScore = 0;
  document.querySelector(`.winner1`).style.display = "none";
  document.querySelector(`.winner2`).style.display = "none";
  document.getElementById(`player1-current-score`).textContent = 0;
  document.getElementById(`player1-total-score`).textContent =
    player1TotalScore;
  document.querySelector(`.panel-1`).classList.add("active");

  //player 2 initial status
  player2TotalScore = 0;
  document.getElementById(`player2-current-score`).textContent = 0;
  document.getElementById(`player2-total-score`).textContent =
    player2TotalScore;
  document.querySelector(`.panel-2`).classList.remove("active");
});
