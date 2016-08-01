// Take somebody's name and say a greeting to them;
// Write a function to subtract two numbers;
// Now one to multiply two numbers. Then create a new function called threeTimes to multiply three numbers together.
// Now write one to divide two numbers. Then write a new function called remainder to find the remainder of two numbers.
// Prompt the user to enter their age, another prompt to enter their name and another prompt to enter their favorite food. Pass these as arguments to a function that returns a sentence combining 
// all of this information. Then display the returned string with an alert.

multiply = function(a, b) {
  return a * b;
};

threeSeven = function(a, b, c) {
  return a * 7;
};

divide = function(a, b) {
  return a / b;
};

remainder = function(a, b) {
  alert(a % b);
}

remainder(3,2);

var name = prompt("Hi, what's your name?") ;

var food = prompt("What's your favorite food?");
var age = prompt("How old are you");
newAge = parseInt(age) + 1

var nameIntro = "So Mr. "
var foodIntro = "I hear you like "
var ageIntro = " and you're almost "


var summary = function() {
  alert(nameIntro + name + foodIntro + food + ageIntro + newAge)
}

summary()