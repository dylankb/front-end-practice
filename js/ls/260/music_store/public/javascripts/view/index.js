var IndexView = Backbone.View.extend({
  attributes: {
    id: 'index'
  },
  template: App.templates.index,
  render: function() {
    this.$el.html(this.template()); // Create el html
    App.$el.html(this.$el);  // Attach el to static content
  },
  initialize: function() {
    this.render();
  },
  renderForm: function(e) {
    e.preventDefault();
    this.trigger("SHOW_NEW_ALBUM")
  },
  events: {
    'click .showForm': 'renderForm'
  },
});
