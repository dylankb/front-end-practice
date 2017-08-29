var CartCollection = Backbone.Collection.extend({
  initialize: function() {
    this.listenToOnce(this, 'SHOW_CART', this.createView);
    this.readStorage();
  },
  addItem: function(item) {
    var existing = this.get(item); // item & existing can be the same, but this is clearer
    if (existing) {
      existing.set('quantity', existing.get('quantity') + 1);
    } else {
      item.set('quantity', 1);
      this.add(item);
    }
    this.update();
  },
  setCartTotal: function() {
    this.total = this.models.reduce(function sumCartTotal(acc, item) {
      return acc + (item.get('price') * item.get('quantity'));
    }, 0);
  },
  createView: function() {
    this.View = new CartView({ collection: this });
  },
  emptyCart: function() {
    this.View.$el.hide('fast', this.removeView.bind(this));
  },
  readStorage: function() {
    var existingCart = JSON.parse(window.localStorage.getItem('cart'));
    if (existingCart.length) {
      this.reset(existingCart);
      this.setupSavedCart();
    }
  },
  setStorage: function() {
    window.localStorage.setItem('cart', JSON.stringify(this));
  },
  setupSavedCart: function() {
    this.setCartTotal();
    this.trigger('SHOW_CART');
    this.trigger('CART_UPDATED');
  },
  removeView: function() {
    this.reset();
    this.setStorage();
    this.View.remove();
  },
  update: function() {
    this.setCartTotal();
    this.trigger('SHOW_CART');
    this.trigger('CART_UPDATED');
    this.setStorage(); // this could change to a window unload event eventually
  },
});
