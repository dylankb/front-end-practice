var DetailView = Backbone.View.extend({
  initialize: function() { this.render(); },
  events: {
    'submit #album-edit': 'updateAlbum'
  },
  template: App.templates.detail,
  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    App.$el.html(this.$el);
  },
  updateAlbum: function(e) {
    // return;
    e.preventDefault();
    var $form = e.target.closest('form');
    var id = $form.closest('div').data('id');
    var albumUpdate = $form.serialize();
    // debugger;

    $.ajax({
      url: '/albums/'+ id,
      type: 'PUT',
      data: albumUpdate,
      success: function(json) {
        // console.log('This is in detail view');
        // alert('this is in detail view');
        // console.log(json);
        // history.back();
      }
    });
  }
});
