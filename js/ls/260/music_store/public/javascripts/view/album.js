var AlbumView = Backbone.View.extend({
  attributes: {
    class: 'album-container',
  },
  events: {
    'click .add-album': 'addToCart',
  },
  addToCart: function(e) {
    e.preventDefault();

    App.trigger('ADD_TO_CART', this.model);
  },
  tagName: 'li',
  template: App.templates.album,
  render: function() {
    var id = this.model.get('id');

    this.$el.attr('id', 'album_' + id);
    this.$el.html(this.template(this.model.toJSON()));
    // Perhaps questionable as to whether app needs to know about view specifics, but should be ok
    this.$el.appendTo(App.$el.find('ul'));
  },
  initialize: function() {
    this.render();
    this.model.view = this;
  },
});
