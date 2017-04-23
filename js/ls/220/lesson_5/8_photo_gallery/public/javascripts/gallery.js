$(function() {
  var templates = {};
  var photosJSON;
  var currentIndex = 0;
  var $slides = $('#slides');

  var slideshow = {
    createTemplates: function() {
      $("script[type='text/x-handlebars']").each(function() {
        var $template = $(this);
        templates[$template.attr("id")] = Handlebars.compile($template.html());
      });
    },
    createPartials: function() {
      $("[data-type='partial']").each(function() {
        var $partial = $(this);
        Handlebars.registerPartial($partial.attr("id"), $partial.html());
      });
    },
    requestPhotos: function() {
      $.ajax({
        url: "/photos",
        context: this,
        success: function(json) {
          photosJSON = json;
          this.renderPhotos();
          socialInfo.renderPhotoInformation(0); // Render button elements before binding events
          socialInfo.bindEvents();
          comments.getCommentsFor(photosJSON[0].id);
          console.log(json);
        }
      });
    },
    init: function() {
      this.bindEvents();
      this.createTemplates();
      this.createPartials();
      this.requestPhotos();
    },
    bindEvents: function() {
      $('.next').on('click', this.nextPhoto);
      $('.prev').on('click', this.previousPhoto);
    },
    renderPhotos: function() {
      $("#slides").html(templates.photos({ photos: photosJSON }));
    },
    nextPhoto: function(e) {
      e.preventDefault();
      var $displayedSlide = $slides.children().eq(currentIndex);

      if (currentIndex === photosJSON.length - 1) {
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

      socialInfo.renderPhotoInformation(currentIndex);
      comments.getCommentsFor(photosJSON[currentIndex].id);
    },
    previousPhoto: function(e) {
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

      socialInfo.renderPhotoInformation(currentIndex);
      comments.getCommentsFor(photosJSON[currentIndex].id);
    }
  };


  $('form').on('submit', function(e) {
    e.preventDefault();
    var $form = $(e.target);

    $.ajax({
      url: "/comments/new",
      type: "POST",
      data: $form.serialize(),
      success: function(commentJSON) {
        var newComment = templates.comment(commentJSON);
        $('#comments > ul').append(newComment);
      }
    });
  });


  var comments = {
    // bindEvent: function() {
    //   $('form').on('submit', this.post);
    // },
    // post: function(e) {
    //   e.preventDefault();
    //   $.ajax({
    //     url: "/comments/new",
    //     type: "POST",
    //     data: $form.serialize(),
    //     success: function(commentJSON) {
    //       var newComment = templates.comment(commentJSON);
    //       $('#comments > ul').append(newComment);
    //     }
    //   });
    // },
    getCommentsFor: function(id) {
      $.ajax({
        url: "/comments",
        data: "photo_id=" + id,
        context: this,
        success: function(commentJSON) {
          this.display(commentJSON);
          // this.bindEvent();   // Ensure that binding occurs after successful rendering of content
        }
      });
    },
    display: function(commentJSON) {
      $('#comments > ul').html(templates.comments({comments: commentJSON}));
    }
  };

  var socialInfo = {
    bindEvents: function() {
      $('section > header').on('click', ".actions a", socialInfo.get);
    },
    renderPhotoInformation: function(index) {
      $('section > header').html(templates.photo_information(photosJSON[index]));
    },
    get: function(e) {
      e.preventDefault();
      var $e = $(e.target);

      $.ajax({
        url: $e.attr("href"),
        type: "POST",
        data: "photo_id=" + $e.attr("data-id"),
      }).done(function(json) {
        var socialTypePlural = this.url.substring(this.url.lastIndexOf('/') + 1) + "s"; // returns either favorites or likes
        photosJSON[currentIndex][socialTypePlural] = json.total;
        $('section > header').html(templates.photo_information(photosJSON[currentIndex]));
      });
    }
  };

  slideshow.init();
});
