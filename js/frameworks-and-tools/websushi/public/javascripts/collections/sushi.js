var SushiCollection = Backbone.Collection.extend({
  model: SushiModel,
  findLastId: function() {
    var sortedIds = this.map(function findIds(item) {
      return item.get('id');
    }).sort(function sortIds(a, b) {
      return a - b;
    });

    return _.last(sortedIds);
  },
});
