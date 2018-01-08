var AlbumsView = Backbone.View.extend({
  attributes: {
    className: 'albums',
  },
  initialize: function() {
    this.renderAlbums();
  },
  renderAlbumView: function(album) {
    var albumView = new AlbumView({ model: album });
    this.$el.append(albumView.el);
  },
  renderAlbums: function() {
    // Clarify how is this passing album and not AlbumView to renderAlbumView
    this.collection.each(this.renderAlbumView, this);
  },
  tagName: 'ul',
});
