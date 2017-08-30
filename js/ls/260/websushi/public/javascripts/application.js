var App = {
  init: function() {
    _.extend(this, Backbone.Events);
    this.Cart = new CartCollection();

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
      var siteLink = e.target.getAttribute('href');

      if (siteLink && siteLink.match(/^\//)) {
        App.Router.navigate(siteLink, { trigger: true });
      }
    });

    document.addEventListener('submit', function findSiteLinkPath(e) {
      var siteLink = e.target.getAttribute('action');

      if (siteLink && siteLink.match(/^\//)) {
        App.Router.navigate(siteLink, { trigger: true });
      }
    });
  },
  setupIndexViews: function() {
    App.MenuView = new MenuView({ collection: App.SushiCollection });
    App.HeaderView = new HeaderView({ collection: App.Cart });
  },
};
