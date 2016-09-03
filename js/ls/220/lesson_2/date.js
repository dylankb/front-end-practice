var today = new Date();
var year = today.getFullYear();
var tomorrow = new Date(today);
tomorrow.setDate(today.getDate() + 1);

var nextWeek = new Date(today);
nextWeek.setDate(today.getDate() + 7);

function dateSuffix(day) {
  dayString = day + "";
  lastDigit = dayString.charAt(dayString.length-1);
  if (lastDigit === 1) {
    return dayString + "st";
  }
  else if (lastDigit === 2) {
    return dayString + "nd";
  }
  else if (lastDigit === 3) {
    return dayString + "rd";
  }
  else {
    return dayString + "th";
  }
}

function formattedDay(date) {
  var days_of_week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return days_of_week[date.getDay()];
}

function formattedMonth(date) {
  var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  return months[date.getMonth()];
}

function formattedDate(date) {
  var day = formattedDay(date),
    month = formattedMonth(date);

  console.log("Today's date is " + day + " " + month + " " + dateSuffix(date.getDate()));
}

function formattedTime(date) {
  var hourString = date.getHours() + "";
  if (date.getHours < 10) {
    return hourString = "0" + hourString + ":" + date.getMinutes();
  }
  else {
    return hourString + ":" + date.getMinutes();
  }
}
