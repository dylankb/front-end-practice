var CheckoutItems = Backbone.View.extend({
  render: function() {
    this.$el.empty();
    this.collection.each(this.renderCheckoutItem, this);
  },
  renderCheckoutItem: function(item) {
    var checkoutItem = new CheckoutItemView({ model: item });
    this.$el.append(checkoutItem.el);
  },
});
