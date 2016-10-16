function push(arr, value) {
  arr[arr.length] = value;
  return arr;
}

var array = [1,2,3];
console.log(push(array, 4));
