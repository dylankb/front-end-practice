function tooFewRemainingCharsInList(string, index, subStringLength) {
  if (string.length < index + subStringLength) { return true; }
}

function isSubstring(string, subString) {
  const stringChars = string.split('');
  const subStringChars = subString.split('');
  const subStringLength = subString.length;
  for (let i = 0; i < stringChars.length; i++) {
    if (tooFewRemainingCharsInList(string, i, subStringLength)) { return -1; }

    if (stringChars.slice(i, i + subStringLength).join('') === subString) {
      return true;
    }
  }
}

console.log(isSubstring('catifornia', 'cat'));
console.log(isSubstring('catifornia', 'catiform'));
console.log(isSubstring('catifornia', 'dog'));
