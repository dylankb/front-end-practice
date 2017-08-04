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
    var selectedAlbum = App.albums.get(id);
    new DetailView({
      model: selectedAlbum,
    });
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
$(document).on('click', 'a[href^="/"]', function(e) {
  e.preventDefault();
  // console.log('nav trigerred');
  // remove leading slash because Backbone expects it to be there.
  router.navigate($(e.target).attr('href').replace(/^\//, ''), { trigger: true }); // { trigger: true } - trigger route mapped functions in the router's routes hash
});
