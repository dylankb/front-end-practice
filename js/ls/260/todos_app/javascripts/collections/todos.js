var TodosCollection = Backbone.Collection.extend({
  initialize: function() {
    this.on('TOGGLE_TODO_STATE', this.toggleTodoState);
  },
  comparator: 'completed',
  completed: function() {
    return this.toJSON().reduce(function(acc, todo) {
      if (todo.completed) { acc.push(todo); }
      return acc;
    }, []);
  },
  createObject: function(todoInfo) {
    return new Todo(todoInfo);
  },
  loadList: function() {
    var todos = JSON.parse(localStorage.getItem('todosList')) || {};
    if (todos.length) { this.reset(todos) };
    this.models.forEach(function(todo) {
      todo.categorizeByMonth();
    });
  },
  notCompleted: function() {
    return this.toJSON().reduce(function(acc, todo) {
      if (!todo.completed) { acc.push(todo); }
      return acc;
    }, []);
  },
  model: Todo,
  toggleTodoState: function(id) {
    App.Todos.get(id).toggleState();
  },
  saveToLocalStore: function() {
    window.localStorage.setItem('todosList', JSON.stringify(this.toJSON()));
  },
});
