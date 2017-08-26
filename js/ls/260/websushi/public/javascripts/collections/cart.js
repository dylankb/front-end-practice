var CartCollection = Backbone.Collection.extend({
  initialize: function() {
    this.listenToOnce(this, 'add', this.createView);
  },
  addItem: function(item) {
    this.add(item);
  },
  createView: function() {
    this.View = new CartView({ collection: this });
  },
});
