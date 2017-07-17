var NewAlbumView = Backbone.View.extend({
  attributes: {
    id: 'new-album'
  },
  template: App.templates.new,
  render: function() {
    this.$el.html(this.template());
    App.$el.html(this.$el);
  },
  initialize: function() {
    this.render();
  }
});
