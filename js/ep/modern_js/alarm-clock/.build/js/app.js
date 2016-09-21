(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function Alarm(time, counter){
  this.time = moment(time,"hh:mm");
  this.id = counter;
}

// Clock.prototype.alarmTime = function() {
//   return moment(time, "hh:mm");
// }

exports.alarmModule = Alarm;

},{}],2:[function(require,module,exports){
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

},{"./../js/alarm-model.js":1}]},{},[2]);
