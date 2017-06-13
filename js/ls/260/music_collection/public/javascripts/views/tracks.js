var $overlay= $('#overlay');
var TracksView = Backbone.View.extend({
  attributes: {
    id: "tracks_modal",
  },
  events: {
    "click a.close": "close"
  },
  duration: 300,
  open: function() {
    this.$el.add($overlay).fadeIn(this.duration);
  },
  close: function(e) {
    e.preventDefault();
    this.fadeOut();
    history.back();
  },
  fadeOut: function() {
    $overlay.fadeOut(this.duration);
    this.$el.fadeOut(this.duration, function() {
      this.remove();
    }.bind(this));
  },
  initialize: function(options) {  // options will include { album: App.albums.first() }
    this.album = options.album // Needs to be manually assigned since it is not `model` or `collection`
    this.$el.appendTo(document.body);
  },
  template: Handlebars.compile($('[data-name=tracks]').html()), // strings issue?
  render: function() {
    this.$el.html(this.template({
      tracks: this.collection.toJSON(),
      album: this.album
    }));
    this.open();
  }
});
