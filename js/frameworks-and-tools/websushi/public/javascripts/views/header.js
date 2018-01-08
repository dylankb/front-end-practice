var HeaderView = Backbone.View.extend({
  el: '.page-header',
  initialize: function() {
    this.render();
    this.listenTo(this.collection, 'add reset', this.render);
  },
  render: function() {
    this.$el.html(this.template({ count: this.collection.size() }));
  },
  template: Handlebars.templates.header,
});
