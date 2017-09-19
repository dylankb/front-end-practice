var TodosHeaderView = Backbone.View.extend({
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
    if (App.timeFilter) { currentSelection = App.timeFilter; }

    this.$el.html(App.templates.todosHeader({
      currentSelection: currentSelection,
      todosCount: todosModels.length,
    }));
  },
});
