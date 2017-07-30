var router = new (Backbone.Router.extend({
  routes: {
    'albums/new': App.renderNewAlbum,
    '': 'index',
    'albums/:id': 'albumDetail'
  },
  index: function() {
    App.renderIndexView();
  },
  albumDetail: function(id) {
    new DetailView();
    var selectedAlbum = App.albums.get(id);
    App.renderAlbumView(selectedAlbum);
  }
  // initialize: function() {
  //    this.route(/^\/?$/, 'index'); Can be replaced by the above routes hash entry
  // },
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
