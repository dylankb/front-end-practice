function average(arr) {
  return sum(arr) / arr.length;
}

function sum(arr) {
  var total = 0;
  for(var i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}

var temperatures = [5, 10, 15, 20, 25];

console.log(average(temperatures));
