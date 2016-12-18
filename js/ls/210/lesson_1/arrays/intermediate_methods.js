// function combinedArray(even, odd) {
//   var new_arr = [];
//   for (i = 0; i < even.length; i++) {
//     new_arr.push(even[i]);
//     new_arr.push(odd[i]);
//   }
//   return new_arr
// }

// var digits = [4, 8, 15, 16, 23, 42];
// var letters = ["A", "L", "V", "A", "R", "H"];

// combinedArray(digits, letters); // Returns [4, "A", 8, "L", 15, "V", 16, "A", 23, "R", 42, "H"]

// var reversed = arr.reverse();
// return arr += reversed;

// function mirroredArray(arr){
//   return arr.concat(arr.slice(0).reverse());
// }

// function joinArray(arr, joiner) {
//   return arr.join(joiner || "");
// }

// joinArray(["a", "b", "c"], "+"); 
// joinArray([1, 4, 1, 5, 9, 2, 7]); 

// function sortDescending(arr) {
//   return arr.sort(compareNumbers);
// }

// function compareNumbers(num1, num2) {
//   return num2 - num1;
// }

// sortDescending([4,5,9,1,32]);

// function sumArrays(arrays) {
//   var new_arr = [],
//       current_sum;

//   for (var i = 0; i < arrays.length; i++) {
//     current_sum = 0;
//     for (var j = 0; j < arrays[i].length; j++) {
//       current_sum += arrays[i][j];
//     }
//     new_arr.push(current_sum);
//   }
//   return new_arr;
// }

// sumArrays([[1,2,3],[4,5,6]]);

// function sumArray(array) {
//   var sum = 0;
//   for (var i = 0; i < array.length; i++) {
//     sum += array[i];
//   }
//   return [sum];
// }

// sumArray([1,2,3]);

// var sums = arrays.map(function(array) {
//   return sumArray(array);
// });

function uniqueElements(arr) {
  var uniques = [];
  for (i = 0; i < arr.length; i++)
    if (uniques.indexOf(arr[i]) === -1) {}
      uniques.push(arr[i]);
    }
  }
  return uniques;
}
    

uniqueElements([1, 2, 4, 3, 4, 1, 5, 4]);