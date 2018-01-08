$(function() {

  var $navHeader = $('main + header');
  $navHeader.prependTo('body');

  $('main h1').first().prependTo($navHeader);

  $('#content figure').css('background', '#c0f0c0');
  $('#content figure img').css('background', '#c0f0c0');

  var $firstFigure = $('#content figure').first();
  var $secondFigure = $('#content figure').last();

  $firstFigure.find('img').prependTo($secondFigure);

  $secondFigure.find('img').last().prependTo($firstFigure);
});
