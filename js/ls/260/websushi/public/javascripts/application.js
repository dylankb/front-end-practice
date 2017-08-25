var App = {
  init: function() {
    _.extend(this, Backbone.Events);
    this.Cart = new CartCollection();
    this.on('ADD_TO_CART', this.Cart.addItem.bind(this.Cart));

    this.HeaderView = new HeaderView();

    this.MenuView = new MenuView({ collection: this.SushiCollection });
  },
};
