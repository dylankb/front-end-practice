// function section(arr, number) {
//   var output = [];
//   for(i = 0; i < number; i++) {
//     output.push(arr[i]);
//   }
//   return output;
// }

// section(numbers,3);

// var numbers = [1,2,3,4,5,6];

// function lastNOf(arr, number) {
//   var output = [];
//   var limit = arr.length -1;
//   for(i = limit; i > limit - number; i--) {
//     output.push(arr[i]);
//   }
//   return output;
// }

// reverseSection(numbers,3);

// var numbers = [1,2,3,4,5,6];

// function lastNOf(arr, number) {
//   if (number > arr.length) {
//     return arr;
//   }
//   else {
//     return arr.slice(arr.length - number);
//   }
// }

function endsOf(beginning_arr, ending_arr) {
  var new_arr = [];
  return [beginning_arr[0],ending_arr[ending_arr.length-1]];
}

endsOf([4, 8, 15], [16, 23, 42]);