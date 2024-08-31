document.addEventListener("DOMContentLoaded", function () {
  let randomNumber = Math.floor(Math.random() * 100) + 1;
  let attemptsLeft = 10;
  const feedback = document.getElementById("feedback");
  const attempts = document.getElementById("attempts");
  const guessInput = document.getElementById("guessInput");
  const checkButton = document.getElementById("checkButton");
  const restartButton = document.getElementById("restartButton");

  checkButton.addEventListener("click", function () {
    const userGuess = parseInt(guessInput.value);
    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
      feedback.textContent = "Please enter a valid number between 1 and 100.";
      return;
    }

    attemptsLeft--;
    attempts.textContent = `You have ${attemptsLeft} chances`;

    if (userGuess === randomNumber) {
      feedback.textContent = `Congratulations! You guessed it right! The number was ${randomNumber}.`;
      endGame();
    } else if (userGuess < randomNumber) {
      feedback.textContent = "Your number is low.";
    } else {
      feedback.textContent = "Your number is high.";
    }

    if (attemptsLeft <= 0) {
      feedback.textContent = `Game Over! The number was ${randomNumber}.`;
      endGame();
    }
  });

  restartButton.addEventListener("click", function () {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attemptsLeft = 10;
    feedback.textContent = "Enter your guess below:";
    attempts.textContent = `You have ${attemptsLeft} chances`;
    guessInput.value = "";
    checkButton.style.display = "inline-block";
    restartButton.style.display = "none";
  });

  function endGame() {
    checkButton.style.display = "none";
    restartButton.style.display = "inline-block";
  }
});
