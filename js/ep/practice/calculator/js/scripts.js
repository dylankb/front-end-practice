var add = function(number1, number2) {
  return number1 + number2;
};

var subtract = function(number1, number2) {
  return number1 - number2;
};

var multiply = function(number1, number2) {
  return number1 * number2;
};

var divide = function(number1, number2) {
  return number1 / number2;
};

$(document).ready(function() {
  $('form#calculator').submit(function(event) {
    event.preventDefault()
    var number1 = parseInt($('#number1').val());
    var number2 = parseInt($('#number2').val());
    var operation = $('#operation').val()

    var result = add(number1, number2);
    var message = operation.concat(" ", number1, " and ", number2, " equals ")
    var output = message + result.toString();

    $('.output').text(output)
  });  
});

// var number1 = parseInt(prompt("Enter a number:"));
// var number2 = parseInt(prompt("Enter another number:"));
// var operation = prompt("Enter an operation");
