document.addEventListener('DOMContentLoaded', function() {
  var answer = Math.floor(Math.random() * 100) + 1;
  var form = document.querySelector('form');
  var input = document.getElementById('guess');
  var paragraph = document.querySelector('p');
  var link = document.querySelector('a');
  var guessCount = 0;

  function newGame() {
    guessCount = 0;
    answer = Math.floor(Math.random() * 100) + 1;
    paragraph.textContent = "Guess a number";
  }

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    var guess = Number(input.value);
    var summary = "";
    var message;

    guessCount += 1;
    if (guess > answer) {
      message = "Too high";
    }
    else if (guess < answer) {
      message = "Too low";
    }
    else if (guess === answer) {
      message = "You're correct! ";
      var summary = "It took you " + guessCount + " guesses";
    }

    gameMessage = message + summary;
    paragraph.textContent = gameMessage;
  });

  link.addEventListener('click', function(e) {
    e.preventDefault();
    newGame();
  })
});
