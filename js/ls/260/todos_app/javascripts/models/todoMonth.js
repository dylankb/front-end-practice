var TodoMonth = Backbone.Model.extend({
  initialize: function(data) {
    if (data instanceof Todo) {
      this.ids = [data.id];
      this.dateKey = data.getDateKey();
    } else {
      this.ids = data.ids;
      this.dateKey = data.dateKey;
    }
  },
  addToList: function() {
    TodoMonths.list[this.dateKey] = this;
  },
  idAttribute: 'dateKey',
  getDateKey: function() {
    var dateObj = new Date(this.dateKey + 'T08:00:00');

    if (isNaN(dateObj.getTime())) { return this.dateKey; }

    var year = String(dateObj.getFullYear()).slice(2, 4);
    var month = dateObj.getMonth() + 1;

    return month + '/' + year;
  },
  getTodos: function(months) {
    return this.ids.reduce(function(acc, id) {
      acc.push(Todos.list[id]);
      return acc;
    }, []);
  },
  completed: function() {
    return this.ids.reduce(function findCompleted(acc, id) {
      if (Todos.list[id].completed) { acc.push(Todos.list[id]); }
      return acc;
    }, []);
  },
  notCompleted: function() {
    return this.ids.reduce(function findNotCompleted(acc, id) {
      if (!Todos.list[id].completed) { acc.push(Todos.list[id]); }
      return acc;
    }, []);
  }
});
