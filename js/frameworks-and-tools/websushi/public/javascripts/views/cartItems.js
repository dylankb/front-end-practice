var CartItemsView = Backbone.View.extend({
  attributes: {
    class: 'cart-items',
  },
  initialize: function() {
    this.render();
    this.listenTo(this.collection, 'add', this.renderNewCartItem);
    this.listenTo(this.collection, 'reset', this.removeItems);
  },
  render: function() {
    this.$el.empty();
    this.collection.each(this.renderNewCartItem, this);
    // Specifying this changes execution context from model to CartItemsView
  },
  removeItems: function() {
    this.$el.empty();
  },
  renderNewCartItem: function(item) {
    var cartItem = new CartItemView({ model: item });
    this.$el.append(cartItem.el);
  },
  tagName: 'ul',
});
