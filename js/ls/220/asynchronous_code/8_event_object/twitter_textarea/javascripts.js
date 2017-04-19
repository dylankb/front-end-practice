document.addEventListener('click', function() {
  
  var composer = document.querySelector('.composer');
  var textarea = composer.firstElementChild;
  var button = composer.querySelector('button');

  function displayCounterText() {
    var countText = document.querySelector('.counter');
    var charLimit = 140;
    var charCount = textarea.value.split('').length;
    var remaining = charLimit - charCount;
    var invalid = remaining < 0;

    countText.textContent = remaining + ' characters remaining';

    textarea.classList.toggle('invalid', invalid);
    button.disabled = invalid;
  }

  textarea.onkeyup = displayCounterText;

});

// on click textarea, display counter text
// on keyup
  // count characters in textarea
  // update counter text
  // if over 140 char, turn red
