var App = {
  init: function() {
    this.Cart = new CartCollection();

    _.extend(this, Backbone.Events);
    this.on('ADD_TO_CART', this.Cart.addItem.bind(this.Cart));
    this.on('EMPTY_CART', this.Cart.emptyCart.bind(this.Cart));

    this.setupIndexViews();
    this.setupRouter();
  },
  setupRouter: function setupRouter() {
    this.Router = new Router();

    Backbone.history.start({
      pushState: true,
    });

    document.addEventListener('click', function findSiteLinkUrl(e) {
      var href = e.target.getAttribute('href');
      e.preventDefault();

      if (href && href.match(/^\//)) {
        App.Router.navigate(e.target.getAttribute('href'), { trigger: true });
      }
    });
  },
  setupIndexViews: function() {
    App.MenuView = new MenuView({ collection: App.SushiCollection });
    App.HeaderView = new HeaderView({ collection: App.Cart });
  },
};
