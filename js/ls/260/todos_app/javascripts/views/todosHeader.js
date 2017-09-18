var TodosHeaderView = Backbone.View.extend({
  el: '.todos-header',
  initialize: function() {
    this.render();
    this.listenTo(this.collection, 'reset update change:completed', this.render);
  },
  render: function() {
    var currentSelection = App.completedFilter ? 'Completed' : 'All Todos';
    if (App.timeFilter) { currentSelection = App.timeFilter; }

    this.$el.html(App.templates.todosHeader({
      currentSelection: currentSelection,
      todosCount: this.collection.toJSON().length,
    }));
  },
});
