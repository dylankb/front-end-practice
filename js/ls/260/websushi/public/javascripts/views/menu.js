var MenuView = Backbone.View.extend({
  attributes: {
    id: 'items',
  },
  render: function() {
    this.collection.each(this.renderMenuItem, this);
    App.$content.html(this.$el);
  },
  renderMenuItem: function(sushi) {
    var menuItem = new MenuItemView({ model: sushi });
    this.$el.append(menuItem.el);
  },
  tagName: 'ul',
});
