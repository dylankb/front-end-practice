var CartItemsView = Backbone.View.extend({
  attributes: {
    class: 'cart-items',
  },
  initialize: function() {
    this.render();
    this.listenTo(this.collection, 'add', this.renderNewCartItem);
    this.listenTo(this.collection, 'DISPLAY_CART_ITEMS', this.render);
  },
  render: function() {
    this.collection.each(this.renderNewCartItem, this);
    // Specifying this changes execution context from model to CartItemsView
  },
  renderNewCartItem: function(item) {
    var cartItem = new CartItemView({ model: item });
    this.$el.append(cartItem.el);
  },
  tagName: 'ul',
});
