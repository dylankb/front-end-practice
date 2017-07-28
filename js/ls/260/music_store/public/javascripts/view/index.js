var IndexView = Backbone.View.extend({
  attributes: {
    id: 'index',
  },
  template: App.templates.index,
  render: function() {
    this.$el.html(this.template);   // Create el html
    App.$el.html(this.$el);         // Attach el to static content
  },
  initialize: function() {
    this.render();
  },
  renderForm: function(e) {
    e.preventDefault();
    this.trigger("SHOW_NEW_ALBUM")
  },
  deleteAlbum: function(e) {
    e.preventDefault();
    var $link = $(e.target)
    var albumId = Number($link.data('id'));

    $.ajax({
      url: '/albums',
      method: 'delete',
      data: { id: albumId },
      success: function() {
        $link.closest('li').remove();
      }
    });
  },
  events: {
    'click .showForm': 'renderForm',
    'click .album-remove-index': 'deleteAlbum',
  },
});
