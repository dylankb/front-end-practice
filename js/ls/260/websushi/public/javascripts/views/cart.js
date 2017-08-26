var CartView = Backbone.View.extend({
  attributes: {
    id: 'cart',
  },
  emptyCart: function(e) {
    e.preventDefault();

    App.trigger('EMPTY_CART');
  },
  events: {
    'click .empty_cart': 'emptyCart',
  },
  initialize: function() {
    this.listenTo(this.collection, 'add', this.renderCartItem);
    this.render();
  },
  render: function() {
    this.$el.html(this.template);
    $('main').prepend(this.$el);

    this.collection.each(this.renderCartItem, this);
  },
  renderCartItem: function(item) {
    var cartItem = new CartItemView({ model: item });
    this.$el.find('.cart-items').append(cartItem.el);
  },
  template: Handlebars.templates.cart,
});
