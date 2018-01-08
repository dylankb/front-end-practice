var x = "13",
    y = 9;

console.log(x * y);

//

var npa = String(212),
    nxx = String(555),
    num = String(1212);

console.log(npa + nxx + num);

//

function whatShallIWear(temp) {
  if (temp < 60) {
    ...
  }
  else if (temp < 70) {
    ...
  }
  else {
    ...
  }
}

// 

whatShallIWear(80)

functioncalculateArea(r) {
  var area;
  if (r <= 0) {
    return 0;
  } else {
    area = Math.PI * r * r;
    return area; 
  }
}
var radius=5.2;

var theArea=calculateArea(radius);
console.log("The area is: " + theArea);