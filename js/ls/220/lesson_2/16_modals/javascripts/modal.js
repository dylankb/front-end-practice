$(function() {

  $('.team li > a').on('click', function(e) {
    e.preventDefault();

    // Select the current element, one of four <a> tags
    var $ele = $(this);

    // Look for all sibling elements w/ '.modal' class
    $ele.siblings(".modal").css({
      // Position absolute modal a top value of current top of screen + 30px
      top: $(window).scrollTop() + 30
    });

    // Make modal and modal-overlay fade in.
    $ele.nextAll("div").fadeIn(400);
  });

  $(".modal-overlay, a.close").on("click", function(e) {
    e.preventDefault();

    // On clicking close, find the visible modal & overlay to fade out
    $(".modal-overlay, .modal").filter(":visible").fadeOut(400);
  });
});
