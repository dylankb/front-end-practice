var router = new (Backbone.Router.extend({
  routes: {
    'albums/new': App.renderNewAlbum,
  },
  index: function() { App.renderIndexView(); },
  initialize: function() {
    this.route(/^\/?$/, 'index', this.index);
  },
}))(); // don't need to use router anywhere else

// Singleton object, lower-case (not a constructor)
Backbone.history.start({
  pushState: true,
});

// If visiting any forward slash links, defer to router
$(document).on('click', 'footer a[href^="/"]', function(e) {
  e.preventDefault();
  // remove leading slash because Backbone expects it to be there.
  router.navigate($(e.target).attr('href').replace(/^\//, ''), { trigger: true });   // { trigger: true } - trigger push state
});
