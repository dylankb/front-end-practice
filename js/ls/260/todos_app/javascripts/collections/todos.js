var TodosCollection = Backbone.Collection.extend({
  initialize: function() {
    this.on('TOGGLE_TODO_STATE', this.toggleTodoState);
    this.on('REMOVE_TODO', this.removeTodo);
    this.on('PROCESS_TODO_INFO', this.processTodoInfo);
  },
  comparator: 'completed',
  completed: function() {
    return this.toJSON().reduce(function(acc, todo) {
      if (todo.completed) { acc.push(todo); }
      return acc;
    }, []);
  },
  loadList: function() {
    var todos = JSON.parse(localStorage.getItem('todosList')) || {};
    if (todos.length) { this.reset(todos); }
    this.models.forEach(function(todo) {
      todo.categorizeByMonth();
    });
  },
  model: Todo,
  processTodoInfo: function(options) {
    var id = options.todoId;
    var todoInfo = options.data;
    var markComplete = options.markComplete;

    id ? this.get(id).set(todoInfo) : this.add(todoInfo);

    App.resetFilters();
  },
  removeTodo: function(id) {
    App.Todos.remove(id);
  },
  toggleTodoState: function(id) {
    App.Todos.get(id).toggleState();
  },
  saveToLocalStore: function() {
    window.localStorage.setItem('todosList', JSON.stringify(this.toJSON()));
  },
});
