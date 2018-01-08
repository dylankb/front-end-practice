var App = {
  albumsLoaded: function() {
    this.view.render();
  },
  fetchAlbums: function() {
    this.albums = new Albums();
    // render collection once we have data from server
    this.view = new AlbumsView({ collection: this.albums });
    this.albums.fetch({
      success: this.albumsLoaded.bind(this),
    });
  },
  tracksLoaded: function(tracks) {
    var tracks_modal = new TracksView({
      collection: tracks,
      album: this.selected_album.toJSON(),
    });

    tracks_modal.render();
    this.tracks = tracks_modal;
  },
  fetchTracks: function(name) {
    var tracks = new (Tracks.extend({ // extend current tracks collection so we can specify a URL
      url: '/albums/' + name + '.json',
    }))();

    this.selected_album = this.albums.findWhere({ title: name });

    tracks.fetch({
      success: this.tracksLoaded.bind(this),
    });
  },
  init: function() {
    this.fetchAlbums();
  },
};

var Router = Backbone.Router.extend({
  routes: {
    'albums/:name': 'getAlbum',
  },
  getAlbum: function(name) { // name param from URL
    App.fetchTracks(name);
  },
  index: function() {
    if (!App.tracks.$el.is(':animated')) {
      App.tracks.fadeOut();
    }
  },
  initialize: function() {
    this.route(/^\/?$/, 'index', this.index);  // listen for a path that starts with a forward slash
  },
});

var router = new Router();

Backbone.history.start({
  silent: true,
  pushState: true,
});

// listen for any anchors that start with a root path
$(document).on('click', 'a[href^="/"]', function(e) {
  e.preventDefault();
  router.navigate($(e.currentTarget).attr('href').replace(/^\//, ''), { trigger: true });
  // navigate to href (minus leading /)
  // triggers to update the history
});
