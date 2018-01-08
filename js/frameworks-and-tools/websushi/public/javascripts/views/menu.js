var MenuView = Backbone.View.extend({
  attributes: {
    id: 'items',
  },
  initialize: function() {
    this.buildMenuItems();
  },
  buildMenuItems: function() {
    this.collection.each(this.renderMenuItem, this);
  },
  render: function() {
    // Not truly idempotent, as rerenders cause MenuItems to lose events;
    App.$content.html(this.$el);
  },
  renderMenuItem: function(sushi) {
    var menuItem = new MenuItemView({ model: sushi });
    this.$el.append(menuItem.el);
  },
  tagName: 'ul',
});
