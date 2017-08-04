var NewAlbumView = Backbone.View.extend({
  attributes: {
    id: 'new-album'
  },
  create: function(e) {
    e.preventDefault();
    var $f = this.$('form');
    debugger;

    $.ajax({
      url: $f.attr('action'),
      type: $f.attr('method'),
      data: $f.serialize(),
      success: function(json) {
        App.albums.add(json);   // JSON we get back is new model
        history.back();         // App.render does not work
      },
    });
  },
  events: {
    'submit #album-add': 'create'
  },
  template: App.templates.new,
  render: function() {
    this.$el.html(this.template);
    App.$el.html(this.$el);
  },
  initialize: function() {
    this.render();
  },
});
