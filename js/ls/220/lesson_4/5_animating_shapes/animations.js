function getFormObject($form) {
  var $inputs = $form.serializeArray();

  return $inputs.reduce(function(formObject, item) {
    formObject[item.name] = item.value;
    return formObject;
  }, {});

}

function createElement(data) {
  // return '<div ' + 'data-start-x=' + $formObject.startX +
  //                 ' data-start-y=' + $formObject.startY +
  //                 ' data-end-x=' + $formObject.endX +
  //                 ' data-end-y=' + $formObject.endY +
  //                 ' class="shapes ' + shapeClass +
  //                 '"></div>';

  var $element = $("<div />", {
    "class": 'shapes ' + data.shapeType,
    data: data // Replaces calling $d.data(data) after $element definition
  });
  resetElement($element);

  return $element;
}

function resetElement($e) {
  var data = $e.data();

  $e.css({
    top: +data.startY,
    right: +data.startX,
  });
}

function animateElement() {
  var $e = $(this);
  var data = $e.data();

  resetElement($e);

  $e.animate({
    top: +data.endY,
    left: +data.endX
  }, 1000);
}

function stopAllAnimations($canvas) {
  $canvas.find('.shapes').stop();
}

$(function() {

  var $canvas = $('.shapes-container');

  $('form').on('submit', function(e) {
    e.preventDefault();
    $f = $(this);
    var $formObject = getFormObject($f);
    console.log($formObject);

    var $shapeElement = createElement($formObject);
    console.log($shapeElement);

    $('.shapes-container').append($shapeElement);

    this.reset();
  });

  $('.start').on('click', function(e) {
    e.preventDefault();
    stopAllAnimations($canvas);

    $canvas.find('.shapes').each(animateElement);
  });

  $('.end').on('click', function(e) {
    stopAllAnimations($canvas);
  });
});
