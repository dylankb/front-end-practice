var CheckoutItems = Backbone.View.extend({
  initialize: function() {
    this.render();
  },
  tagName: 'tbody',
  render: function() {
    this.collection.each(this.renderCheckoutItem, this);
  },
  renderCheckoutItem: function(item) {
    var checkoutItem = new CheckoutItemView({ model: item });
    this.$el.append(checkoutItem.el);
  },
});
