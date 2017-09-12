var Todo = Backbone.Model.extend({
  initialize: function(data) {
    this.categorizeByMonth();
    this.set('completed', data.completed || false);
    this.set('id', data.id || todoCounter());
  },
  categorizeByMonth: function() {
    var month = App.TodoMonths.get(this.getDateKey());

    if (month) {
      month.ids.push(this.id)
    } else {
      var month = new TodoMonth(this)
      App.TodoMonths.add(month);
    }
  },
  deleteTodo: function() {
    this.removeFromMonth();
    delete Todos.list[this.id];
  },
  getDateKey: function() {
    if (!this.dueDate) {
      return "No Due Date";
    } else {
      return this.dueDate.replace(/(\d{4})-(\d{2})-(\d{2})/, '$1-$2-01');
    }
  },
  removeFromMonth: function() {
    var month = TodoMonths.list[this.getDateKey()];

    if (month.ids.length === 1) {
      delete TodoMonths.list[this.getDateKey()];
      return;
    }

    var idIndex = month.ids.indexOf(this.id);
    TodoMonths.list[this.getDateKey()].ids.splice(idIndex, 1);
  },
  toggleState: function() {
    this.completed = !this.completed;
  },
  updateTodo: function(todoInfo) {
    this.removeFromMonth();
    this.updateTodoInfo(todoInfo);
    this.categorizeByMonth();
  },
  updateTodoInfo: function(todoInfo) {
    return Object.assign(this, todoInfo);
  }
});
