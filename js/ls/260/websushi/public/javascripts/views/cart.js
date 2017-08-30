var CartView = Backbone.View.extend({
  attributes: {
    id: 'cart',
  },
  initialize: function() {
    this.listenTo(this.collection, 'DISPLAY_CART', this.render);
    this.listenTo(this.collection, 'REMOVE_CART', this.removeCart);
    this.SummarySection = new CartSummaryView({ collection: this.collection });
    this.ItemsList = new CartItemsView({ collection: this.collection });
  },
  render: function() {
    this.$el.append(this.ItemsList.el);
    this.$el.append(this.SummarySection.el);
    $('main').prepend(this.$el);
  },
  removeCart: function() {
    this.$el.detach();
    this.ItemsList.$el.empty(); // It would be ideal to not have to do this
  },
});
