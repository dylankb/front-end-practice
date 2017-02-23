var ninjaA = (function() {
  function Ninja(){};
  return new Ninja();
})();

// create ninjaB
var ninjaB = ninjaA.constructor();

console.log(ninjaB.constructor === ninjaA.constructor)    // this should be true
