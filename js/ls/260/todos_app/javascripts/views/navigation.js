var NavigationView = Backbone.View.extend({
  el: '.navigation',
  events: {
    'click .all-todos-heading': 'renderAllTodos',
    'click .completed-todos-heading': 'renderAllCompletedTodos',
    'click .all-todos-list .todo-month-container': 'renderTodosByMonth',
    'click .completed-todos-list .todo-month-container': 'renderCompletedTodosByMonth',
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
    // Better to make a new component so it can listen to its collection?
    // Would need to listen to update (difficult to do efficiently) if todos weren't already loaded
    this.render();
  },
  renderAllTodos: function(e) {
    e.preventDefault();
    App.timeFilter = '';
    App.completedFilter = '';

    App.updateMainTodosHeading('All todos');
    App.updateMainTodosCount(App.Todos.models.length);

    App.EventBus.trigger('UPDATED_FILTER');
  },
  renderAllCompletedTodos: function(e) {
    e.preventDefault();
    App.completedFilter = 'true';
    App.timeFilter = '';

    App.EventBus.trigger('UPDATED_FILTER');
  },
  renderTodosByMonth: function(e) {
    var selectedMonth = App.getSelectedMonth(e);
    e.preventDefault();

    App.completedFilter = '';
    App.timeFilter = selectedMonth.attributes.dateKey;
    App.EventBus.trigger('UPDATED_FILTER');
  },
  renderCompletedTodosByMonth: function(e) {
    var selectedMonth = App.getSelectedMonth(e);
    e.preventDefault();

    App.completedFilter = 'true';
    App.timeFilter = selectedMonth.attributes.dateKey;

    App.EventBus.trigger('UPDATED_FILTER');
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
