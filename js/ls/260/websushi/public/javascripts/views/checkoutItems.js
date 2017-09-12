var CheckoutItems = Backbone.View.extend({
  initialize: function() {
    this.buildCheckoutItems();
    this.listenTo(this.collection, 'update', this.buildCheckoutItems);
  },
  buildCheckoutItems: function() {
    this.collection.each(this.renderCheckoutItem, this);
  },
  render: function() {
    return this.$el.html(this.$tempEl.children()); // $tempEl[0].children;

    // var $tempElContents = this.$tempEl.contents();
    // var $tempElContentsClone = $tempElContents.clone(true, true);
    // return this.$el.html($tempElContentsClone);
  },
  renderCheckoutItem: function(item) {
    var checkoutItem = new CheckoutItemView({ model: item });
    this.$tempEl.append(checkoutItem.el);
  },
  $tempEl: $('<div/>'),
});
