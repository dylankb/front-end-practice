function pop(arr) {
  value = arr[arr.length-1];
  arr.length = arr.length-1;
  return value;
}

var array = [1,2,3];
popped = pop(array);
console.log(popped);

console.log(array);
