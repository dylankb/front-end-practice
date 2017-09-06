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
    App.$content.prepend(this.$el);
    this.showCart();
  },
  removeCart: function() {
    this.$el.hide('fast');
  },
  showCart: function() {
    if (this.$el.is(':visible')) {
      this.$el.animate({ height: '120px' });
    } else {
      this.$el.show('fast');
    }
  },
});
