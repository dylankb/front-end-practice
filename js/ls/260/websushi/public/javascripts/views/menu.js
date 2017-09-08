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
    App.$content.html(this.$el);
  },
  renderMenuItem: function(sushi) {
    var menuItem = new MenuItemView({ model: sushi });
    this.$el.append(menuItem.el);
  },
  tagName: 'ul',
});
