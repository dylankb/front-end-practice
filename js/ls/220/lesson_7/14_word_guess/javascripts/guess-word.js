randomWord = function() {
  var words = ['some', 'apple', 'pie'];

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
