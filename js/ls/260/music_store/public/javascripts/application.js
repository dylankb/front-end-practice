var App = {
  templates: JST,
  $el: $('main'),
  init: function() {
    this.renderAlbums();
  },
  renderAlbumView: function(album) {
    new AlbumView({ model: album });
  },
  renderAlbums: function() {
    this.albums.each(this.renderAlbumView);
  }
};

Handlebars.registerHelper("format_price", function(price) {
  return Number(price).toFixed(2);
});
