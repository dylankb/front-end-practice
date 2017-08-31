var CartCollection = Backbone.Collection.extend({
  initialize: function() {
    this.View = new CartView({ collection: this });
    this.readStorage();
  },
  addItem: function(item) {
    var existing = this.get(item);

    if (this.isEmpty()) { this.trigger('DISPLAY_CART'); }
    if (existing) {
      existing.set('quantity', existing.get('quantity') + 1);
    } else {
      item.set('quantity', 1);
      this.add(item);
    }
    this.update();
  },
  emptyCart: function() {
    this.reset();
    this.setStorage();
    this.trigger('REMOVE_CART');
  },
  readStorage: function() {
    var existingCart = JSON.parse(window.localStorage.getItem('cart'));
    if (!_.isEmpty(existingCart)) {
      this.reset(existingCart);
      this.setupSavedCart();
    }
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
    this.trigger('DISPLAY_CART');
    this.trigger('DISPLAY_CART_ITEMS');
    this.trigger('DISPLAY_CART_SUMMARY');
  },
  update: function() {
    this.setCartTotal();
    this.setStorage();
    this.trigger('DISPLAY_CART_SUMMARY');
  },
});
