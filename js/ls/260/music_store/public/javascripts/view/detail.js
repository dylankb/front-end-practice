var DetailView = Backbone.View.extend({
  initialize: function() { this.render(); },
  events: {
    'submit #album-edit': 'updateAlbum',
  },
  template: App.templates.detail,
  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    App.$el.html(this.$el);
  },
  updateAlbum: function(e) {
    e.preventDefault();
    var $form = $(e.target);
    var id = $($form.closest('div')).data('id');
    var albumUpdate = $form.serialize();

    $.ajax({
      url: '/albums/' + id,
      type: 'PUT',
      data: albumUpdate + '&id=' + id,
      success: function(json) {
        App.albums.get(id).set(json); // Update Backbone model so view can show changed attributes
        history.back();
      },
    });
  },
});
