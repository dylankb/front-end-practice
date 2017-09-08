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
    this.$el.html(this.template({ items: this.collection.toJSON() }));
  },
  removeItems: function() {
    this.$el.empty();
  },
  renderNewCartItem: function(item) {
    var cartItem = new CartItemView({ model: item });
    this.$el.append(cartItem.el);
  },
  tagName: 'ul',
  template: Handlebars.templates.cartItems,
});
