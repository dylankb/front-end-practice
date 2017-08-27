var Router = Backbone.Router.extend({
  },
  routes: {
    'checkout': 'loadCheckoutPage',
  },
  index: function() {
  },
  loadCheckoutPage: function() {
    App.Cart.View.remove();
    App.Cart.View.SummarySection.remove();
    App.Cart.View.ItemsList.remove();
    App.MenuView.remove();
    App.CheckoutView = new CheckoutView({ collection: App.Cart });
  },
});
