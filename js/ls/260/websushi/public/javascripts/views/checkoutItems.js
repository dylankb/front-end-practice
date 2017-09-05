var CheckoutItems = Backbone.View.extend({
  initialize: function() {
    this.buildCheckoutItems();
  },
  buildCheckoutItems: function() {
    this.collection.each(this.renderCheckoutItem, this);
  },
  render: function() {
    return this.$el.html(this.$tempEl.contents());
  },
  renderCheckoutItem: function(item) {
    var checkoutItem = new CheckoutItemView({ model: item });
    this.$tempEl.append(checkoutItem.el);
  },
  $tempEl: $('<div/>'),
});

// Simple alternative with downside of more expensive re-render on route change

// var CheckoutItems = Backbone.View.extend({
//   render: function() {
//     this.collection.each(this.renderCheckoutItem, this);
//   },
//   renderCheckoutItem: function(item) {
//     var checkoutItem = new CheckoutItemView({ model: item });
//     this.$tempEl.append(checkoutItem.el);
//   },
// }
