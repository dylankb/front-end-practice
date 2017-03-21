var $guesses = $('.guesses');
var $wordSpaces = $('.word-spaces');
var $message = $('.message');
var $apples = $('.apples');
var $replay = $('.replayGame');

var randomWord = function() {
  var words = ['some', 'apple', 'pie']; // IIFE prevents browser console from
                                        // accessing words array
  function randomElementIndex(size) {
    return Math.floor(Math.random() * size);
  }

  return function() {
    var randomIndex = randomElementIndex(words.length);
    var word = words[randomIndex];

    words.splice(randomIndex, 1);
    return word;
  };
}();

function Game() {
  this.incorrectGuesses = 0;
  this.lettersGuessed = [];
  this.allowedGuesses = 6;
  this.correctGuesses = 0;
  this.gameMessage = '';

  this.word = randomWord();
  if (!this.word) {
    this.displayMessage("Sorry, I've run out of words!");
    this.toggleReplayLink(false);
    return this;
  }
  this.word = this.word.split('');
  this.init();
}

Game.prototype = {
  createBlanks: function() {
    var spaces = new Array(this.word.length + 1).join('<span></span>');

    $wordSpaces.find('span').remove();
    $wordSpaces.append(spaces);
  },
  bind: function(context) {
    $(document).on('keypress.game', this.processGuess.bind(this));
    // $(document).on('keypress', function(keypress) { // Longer version
    //   this.processGuess(keypress);
    // }.bind(this));
  },
  correctLetters: function(guess) {
    var indices = [];
    this.word.forEach(function(letter, index) {
      if (letter === guess) {
        indices.push(index);
      }
    });
    return indices;
  },
  revealLetters: function(indices, letter) {
    indices.forEach(function(index) {
      $wordSpaces.find('span').eq(index).text(letter);
    });
  },
  correctGuess: function(letter) {
    var correctLetterIndices = this.correctLetters(letter);

    this.revealLetters(correctLetterIndices, letter);
    this.correctGuesses += correctLetterIndices.length;
  },
  incorrectGuess: function(letter) {
    this.incorrectGuesses += 1;

    $guesses.append('<span>' + letter + '</span');
    $apples.addClass('guess_' + this.incorrectGuesses);
  },
  resetAppleCount: function() {
    $apples.removeClass().addClass('apples');
  },
  setGameStatus: function(status) {
    $('body').removeClass();
    if (status) {
      $('body').addClass(status);
    }
  },
  hasGuessedAllLetters: function() {
    return this.correctGuesses === this.word.length;
  },
  displayResult: function(message, status) {
    this.displayMessage(message);
    this.setGameStatus(status);
    $(document).off('.game');
  },
  displayMessage: function(text) {
    $message.text(text);
  },
  win: function() {
    this.displayResult('You win!', 'win');
    this.toggleReplayLink(true);
  },
  lose: function() {
    this.displayResult('Sorry,! You\'re out of guesses', 'lose');
    this.toggleReplayLink(true);
  },
  toggleReplayLink: function(which) {
    $replay.toggle(which);
  },
  emptyGuesses: function() {
    $guesses.find('span').remove();
  },
  processGuess: function(keypress) {
    var charCode = keypress.which;
    var letter = String.fromCharCode(charCode);

    if (!isValidGuess(charCode, letter, this.lettersGuessed)) { return; }
    this.lettersGuessed.push(letter);

    if (this.word.includes(letter)) {
      this.correctGuess(letter);
    } else {
      this.incorrectGuess(letter);
    }

    if (this.incorrectGuesses === this.allowedGuesses) {
      this.lose();
    }

    if (this.hasGuessedAllLetters()) {
      this.win();
    }

  },
  init: function() {
    this.createBlanks();
    this.bind();
    this.resetAppleCount();
    this.emptyGuesses();
    this.setGameStatus();
    this.displayMessage("");
    this.toggleReplayLink(false);

    return this;
  }
};

function isALetter(charCode) {
  var a = 97;
  var z = 122;

  return charCode >= a && charCode <= z;
}

function isValidGuess(charCode, letter, lettersGuessed) {
  return isALetter(charCode) && !lettersGuessed.includes(letter);
}

game = new Game();

$replay.on("click", function(e) {
  e.preventDefault();
  new Game();
});
