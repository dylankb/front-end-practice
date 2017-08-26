var CartItemsView = Backbone.View.extend({
  attributes: {
    className: 'cart-items',
  },
  initialize: function() {
    this.render();
    this.listenTo(this.collection, 'add', this.renderNewCartItem);
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
