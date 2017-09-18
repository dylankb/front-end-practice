var ContentView = Backbone.View.extend({
  el: '.content',
  events: {
    'click .new-todo': 'displayTodoModal',
    'click .todo-title': 'displayEditTodoModal',
  },
  initialize: function() {
    this.render();
    this.listenTo(App.EventBus, 'UPDATED_FILTER', this.updateMainContent);
    this.listenTo(App.Todos, 'update', this.updateMainContent);
  },
  displayTodoModal: function(e) {
    var id = App.getTodoId(e, 'tr');
    e.preventDefault();

    this.TodoModalView = new TodoModalView();
    this.$el.append(this.TodoModalView.el);
  },
  updateMainContent: function() {
    var todos = App.timeFilter ? App.TodoMonths.get(App.timeFilter).Todos : App.Todos;

    if (this.selectedTodos) {
      this.selectedTodos.reset(todos.toJSON());
    } else {
      this.selectedTodos = new TodosCollection(todos.toJSON());
    }

    this.updateMainHeader();
    this.renderMainTodos();
  },
  updateMainHeader: function() {
    // var currentSelection = App.completedFilter ? 'Completed' : 'All Todos';
    // if (App.timeFilter) { currentSelection = App.timeFilter; }

    this.todosHeader = new TodosHeaderView({
      collection: this.selectedTodos,
    });

    // var todosData = App.completedFilter ? todos.completed() : todos.toJSON();
    //
    // App.updateMainTodosCount(todosData.length);
    // App.updateMainTodosHeading(currentSelection);
  },
  renderMainTodos: function() {
    this.MainTodosView = new MainTodosView({ collection: this.selectedTodos });
  },
  render: function() {
    this.$el.html(App.templates.content);
    this.updateMainContent();
  },
});
