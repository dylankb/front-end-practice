var Router = Backbone.Router.extend({
  routes: {
    '': 'defaultRoute',
    'menu': 'renderIndexViews',
    'checkout': 'loadCheckoutPage',
  },
  defaultRoute: function() {
    this.navigate('menu', { trigger: true });
  },
  removeIndexViews: function() {
    App.Cart.View.$el.detach();
    App.MenuView.$el.detach();
  },
  loadCheckoutPage: function() {
    this.removeIndexViews();
    App.CheckoutView = new CheckoutView({ collection: App.Cart });
  },
  renderIndexViews: function() {
    App.MenuView.render();
    if (App.CheckoutView) { App.CheckoutView.remove(); }
    if (App.Cart.View) { App.Cart.View.render(); }
  },
});
