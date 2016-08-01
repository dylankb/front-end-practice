random_loc = Math.floor(Math.random() * 5);
var location1 = random_loc;
var location2 = random_loc + 1;
var location3 = random_loc + 2;

var guess;
var guesses = 0;
var hits = 0;

while (hits < 3) {
  guess = prompt("Guess a position for the battleship (1-5)");
  while (guess < 0 || guess > 5) {
    guess = prompt("Please enter a valid guess");
  }
  guesses++;
  if (guess == location1 || guess == location2 || guess == location3) {
    alert("A hit!");
    hits++;
    if (hits == 3) {
      alert("You sunk their battleship with" + " " + guesses + " guesses!");
    }
  }
  else {
    alert("A miss!");
  }
}
var stats = "You had an accuracy of" + (hits/guesses) * 100 + " %!";
alert(stats);




