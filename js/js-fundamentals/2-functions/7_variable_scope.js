// 1.

function say() {
  if (false) {
    var a = 'hello from inside a block';
  }

  console.log(a);
}
say();

//> undefined

//5.

a = 'global';

function checkScope() {
  var a = 'local';
  function nested() {
    var a = 'nested';
    function supernested() {
      a = 'supernested';
      return a;
    }

    return supernested();
  }

  return nested();
}

console.log(checkScope());
console.log(a);

// supernested
// global
