var CartSummaryView = Backbone.View.extend({
  emptyCart: function(e) {
    e.preventDefault();

    App.trigger('EMPTY_CART');
  },
  events: {
    'click .empty_cart': 'emptyCart',
  },
  initialize: function() {
    this.listenTo(this.collection, 'CART_UPDATED', this.render);
  },
  render: function() {
    this.$el.html(this.template({ total: this.collection.total }));
  },
  tagName: 'section',
  template: Handlebars.templates.cartSummary,
});
