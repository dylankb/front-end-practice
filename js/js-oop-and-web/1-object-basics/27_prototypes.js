// function getDefiningObject(object, propKey) {
//   while (object && !object.hasOwnProperty(propKey)) {
//     console.log(Object.prototype.toString);
//   }
//   return object;
// }
//
// var foo = {a: 1, b: 2};
// var bar = Object.create(foo);
// var baz = Object.create(bar);
// var qux = Object.create(baz);
//
// bar.c = 3;
//
// console.log(getDefiningObject(qux, 'c') === bar);
function barsProperties(object) {
  for (var prop in object) {
    if (object.hasOwnProperty(prop)) {
      console.log(object[prop]);
    }
  }
}

var result = Object.create(Object.getPrototypeOf(object)); // 0

// 3
// [Function]

function shallowCopy(object) {
  // var newObject = object;
  // var protoProperties = Object.getPrototypeOf(object);
  var result = Object.create(Object.getPrototypeOf(object));
  for (var prop in object) {
    if (object.hasOwnProperty(prop)) {
      result[prop] = object[prop];
    }
  }
  // return object;
  return result;
}

var foo = {a: 1, b: 2};
var bar = Object.create(foo);

bar.c = 3;
bar.say = function() {
  console.log("c is " + this.c);
};

test = shallowCopy(bar);

// var baz = shallowCopy(bar);
//
// console.log(baz.a);       // 1
// baz.say();                // c is 3
