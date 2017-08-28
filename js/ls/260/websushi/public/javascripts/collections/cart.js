var CartCollection = Backbone.Collection.extend({
  initialize: function() {
    this.listenToOnce(this, 'add', this.createView);
    // render view when first item added
    // - will need to address what to do with saved images since only creates view on add atm
  },
  addItem: function(id) {
    var item = App.SushiCollection.get(id);

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
    // perhaps need to undelegateEvents here, but not sure
  },
});
