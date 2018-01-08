$(function() {
  var $blinds = $('[id^=blind]');

  var speed = 250;
  var delayVariable = 1500;

  $blinds.each(function(i) {
    var $blind = $blinds.eq(i);
    var totalDelay = delayVariable * i + speed;

    $blind.delay(totalDelay).animate({
      top: "+=" + $blind.height(),
      height: 0,
    }, speed);
  });

  $('a').on('click', function(e) {
    e.preventDefault();

    $blinds.each(function(i) {
      var $blind = $blinds.eq(i);

      $blind.finish();
      $blind.removeAttr("style");
    }, 1000);
  });
});
