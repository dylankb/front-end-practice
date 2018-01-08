$(document).ready(function() {

  var answer = Math.floor(Math.random() * (100 - 1)) + 1;
  var guessCount = 0;

  console.log(answer);

  $('form').on('submit', function(e) {
    e.preventDefault();
    var $guess = +$('#guess').val();

    var message = "Your guess of " + $guess;

    guessCount+=1;

    console.log(guessCount);
    if (answer > $guess) {
      message += " was too low";
    }
    else if ($guess > answer) {
      message += " was too high";
    }
    else if ($guess === answer) {
      var guessWord = guessCount > 1 ? 'guesses' : 'guess';
      message += " was correct! It took you " + guessCount + " " + guessWord + "."
    }

    $('.message').text(message);
  })

  $('.new-game').on('click', function(e) {
    e.preventDefault();

    var gameMessage = "Guess a number from 1 to 100";
    $('.message').text(gameMessage);

    answer = Math.floor(Math.random() * (100 - 1)) + 1;
    guessCount = 0;
  })
})
