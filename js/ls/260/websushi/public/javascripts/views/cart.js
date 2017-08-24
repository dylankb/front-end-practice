var CartView = Backbone.View.extend({
  attributes: {
    id: 'cart',
  },
  initialize: function() {
    this.render();
  },
  render: function() {
    this.$el.html(Handlebars.templates.cart);
    $('main').prepend(this.$el);
  },
});
