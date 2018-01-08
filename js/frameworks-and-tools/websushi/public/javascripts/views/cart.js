var CartView = Backbone.View.extend({
  attributes: {
    id: 'cart',
  },
  initialize: function() {
    this.listenTo(this.collection, 'add', this.render);
    this.listenTo(this.collection, 'reset', this.removeCart);
    this.SummarySection = new CartSummaryView({ collection: this.collection });
    this.ItemsList = new CartItemsView({ collection: this.collection });
  },
  render: function() {
    this.$el.append(this.ItemsList.el);
    this.$el.append(this.SummarySection.el);
    App.$main.prepend(this.$el);
    this.showCart();
  },
  removeCart: function() {
    if (this.collection.isEmpty()) {
      this.$el.hide('fast');
    }
  },
  showCart: function() {
    if (this.$el.is(':visible')) {
      this.$el.animate({ height: '120px' });
    } else {
      this.$el.show('fast');
    }
  },
});
