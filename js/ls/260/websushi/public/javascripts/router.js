var Router = Backbone.Router.extend({
  routes: {
    '': 'renderIndexViews',
    'checkout': 'loadCheckoutPage',
  },
  removeIndexViews: function() {
    App.Cart.View.$el.detach();
    // App.Cart.View.SummarySection.remove();
    // App.Cart.View.ItemsList.remove();
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
