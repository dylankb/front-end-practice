var CartItems = Backbone.Collection.extend({
  getTotal: function() { return this.total; },
  setTotal: function() {
    this.total = this.toJSON().reduce(function(acc, album) {
      return acc + album.price * album.quantity;
    }, 0);

    return this;
  },
  getQuantity: function() { return this.quantity; },
  setQuantity: function() {
    this.quantity = this.toJSON().reduce(function(acc, album) {
      return acc + album.quantity;
    }, 0);

    return this;
  },
  addItem: function(item) {
    var existing = this.get(item.get('id')); // Check for existing item in collection
    if (existing) {
      existing.set('quantity', existing.get('quantity') + 1);
    } else {
      item = item.clone();
      item.set('quantity', 1);
      this.add(item);
    }
    this.setQuantity().setTotal();
    this.trigger('CART_UPDATED');
  },
  deleteItem: function(id) {
    this.remove(id);
    this.setQuantity().setTotal();
    this.trigger('CART_UPDATED');
  },
});
