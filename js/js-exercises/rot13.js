var alphabet = 'abcdefghijklmnopqrstuvwxyz'

function encrypt(string) {
  var result = [];
  for(var i = 0; i < string.length; i++) {
    var index = alphabet.indexOf(string[i]);
    if (index > 12) {
      result.push(alphabet[index - 13]);
    } else {
      result.push(alphabet[index + 13]);
    }
  }
  return result;
}

var message = encrypt('hello');
console.log(message);
