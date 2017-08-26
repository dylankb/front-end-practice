var CartCollection = Backbone.Collection.extend({
  initialize: function() {
    this.listenToOnce(this, 'add', this.createView);
    this.HeaderView = new HeaderView({ collection: this });
  },
  addItem: function(item) {
    if (this.get(item)) {
      item.set('quantity', item.get('quantity') + 1);
    } else {
      item.set('quantity', 1);
      this.add(item);
    }
    this.setCartTotal();
    this.update();
  },
  setCartTotal: function() {
    this.total = this.models.reduce(function sumCartTotal(acc, item) {
      return acc + (item.get('price') * item.get('quantity'));
    }, 0);
  },
  update: function() {
    this.trigger('CART_UPDATED');
  },
  createView: function() {
    this.View = new CartView({ collection: this });
  },
  emptyCart: function() {
    this.reset();
    this.View.remove();
  },
});
