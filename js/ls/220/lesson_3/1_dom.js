var url = "http://d186loudes4jlv.cloudfront.net/fe2/exercises_objects_and_dom/dom_assignment.html";

// 1 Change element class

document.getElementById('primary_heading').setAttribute('class', 'heading');

// 3. Click function to toggle class
document.getElementById('toggle').onclick = function(e) {
  e.preventDefault();
  var notice = document.getElementById('notice');
  if (notice.className === "hidden") {
    notice.setAttribute('class', 'visible');
  }
  else if (notice.className === "visible") {
    notice.setAttribute('class', 'hidden');
  }
};

// 4.

document.getElementById('notice').onclick = function() {
  if (this.className === "visible") {
    this.setAttribute('class','hidden')
  }
};

// 5. Change html
document.getElementById('multiplication').innerHTML = "117";


// 6. Apply class to body
document.body.setAttribute('id','styled');
