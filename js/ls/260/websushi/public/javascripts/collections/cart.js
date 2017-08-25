var CartCollection = Backbone.Collection.extend({
  initialize: function() {
    this.on('add', this.createView);
  },
  addItem: function(item) {
    this.add(item);
  },
  createView: function() {
    this.View = new CartView({ collection: this });
  },
});
