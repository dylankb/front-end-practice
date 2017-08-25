var App = {
  init: function() {
    this.HeaderView = new HeaderView();
    this.CartView = new CartView();
    this.MenuView = new MenuView({ collection: this.SushiCollection });
  },
};
