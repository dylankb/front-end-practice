var cursor;
var focused;

document.addEventListener('DOMContentLoaded', function() {
  var textField = document.querySelector('.text-field');

  textField.addEventListener('click', function(event) {
    event.stopPropagation();
    textField.classList.add('focused');
    cursor = setInterval(function() {
      textField.classList.toggle('cursor');
    }, 500);
    focused = true;
  });
});

document.addEventListener('click', function(event) {
  clearInterval(cursor);
  var textField = document.querySelector('.text-field');
  textField.classList.remove('cursor');
  textField.classList.remove('focused');
});

// keypress e.which is case sensitive, but does not read backspace

// document.addEventListener('keypress', function(e) {
//   var content = document.querySelector('.content');
//
//
//   var keypress = String.fromCharCode(e.which);
//   content.textContent += keypress;
// });

document.addEventListener('keyup', function(e) {
  var content = document.querySelector('.content');
  var contentText = content.textContent;

  if (!focused) { return; }
  if (e.which === 8) {
    content.textContent = contentText.substr(0, contentText.length - 1);
  }
  else if (event.key.length === 1) {
    content.textContent += e.key;
  }
});
