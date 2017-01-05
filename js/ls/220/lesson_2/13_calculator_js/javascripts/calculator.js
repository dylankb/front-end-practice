function $(id_selector) {
  return document.getElementByID(id_selector);
}

$('calculator').onsubmit = function(e) {

  var val1 = $('val1').innerHTML;
  var val2 = $('val2').innerHTML;
  debugger;
  var operator = $('.operator').innerHTML;

  var result;

  if (operator === "+") {
    result = val1 + val2;
  }
  else if (operator === "-") {
    result = val1 - val2;
  }
  else if (operator === "*") {
    result = val1 * val2;
  }
  else if (operator === "/") {
    result = val1 / val2;
  }

  // $('result').innerHTML =

}
