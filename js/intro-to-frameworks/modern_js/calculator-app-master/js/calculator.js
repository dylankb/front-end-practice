function Calculator(skinName) {
  this.skin = skinName;
}

Calculator.prototype.add = function(input1, input2) {
  return input1 + input2;
}

exports.calculatorModule = Calculator;
