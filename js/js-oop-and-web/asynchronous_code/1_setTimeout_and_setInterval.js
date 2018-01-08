// var nums = [1,2,3,4,5];
//
// function makeLogger(num) {
//   return function() {
//     console.log(num);
//   };
// }
//
// function delayLogger() {
//   nums.forEach(function(num) {
//     var logger = makeLogger(num);
//     setTimeout(logger, 1000 * num);
//   });
// }
//
// delayLogger();

// 2
// setTimeout(function() {
//   setTimeout(function() {
//     q();
//   }, 15);
//
//   d();
//
//   setTimeout(function() {
//     n();
//   }, 5)
//
//   z();
// }, 10);
//
// setTimeout(function() {
//   s();
// }, 20);
//
// setTimeout(function() {
//   f();
// });
//
// g();
// g(), f(), d(), z(), n(), s(), q()

// 3
// function afterNSeconds(callback, delay) {
//   setTimeout(callback, delay * 1000);
// }
//
// var yell = function() { console.log("Ahhh!") };
//
// afterNSeconds(yell, 3);

// 4
function startCounting() {
  var count = 0;
  setInterval(function() {
    count++;
    console.log(count);
  }, 1000);
}

var countProcess = startCounting();

function stopCounting() {
  return clearInterval(countProcess);
}
