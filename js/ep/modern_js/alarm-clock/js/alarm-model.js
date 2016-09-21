function Alarm(time, counter){
  this.time = moment(time,"hh:mm");
  this.id = counter;
}

// Clock.prototype.alarmTime = function() {
//   return moment(time, "hh:mm");
// }

exports.alarmModule = Alarm;
