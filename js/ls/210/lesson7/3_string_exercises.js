var firstName = "Bob";
var lastName = "Bobberson";
var fullName = firstName + lastName;

// split into array

console.log(fullName.split(' '));

// search

var language = 'JavaScript';
var idx = language.indexOf('S');

// find character codes

var charCode = language.charCodeAt(idx);

// transform to String

console.log(String.fromCharCode(charCode));

// last letter

console.log(language.lastIndexOf('a'));

// gt/lt on string

var a = 'a';
var b = 'b';

console.log(a > b);  // false

b = 'B';
console.log(a > b);  // true

// substr

var aIndex = language.indexOf('a');
var vIndex = language.indexOf('v');

console.log(language.substr(aIndex, 4));  // avaS
console.log(language.substr(vIndex, 4));  // vaSc

// substring

console.log(language.substr(aIndex, vIndex)); // av

// string methods

var fact1 = 'JavaScript is fun';
var fact2 = 'Kids like it too';

var compoundSentence = fact1 + ' - ' + fact2[0].toLowerCase() + fact2.slice('1');

// pi

var pi = 22/7;
var piString = pi.toString();
piString.lastIndexOf('14');

// calling functions on numbers

// var boxNumber = 356.toString(); // Error
var boxNumber = 356..toString(); // :)
parseInt(boxNumber);

// interaction

function run() {
  var name = prompt("What's your name?");
  if (name.endsWith('!')) {
    var response = "Hi " + name.toUpperCase() + " WHY ARE WE SCREAMING";
    console.log(response);
  } else {
    console.log("Hi" + " name");
  }
}
