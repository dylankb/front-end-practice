// function average(arr) {
//   return sum(arr) / arr.length;
// }

// function sum(arr) {
//   var total = 0;

//   for (var i = 0, len = arr.length; i < len; i++) {
//     total += arr[i];
//   }
//   return total;
// }

// var temperatures = [69, 45, 77, 81, 89]
// console.log(average(temperatures))

// function FizzBuzz() {
//   for (i = 1; i < 100; i++) {
//     var message = "";
//     if (i % 3 === 0 ) {
//       message = "Fizz";
//     }
//     if (i % 5 === 0) {
//       message  += "Buzz";
//     }
//     console.log(message || i)
//   }
// }

// FizzBuzz();


// function randomInt() {
//   return Math.floor(Math.random() * 5 );
// }

// randomInt();

function getMostCostEffectiveSolution(scores, costs, highscore) {
  var cost = 100;
  var index;
  for (i = 0; i < scores.length; i++) {
    if (scores[i] == highestScore) {
      if (cost > costs[i]) {
        index = i;
        cost = cost[i];
      }
    }
  }
  return index
}