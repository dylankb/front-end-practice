// var friends = ["Bob","Josie","Sam"];
// var enemies = ["Bob","Josie","Sam"];
// enemies === friends

// var friends = ["Bob","Josie","Sam"];
// var friends_clone = friends;
// friends_clone === friends

// function lastInArray(arr) {
//   return arr[arr.length - 1];
// }

// lastInArray(friends);

// var names = ["Steve", "Martha", "Pat"]

// function rollCall(array) {
//   for (var i = 0; i < array.length; i++) {
//     console.log(array[i]);
//   }
// }

// rollCall(names);

// function reverse(arr) {
//   var new_arr = [];
//   for (var i = (arr.length - 1); i > -1; i--) {
//     new_arr.push(arr[i])
//   }
//   return new_arr
// }

// var names = ["Steve", "Martha", "Pat"];

// function find(arr, item) {
//   var position;
//   for (var i = 0; i < arr.length; i++) {
//     if (arr[i] === item) {
//       break;
//     }
//   }
//   return i
// }

// find(names, 'Pat');


// var names = ["Steve", "Martha", "Pat"];

function stringify(arr) {
  var output = "";
  for(i = 0; i < arr.length; i++) {
    output += arr[i];
  }
  return output;
}


