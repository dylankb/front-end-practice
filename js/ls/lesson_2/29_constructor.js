// Part 1.

// var a =new Circle(3),
//     b =new Circle(4);
//
// console.log(a.area().toFixed(2));// 28.27
// console.log(b.area().toFixed(2));// 50.27

function Circle(radius) {
  this.radius = radius;
  this.areaNum = 0;
}

Circle.prototype.area = function() {
  this.areaNum = this.radius * (Math.PI * Math.PI);
  return this;
};

Circle.prototype.fixed = function() {
  return this.areaNum += 1;
};

var a = new Circle(3);
console.log(a.area().fixed());

// Doesn't work, needs fixing
