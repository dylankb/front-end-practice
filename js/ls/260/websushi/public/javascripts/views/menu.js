var MenuView = Backbone.View.extend({
  attributes: {
    id: 'content',
  },
  initialize: function() {
    this.render();
  },
  render: function() {
    this.$el.html(this.template({ sushi: this.collection.toJSON() }));
    $('main').append(this.$el);
  },
  template: Handlebars.templates.menu,
});
