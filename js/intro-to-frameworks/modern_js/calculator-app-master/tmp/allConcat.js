var Calculator = require('./../js/calculator.js').calculatorModule

$(document).ready(function() {
  $('#calculator-form').submit(function(event) {
    event.preventDefault();
    var input1 = parseInt($('#input1').val());
    var input2 = parseInt($('#input2').val());
    var userColor = $('#user_color').val();
    var simpleCalculator = new Calculator(userColor);
    var result = simpleCalculator.add(input1, input2);
    $('#solution').append("<li>" + result + "</li>");
  });
});

$(document).ready(function(){
  $('#signup').submit(function(event){
    event.preventDefault();
    var email = $('#email').val();
    $('#signup').hide();
    $('#solution').prepend('<p>Thank you, ' + email + ' has been added to our list!</p>');
  });
});
