var MenuItemView = Backbone.View.extend({
  attributes: function() {
    return {
      'data-id': this.model.attributes.id,
    };
  },
  addToCart: function(e) {
    e.preventDefault();
    App.Cart.trigger('ADD_ITEM', this.model);
  },
  events: {
    'click .add_cart': 'addToCart',
    'click header': 'showDetail',
  },
  initialize: function() {
    this.render();
  },
  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
  },
  showDetail: function(e) {
    var id = $(e.target).closest('li').data('id');
    App.Router.navigate('menu/' + id, { trigger: true });
  },
  tagName: 'li',
  template: Handlebars.templates.menuItem,
});
