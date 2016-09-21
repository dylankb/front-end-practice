var Calculator = require('./../js/calculator.js').calculatorModule

$(document).ready(function() {
  $('#calculator-form').submit(function(event) {
    event.preventDefault();
    var input1 = parseInt($('#input1').val());
    var input2 = parseInt($('#input2').val());
    var userColor = $('#user_color').val();
    var simpleCalculator = new Calculator(userColor);
    var result = simpleCalculator.add(input1, input2);
    $('form#calculator-form').css("background", "green");
    $('#solution').append("<li>" + result + "</li>");

  });
});
