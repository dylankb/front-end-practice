var TodosCollection = Backbone.Collection.extend({
  count: function() {
    return Object.values(this.list).length;
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
  saveToLocalStore: function() {
    window.localStorage.setItem('todosList', JSON.stringify(this.toJSON()));
  },
});
