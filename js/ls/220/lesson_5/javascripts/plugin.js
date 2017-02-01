(function($) {

  $.fn.slideshow = function() {

    var $slideshow = this;
    var defaults = {
      slide: "figure",
      speed: 500,
      activeClass: "active"
    };
    var $nav = options.$nav;
    var settings;

    settings = $.extend(defaults, options);

    $nav.on("click", "a", function(e) {
      e.preventDefault();
      var $li = $(e.currentTarget).closest("li"),
          idx = $li.index();

      $slideshow.find(settings.slide ).stop().filter(":visible").fadeOut(settings.speed);
      $slideshow.find(settings.slide ).eq(idx).fadeIn(settings.speed);
      $nav.find("." + settings.active).removeClass(settings.active);
      $li.addClass(settings.active);
    });
  };
})(jQuery);
