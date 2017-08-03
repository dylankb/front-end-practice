var DetailView = Backbone.View.extend({
  initialize: function() { this.render(); },
  template: App.templates.detail,
  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    App.$el.html(this.$el);
  }
});
