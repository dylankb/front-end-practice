$(function() {
  var templates = {};
  var photosJSON;
  var currentIndex = 0;
  var $slides = $('#slides');

  $("script[type='text/x-handlebars']").each(function() {
    var $template = $(this);
    templates[$template.attr("id")] = Handlebars.compile($template.html());
  });

  $("[data-type='partial']").each(function() {
    var $partial = $(this);
    Handlebars.registerPartial($partial.attr("id"), $partial.html());
  });

  $.ajax({
    url: "/photos",
    success: function(json) {
      photosJSON = json;
      renderPhotos();
      renderPhotoInformation(0);
      getCommentsFor(photosJSON[0].id);
      console.log(json);
    }
  });

  function renderPhotos() {
    $("#slides").html(templates.photos({ photos: photosJSON }));
  }

  function renderPhotoInformation(id) {
    $('section > header').html(templates.photo_information(photosJSON[id]));
  }

  function getCommentsFor(id) {
    $.ajax({
      url: "/comments",
      data: "photo_id=" + id,
      success: function(commentJSON) {
        $('#comments > ul').html(templates.comments({comments: commentJSON}));
      }
    });
  }

  $('.next').on('click', function(e) {
    e.preventDefault();
    var $displayedSlide = $slides.children().eq(currentIndex);

    if (currentIndex === 2) {
      $displayedSlide.fadeOut(500, function() {
        $(this).siblings().eq(0).fadeIn(500);
      });
      currentIndex = 0;
    } else {
      $displayedSlide.fadeOut(500, function() {
        $(this).next().fadeIn(500);
      });
      currentIndex += 1;
    }

    renderPhotoInformation(currentIndex);
    getCommentsFor(currentIndex);
  });

  $('.prev').onclick = previousSlide;
  function previousSlide(e) {
    e.preventDefault();
    var $displayedSlide = $slides.children().eq(currentIndex);

    if (currentIndex === 0) {
      $displayedSlide.fadeOut(500, function() {
        $(this).siblings().eq(-1).fadeIn(500);
      });
      currentIndex = photosJSON.length - 1;
    } else {
      $displayedSlide.fadeOut(500, function() {
        $(this).prev().fadeIn(500);
      });
      currentIndex -= 1;
    }

    renderPhotoInformation(currentIndex);
    getCommentsFor(currentIndex);
  });
});
