var CartSummaryView = Backbone.View.extend({
  emptyCart: function(e) {
    e.preventDefault();
    App.Cart.trigger('EMPTY_CART');
  },
  events: {
    'click .empty_cart': 'emptyCart',
  },
  initialize: function() {
    this.listenTo(this.collection, 'CART_TOTAL_UPDATED', this.render);
    this.render();
  },
  render: function() {
    this.$el.html(this.template({ total: this.collection.total }));
  },
  tagName: 'section',
  template: Handlebars.templates.cartSummary,
});
