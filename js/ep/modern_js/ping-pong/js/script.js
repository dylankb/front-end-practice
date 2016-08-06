function Calculator(skinName) {
  this.skin = skinName;
}

Calculator.prototpe.pingPong = function(rounds) {
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

exports.calculatorModule = Calculator;