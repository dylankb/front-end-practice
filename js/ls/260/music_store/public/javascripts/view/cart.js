var CartView = Backbone.View.extend({
  template: App.templates.cart,
  el: $('header').get(0),
  render: function() {
    var cartData = {
      quantity: this.collection.getQuantity(),
      items: this.collection.toJSON(),
      total: this.collection.getTotal(),
    };
    this.$el.html(this.template(cartData));
    // $(document.body).find('header').html(this.$el);
    // this.$el.appendTo($('header'));
  },
  initialize: function() {
    this.render();
    this.listenTo(this.collection, "CART_UPDATED", this.render);
  }
});
