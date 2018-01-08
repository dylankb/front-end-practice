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
      todosCount: this.model.Todos.toJSON().length,
    }));
  },
  renderTodosByMonth: function(e) {
    e.preventDefault();

    App.completedFilter = '';
    App.monthFilter = App.getSelectedMonth(e);

    App.EventBus.trigger('UPDATED_FILTER');
  },
});
