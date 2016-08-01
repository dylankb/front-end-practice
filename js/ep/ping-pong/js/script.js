function pingPong(rounds) {
  var messages = [];

  for (index = 1; index <= rounds; index++) {
    var message = "";
    if (index % 3 === 0) { message = "ping" }
    if (index % 5 === 0) { message += "pong" }
    message = message || index;
    messages.push(message);
  }
  return messages;
}

$(document).ready(function() {
  $("form.rounds").submit(function(event) {
    event.preventDefault();

    var numberOfRounds = parseInt($("input#number").val());
    messages = pingPong(numberOfRounds);
    $("ul.rounds").empty()

    messages.forEach(function(message) {
      $("ul.rounds").append("<li>" + message + "</li>");
    });
  });
});