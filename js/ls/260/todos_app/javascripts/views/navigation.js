var NavigationView = Backbone.View.extend({
  el: '.navigation',
  events: {
    'click .todo-month-container': this.renderCompletedTodosByMonth,
  },
  initialize: function() {
    this.TodoMonthsAllView = new TodoMonthsAllView({
      collection: App.TodoMonths,
    });

    this.TodoMonthsCompletedView = new TodoMonthsCompletedView({
      collection: App.TodoMonths,
    });

    this.listenTo(App.Todos, 'update', this.updateNavAllTodosCount);

    this.listenTo(App.Todos, 'change:completed', this.updateNavCompletedTodosCount);
    this.listenTo(App.Todos, 'update', this.updateNavCompletedTodosCount);
    this.render();
  },
  render: function() {
    this.$el.html(App.templates.navigation);
    this.TodoMonthsAllView.setElement(this.$('.all-todos-list')).render();
    this.TodoMonthsCompletedView.setElement(this.$('.completed-todos-list')).render();
    this.updateNavCompletedTodosCount();
    this.updateNavAllTodosCount();
  },
  updateNavCompletedTodosCount: function() {
    this.$('.completed-todos-count').text(App.Todos.completed().length);
  },
  updateNavAllTodosCount: function() {
    this.$('.todos-count').text(App.Todos.models.length);
  },
  template: App.templates.navigation,
});
