// 1 / 2
function reposition(e) {
  var x = document.querySelector('.x');

  var posX = e.clientX + "px";
  var posY = e.clientY + "px";

  x.style.top = posY;
  x.style.left = posX;
}

document.addEventListener('mousemove', reposition);

// 3
document.addEventListener('keypress', function(e) {
  var colors = {114: "red", 98: "blue", 103: "green"};
  var key = e.which;

  if (colors[key]) {
    var x = document.querySelector('.x');
    var horizontal = x.querySelector('.horizontal');
    var vertical = x.querySelector('.vertical');

    vertical.style.background = colors[key];
    horizontal.style.background = colors[key];
  }

});
