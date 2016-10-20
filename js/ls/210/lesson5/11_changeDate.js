today = new Date();
var tomorrow = new Date(today);

tomorrow.setDate(today.getDate() + 1);

// Date objects are objects, and cannot be directly compared
test = new Date(today);             // 2016-10-18T16:26:29.666Z

today === test;                     // false

today.getDate() === test.getDate(); // true

function formatTime(date) {
  var hours = date.getHours();
  var formattedHours = hours < 10 ? '0' + hours : hours; // Alternative - String(hours).length < 2 ? '0' + hours : hours;

  return formattedHours + ':' + date.getMinutes();
}
