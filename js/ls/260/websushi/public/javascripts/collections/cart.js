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
  },
  createView: function() {
    this.View = new CartView({ collection: this });
  },
  emptyCart: function() {
    this.reset();
    this.View.remove();
  },
});
