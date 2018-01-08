var MainHeaderView = Backbone.View.extend({
  initialize: function() {
    this.listenTo(this.collection, 'update change:completed', this.render);
  },
  render: function() {
    var currentSelection;
    var todosModels;

    if (App.completedFilter) {
      currentSelection = 'Completed';
      todosModels = this.collection.completed();
    } else {
      currentSelection = 'All Todos';
      todosModels = this.collection.toJSON();
    }
    if (App.monthFilter) { currentSelection = App.monthFilter; }

    this.$el.html(App.templates.todosHeader({
      currentSelection: currentSelection,
      todosCount: todosModels.length,
    }));
  },
});
