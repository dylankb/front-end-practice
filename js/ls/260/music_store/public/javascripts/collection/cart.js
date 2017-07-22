var CartItems = Backbone.Collection.extend({
  getTotal: function() { return this.total; },
  setTotal: function() {
    this.total = this.toJSON().reduce(function(acc, album) {
      return acc + album.price * album.quantity;
    }, 0);
  },
  getQuantity: function() { return this.quantity; },
  setQuantity: function() {
    this.quantity = this.toJSON().reduce(function(acc, album) {
      return acc + album.quantity;
    }, 0);
  },
  addItem: function(item) {
    item = item.clone();
    item.set('quantity', 1);
    this.add(item);
    this.setQuantity();
    this.setTotal();
    this.trigger('CART_UPDATED');
  },
});
