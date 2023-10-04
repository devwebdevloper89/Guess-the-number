let score = 20;
let highScore = 0;
let secretNumber = Math.round(Math.random() * 20);
const check = document.querySelector(`.check`);

const displayMessage = function (message) {
  document.querySelector(`.message`).textContent = message;
};
const displayScore = function (score) {
  document.querySelector(`.score`).textContent = score;
};

const displayHighScore = function (highScore) {
  document.querySelector(`.highscore`).textContent = highScore;
};
const displayNumber = function (number) {
  document.querySelector(`.number`).textContent = number;
};

check.addEventListener(`click`, function () {
  const guessNumber = Number(document.querySelector(`.userinput`).value);

  if (!guessNumber) {
    displayMessage(`🚫 No Number!`);
  } else if (guessNumber === secretNumber) {
    displayMessage(`✅ Correct Number!`);
    score++;
    displayScore(score);
    if (score > highScore) {
      highScore = score;
      displayHighScore(highScore);
    }
    document.body.style.backgroundColor = `	#7CFC00`;
    document.querySelector(`.number`).textContent = secretNumber;
    check.disabled = true;
  } else if (guessNumber !== secretNumber) {
    if (score > 1) {
      displayMessage(guessNumber > secretNumber ? `📈Too High!` : `📉Too Low!`);
      score--;
      displayScore(score);
    } else {
      displayMessage(`❌ You lose the game!`);
      displayScore(0);
      document.body.style.backgroundColor = `	#FF0000`;
      check.disabled = true;
    }
  }
});
/// AGAIN BUTTON FUNCTIONALITY APPLY...
document.querySelector(`.again`).addEventListener(`click`, function () {
  score = 20;
  let secretNumber = Math.round(Math.random() * 20);
  displayNumber(`?`);
  displayMessage(`Start Guessing...`);
  document.querySelector(`.userinput`).value = ` `;
  displayScore(score);
  document.body.style.backgroundColor = `	#0a0a0a`;
  check.disabled = false;
});
