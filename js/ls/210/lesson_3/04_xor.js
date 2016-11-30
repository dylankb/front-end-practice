// First attempt

// function isXor(first, second) {
//   truthyCount = 0;
//   first ? truthyCount += 1 : truthyCount
//   second ? truthyCount += 1 : truthyCount
//   if (truthyCount === 1) return true;
//   return false;
// }

// Solution
function isXor(value1, value2) {
  return Boolean(a) != Boolean(b);
}

console.log(isXor(false, true));
console.log(isXor(true, false));     // true
console.log(isXor(false, false));    // false
console.log(isXor(true, true));      // false
