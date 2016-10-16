var alphabet = 'abcdefghijklmnopqrstuvwxyz';

function rot13(string) {
  var result = [];
  for(var i = 0; i < string.length; i++) {
    if (string[i].match(/[a-zA-Z]/i) === null) {
      result.push(string[i]);
    } else {
      var char;
      var index = alphabet.indexOf(string[i]);
      if (index > 12 ) {
        char = alphabet[index - 13];
      }
      else {
        char = alphabet[index + 13];
      }
      char = str[i].match(/[A-Z]/i) ? char.toUpperCase() : char;
      result.push(char);
      }
    }
  }
  return result;
}

rot13('hello');
// console.log(rot13(rot13('Teachers open the door, but you must enter by yourself.')));
