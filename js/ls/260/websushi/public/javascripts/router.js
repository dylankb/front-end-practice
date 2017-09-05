var Router = Backbone.Router.extend({
  /* eslint-disable quote-props */
  routes: {
    '': 'defaultRoute',
    'menu': 'renderIndexViews',
    'menu/:id': 'showDetailView',
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
    if (!App.CheckoutView) {
      App.CheckoutView = new CheckoutView({ collection: App.Cart });
    } else {
      App.CheckoutView.render();
    }
  },
  renderIndexViews: function() {
    App.MenuView.render();
    if (App.CheckoutView) { App.CheckoutView.remove(); }
    if (!App.Cart.isEmpty()) { App.Cart.View.render(); }
    // Why doesn't App.trigger('DISPLAY_CART'); work?
  },
  showDetailView: function(id) {
    App.MenuView.$el.detach(); // Don't need this in MenuItemDetail re-renders, only initially

    var item = App.SushiCollection.get(id);
    App.MenuItemDetail = new MenuItemDetail({ model: item });
  },
});
