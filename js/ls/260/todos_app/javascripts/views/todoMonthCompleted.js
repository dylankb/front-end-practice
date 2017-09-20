var TodoMonthCompletedView = Backbone.View.extend({
  initialize: function() {
    this.render();
    this.listenTo(this.model.Todos, 'change:completed', this.render);
  },
  events: {
    'click .todo-month-container': 'renderCompletedTodosByMonth',
  },
  render: function() {
    this.$el.html(App.templates.monthTodosCompleted({
      month: this.model.toJSON(),
      todosCount: this.model.completed().length,
    }));
  },
  renderCompletedTodosByMonth: function(e) {
    var selectedMonth = App.getSelectedMonth(e);
    e.preventDefault();

    App.completedFilter = 'true';
    App.timeFilter = selectedMonth.attributes.dateKey;
    App.saveFilterSettings();

    App.EventBus.trigger('UPDATED_FILTER');
  },
});
