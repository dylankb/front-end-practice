var CheckoutItems = Backbone.View.extend({
  initialize: function() {
    this.buildCheckoutItems();
    this.listenTo(this.collection, 'update', this.buildCheckoutItems);
  },
  buildCheckoutItems: function() {
    this.collection.each(this.renderCheckoutItem, this);
  },
  render: function() {
    var $tempElContents = this.$tempEl.children();
    var $tempElContentsClone = $tempElContents.clone();
    return this.$el.html($tempElContentsClone);
  },
  renderCheckoutItem: function(item) {
    var checkoutItem = new CheckoutItemView({ model: item });
    this.$tempEl.append(checkoutItem.el);
  },
  $tempEl: $('<div/>'),
});
