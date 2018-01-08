function $(id_selector) {
  return document.getElementById(id_selector);
}

window.onload = function() {

  $("calculator").onsubmit = function(e) {

    e.preventDefault();

    var val1 = +$('val1').value;
    var val2 = +$('val2').value;
    var operator = $('operator').value;

    var result = 0;

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

    $('result').innerHTML =result;

  };
}
