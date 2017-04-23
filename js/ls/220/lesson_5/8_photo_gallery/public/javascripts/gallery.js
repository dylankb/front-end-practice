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
          socialInfo.renderPhotoInformation(0);
          socialInfo.init();
          // Need to render photo_information before init -
          // in order to attach event listener need button rendered first
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
      socialInfo.init();
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
      socialInfo.init();
    }
  };

  var comments = {
    getCommentsFor: function(id) {
      $.ajax({
        url: "/comments",
        data: "photo_id=" + id,
        context: this,
        success: function(commentJSON) {
          this.display(commentJSON);
        }
      });
    },
    display: function(commentJSON) {
      $('#comments > ul').html(templates.comments({comments: commentJSON}));
    }
  };

  var socialInfo = {
    init: function() {
      $('a.button.like').on('click', this.like.bind(this));
      $('a.button.favorite').on('click', this.favorite.bind(this));
    },
    renderPhotoInformation: function(index) {
      $('section > header').html(templates.photo_information(photosJSON[index]));
    },
    like: function(e) {
      e.preventDefault();
      $.ajax({
        url: "/photos/like",
        type: "POST",
        context: this,
        data: "photo_id=" + photosJSON[currentIndex].id,
        success: function(json) {
          photosJSON[currentIndex].likes = json.total;
          this.renderPhotoInformation(currentIndex);
          this.init();
        }
      });
    },
    favorite: function(e) {
      e.preventDefault();
      $.ajax({
        url: "/photos/favorite",
        type: "POST",
        context: this,
        data: "photo_id=" + photosJSON[currentIndex].id,
        success: function(json) {
          photosJSON[currentIndex].favorites = json.total;
          this.renderPhotoInformation(currentIndex);
          this.init();
        }
      });
    }
  };

  slideshow.init();
});
