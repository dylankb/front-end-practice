var TodoMonth = Backbone.Model.extend({
  initialize: function(dateKey) {

    if (!this.get('dateKey')) {
      this.set('dateKey', dateKey);
    };

    this.Todos = new TodosCollection();
  },
  idAttribute: 'dateKey',
  getDateKey: function() {
    var dateObj = new Date(this.dateKey + 'T08:00:00');

    if (isNaN(dateObj.getTime())) { return this.dateKey; }

    var year = String(dateObj.getFullYear()).slice(2, 4);
    var month = dateObj.getMonth() + 1;

    return month + '/' + year;
  },
  completed: function() {
    return this.Todos.reduce(function findCompleted(acc, todo) {
      if (todo.get('completed')) { acc.push(todo); }
      return acc;
    }, []);
  },
  notCompleted: function() {
    return this.Todos.reduce(function findCompleted(acc, todo) {
      if (!todo.get('completed')) { acc.push(todo); }
      return acc;
    }, []);
  },
});
