$(function() {
  // debugger;
  $('nav').on('click', 'a', function(e) {
    e.preventDefault();
    var $e = $(e.target),
        idx = $e.attr('href');

    switchPage(idx);

    history.pushState({ idx: idx }, $e.text(), location.pathname + idx);
  });

  $(window).on('popstate', function(e) {

    // Return null when manually entering a url
    // var state = e.originalEvent.state;
    //
    // switchPage(state === null ? "#page-1" : state.idx);

    switchPage(!location.hash ? '#page-1' : location.hash);
  });

  if (location.hash) {
    switchPage(location.hash)
  }

});

function switchPage(idx) {
  $('.active').removeClass('active');
  $("nav a[href=" + idx + "]").addClass('active');
  $('article').hide().filter(idx).show();
}
