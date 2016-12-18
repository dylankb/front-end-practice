function myMap(array, func) {
  var newArr = [];
  // for (var i = 0; i < array.length; i++) {
  //   newArr.push(func(array[i]));
  // }
  array.forEach(function(element) {
    newArr.push(func(element));
  });
  return newArr;
}

var plusOne = function(n) { return n + 1; };

console.log(myMap([1, 2, 3, 4], plusOne));       // [2, 3, 4, 5]
