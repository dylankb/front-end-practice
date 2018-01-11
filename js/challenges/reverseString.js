// Reverse String (in place)
// https://leetcode.com/problems/reverse-string/description/

function reverseString(string) {
  const stringChars = string.split('');
  let leftPointer = 0;
  let rightPointer = string.length - 1;
  const switchCount = Math.floor(string.length / 2);
  for (let i = 0; i < switchCount; i++) {
    const temp = stringChars[leftPointer];
    stringChars[leftPointer] = stringChars[rightPointer];
    stringChars[rightPointer] = temp;

    if (i < switchCount) {
      leftPointer += 1;
      rightPointer -= 1;
    }
  }

  return stringChars.join('');
}

console.log(reverseString('cat')); // tac
console.log(reverseString('dolphin')); // nphidol / nihplod
