var CartView = Backbone.View.extend({
  initialize: function() {
    this.listenTo(this.collection, 'DISPLAY_CART', this.render);
    this.listenTo(this.collection, 'REMOVE_CART', this.removeCart);
    this.SummarySection = new CartSummaryView({ collection: this.collection });
    this.ItemsList = new CartItemsView({ collection: this.collection });
  },
  render: function() {
    this.$el.append(this.ItemsList.el);
    this.$el.append(this.SummarySection.el);
    App.$cart.html(this.$el);
  },
  removeCart: function() {
    this.$el.detach();
  },
});
