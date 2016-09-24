var url = "http://d186loudes4jlv.cloudfront.net/fe2/exercises_objects_and_dom/dom_assignment.html";

// 1 Change element class

document.getElementById('primary_heading').setAttribute('class', 'heading');

// 3. Click function to toggle class
document.getElementById('toggle').onclick = function() {
  target = document.getElementById('notice');
  if (target.className === "hidden") {
    target.setAttribute('class', 'visible');
  }
  else if (target.className === "visible") {
    target.setAttribute('class', 'hidden');
  }
}
