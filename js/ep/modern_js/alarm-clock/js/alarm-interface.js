var Alarm = require('./../js/alarm-model.js').alarmModule;
// var alarm;
$(document).ready(function(){
  setInterval(function(){$('#time').text(moment());}, 1000);
  var counter = 0;
  $('form.set-alarm').submit(function(event) {
    event.preventDefault();
    counter++;
    var alarmTime = $('input.alarm').val();
    var alarm = new Alarm(alarmTime, counter);

    var myInterval = setInterval(function(){
      if(moment().format("hh:mm") === alarm.time.format("hh:mm")) {
        alert("alarm")
        $('.snooze').show();
        $(".snooze").click(function() {
          alarm.time.add("1", "minutes");

          $('.snooze').hide();
        });
      }
    }, 5000);

    $('ul.alarms').append(`<li class='${alarm.id}'>`+ alarm.time.format("hh:mm") + `<button id="${alarm.id}" class='delete'  >delete</button></li>`);
    $(".delete").last().click(function() {
      var myClass = $(this).attr("id");
      console.log(alarm.time);
      $("." + myClass).remove();
      clearInterval(myInterval);
    });
  });

});
