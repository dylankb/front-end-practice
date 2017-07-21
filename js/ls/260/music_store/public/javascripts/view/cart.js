var CartView = Backbone.View.extend({
  template: App.templates.cart,
  el: $('header').get(0),
  render: function() {
    debugger;
    this.$el.html(this.template({
      quantity: this.collection.getQuantity(),
      items: this.collection.toJSON(),
      total: this.collection.getTotal(),
    }));
    // $(document.body).find('header').html(this.$el);
    // this.$el.appendTo($('header'));
  },
  initialize: function() {
    this.render();
    this.listenTo(this.collection, "CART_UPDATED", this.render);
  }
});
