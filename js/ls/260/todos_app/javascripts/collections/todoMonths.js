var TodoMonthsCollection = Backbone.Collection.extend({
  list: {},
  // createObject: function(monthInfo) {
  //   return new TodoMonth(monthInfo);
  // },
  loadList: function() {
    this.list = JSON.parse(localStorage.getItem('monthsList')) || {};

    var monthObjects = Object.values(this.list);
    if (monthObjects) { this.loadMonthsFromObjects(monthObjects); }
  },
  loadMonthsFromObjects: function(monthObjects) {
    monthObjects.forEach(function createAndAddMonth(monthInfo) {
      // var month = this.createObject(monthInfo);
      // month.addToList();
      this.add(monthInfo)
    }.bind(this));
  },
  model: TodoMonth,
  saveToLocalStore: function() {
    window.localStorage.setItem('monthsList', JSON.stringify(this.toJSON()));
  },
  withCompletedTodos: function() {
    return Object.values(this.list).filter(function countCompletedInMonth(month) {
      return month.completed().length;
    });
  }
});
