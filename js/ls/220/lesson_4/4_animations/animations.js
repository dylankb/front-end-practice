$(function() {
  $('form').on('submit', function(e) {
    e.preventDefault();
    var $inputs = $(this).serializeArray();
    var shape = $inputs[0].value;

    var shapeElement = '<div class="shapes ' + shape + '"></div>';
    $('.shapes-container').append(shapeElement);
  });
});
