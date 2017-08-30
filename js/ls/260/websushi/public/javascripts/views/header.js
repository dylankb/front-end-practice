var HeaderView = Backbone.View.extend({
  initialize: function() {
    this.render();
    this.listenTo(this.collection, 'add reset', this.render);
  },
  render: function() {
    this.$el.html(this.template({ count: this.collection.size() }));
    $('.page-header').html(this.$el);
  },
  template: Handlebars.templates.header,
});
