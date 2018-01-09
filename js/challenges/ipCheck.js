function validNotation(ipChars) {
  return ipChars.length === 4;
}

function rangeCheck(ipCharacter) {
  const ipNumber = Number(ipCharacter);
  return (ipNumber <= 255 && ipNumber >= 0);
}

function alphaNumericCheck(ipCharacter) {
  const integer = /\d/;
  return !!ipCharacter.match(integer);
}

function leadingZeroCheck(ipCharacter) {
  const leadingZero = /^0/;
  return !ipCharacter.match(leadingZero);
}

function validNumber(ipCharacter) {
  const isAlphaNumeric = alphaNumericCheck(ipCharacter);
  const noLeadingZero = leadingZeroCheck(ipCharacter);
  const correctRange = rangeCheck(ipCharacter);

  return isAlphaNumeric && noLeadingZero && correctRange;
}

function validNumbersCheck(ipChars) {
  const validNumbers = ipChars.filter(ipCharacter => validNumber(ipCharacter));

  return validNumbers.length === 4;
}

function validIpv4(ipString) {
  const ipChars = ipString.split('.');

  return validNotation(ipChars) && validNumbersCheck(ipChars);
}

console.log(validIpv4('1.1.1.1')); // true
console.log(validIpv4('255.255.255.255')); // true
console.log(validIpv4('1.$.1.1')); // false
console.log(validIpv4('...11')); // false
console.log(validIpv4('.')); // false
