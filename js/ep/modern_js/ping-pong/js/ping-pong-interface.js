var Calculator = require('./../js/script.js').calculatorModule;

$(document).ready(function() {
  $("form.rounds").submit(function(event) {
    event.preventDefault();

    var numberOfRounds = parseInt($("input#number").val());
    
    var simpleCalculator = new Calculator("hot pink");
    var messages = simpleCalculator.pingPong(numberOfRounds);
    
    $("ul.rounds").empty()
    messages.forEach(function(message) {
      $("ul.rounds").append("<li>" + message + "</li>");
    });
  });
}); 