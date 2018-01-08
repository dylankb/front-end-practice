function scrollRight() {
  if (currentLiIndex === 0) {
    newLi = $li.eq(-1);
  } else {
    newLi = $currentLi.prev();
  }
  return newLi;
}

function scrollLeft() {
  if (currentLiIndex === $li.length - 1) {
    newLi = $li.eq(0);
  } else {
    newLi = $currentLi.next();
  }
  return newLi;
}

$(function() {
  var $mainImg = $('main figure img');
  var $li = $('li');

  $($li).on('click', function() {
    var $ele = $(this);
    var $eleImg = $ele.find('img');
    $eleImg.addClass('active');

    var $imgSrc = $eleImg.attr('src');

    $mainImg.attr('src', $imgSrc);
  });

  $('.arrow').on('click', function() {

    var $ele = $(this);
    var $imgSrc = $mainImg.attr('src');

    var $currentLi = $('ul li img').filter("[src='" + $imgSrc + "']").parent();

    var currentLiIndex = $currentLi.index();
    var $newLi;

    if ($ele.attr('class') === 'arrow right-arrow') {
      $newLi = scrollLeft();
    }
    else if ($ele.attr('class') === 'arrow left-arrow') {
      $newLi = scrollRight();
    }

    $currentLi.find('img').removeClass('active');
    $newLi.find('img').addClass('active');

    $mainImg.attr('src', $newLi.find('img').attr('src'));
  });
});
