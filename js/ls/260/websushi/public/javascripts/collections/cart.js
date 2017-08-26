var CartCollection = Backbone.Collection.extend({
  initialize: function() {
    this.listenToOnce(this, 'add', this.createView);
    this.HeaderView = new HeaderView({ collection: this });
  },
  addItem: function(item) {
    this.add(item);
  },
  createView: function() {
    this.View = new CartView({ collection: this });
  },
  emptyCart: function() {
    this.reset();
    this.View.remove();
  },
});
