var TodoMonthView = Backbone.View.extend({
  initialize: function() {
    this.render();
    this.listenTo(this.model.Todos, 'update', this.render);
  },
  events: {
    'click .todo-month-container': 'renderTodosByMonth',
  },
  render: function() {
    this.$el.html(App.templates.monthTodos({
      month: this.model.toJSON(),
      todosCount: this.model.completed().length,
    }));
  },
  renderTodosByMonth: function(e) {
    var selectedMonth = App.getSelectedMonth(e);
    e.preventDefault();

    App.completedFilter = '';
    App.timeFilter = selectedMonth.attributes.dateKey;
    App.saveFilterSettings();

    App.EventBus.trigger('UPDATED_FILTER');
  },
});
