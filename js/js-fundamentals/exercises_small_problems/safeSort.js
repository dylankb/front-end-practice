var safeSort = function safeSort(compareFn) {
  return function (arr) {
    // If you were doing something destructive in your sorting callback,
    // you might consider deep cloning with JSON.parse(JSON.stringify(arr))
    // instead of Array.prototype.slice
    return arr.slice().sort(compareFn)
  }
}

var lowToHigh = function lowToHigh(a, b) {
  return a - b;
};

var myArr = [2, 3, 1];
var sortedArr = safeSort(lowToHigh)(myArr);

console.log(myArr) // still [2, 3, 1]
console.log(sortedArr) // [1, 2, 3]
