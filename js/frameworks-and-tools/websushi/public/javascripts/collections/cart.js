var CartCollection = Backbone.Collection.extend({
  initialize: function() {
    this.readStorage();
    this.View = new CartView({ collection: this });
    this.on('ADD_ITEM', this.addItem);
    this.on('REMOVE_ITEM', this.removeItem);
    this.on('EMPTY_CART', this.emptyCart);
  },
  addItem: function(item) {
    var existing = this.get(item);

    if (existing) {
      existing.set('quantity', existing.get('quantity') + 1);
    } else {
      this.add(item);
      item.set('quantity', 1);
    }
    this.update();
  },
  emptyCart: function() {
    this.reset();
    this.setStorage();
    this.update();
  },
  readStorage: function() {
    var existingCart = JSON.parse(window.localStorage.getItem('cart'));
    if (!_.isEmpty(existingCart)) {
      this.reset(existingCart);
      this.setupSavedCart();
    }
  },
  removeItem: function(item) {
    var quantity = item.get('quantity');

    if (quantity === 1) {
      this.remove(item);
    } else {
      item.set('quantity', quantity - 1);
    }
    this.update();
  },
  setCartTotal: function() {
    this.total = this.models.reduce(function sumCartTotal(acc, item) {
      return acc + (item.get('price') * item.get('quantity'));
    }, 0);
  },
  setStorage: function() {
    window.localStorage.setItem('cart', JSON.stringify(this));
  },
  setupSavedCart: function() {
    this.setCartTotal();
  },
  update: function() {
    this.setCartTotal();
    this.setStorage();
    this.trigger('CART_TOTAL_UPDATED');
  },
});
