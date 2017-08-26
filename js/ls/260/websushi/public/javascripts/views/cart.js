var CartView = Backbone.View.extend({
  attributes: {
    id: 'cart',
  },
  initialize: function() {
    this.SummarySection = new CartSummaryView({ collection: this.collection });
    this.ItemsList = new CartItemsView({ collection: this.collection });
    this.render();
  },
  render: function() {
    this.$el.append(this.ItemsList.el);
    this.$el.append(this.SummarySection.el);
    $('main').prepend(this.$el);
  },
});
