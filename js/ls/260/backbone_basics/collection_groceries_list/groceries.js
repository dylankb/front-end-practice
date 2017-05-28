var ItemModel = Backbone.Model.extend({
  initialize: function() {
    this.set('id', this.collection.nextId);
    this.collection.nextId += 1;
  }
});

var ItemsCollection = Backbone.Collection.extend({
  model: ItemModel,
  nextId: 0,
  initialize: function() {
    this.on('add', function() {
      this.sortCollectionBy('name');
    });
    this.on('add remove reset sort', this.render);
  },
  $output: $('tbody'),
  render: function() {
    this.$output.html(App.template({ items: this.toJSON() }));
  },
  sortCollectionBy: function(property) {
    this.comparator = property;
    this.sort();
  }
});

var App = {
  addItem: function(e) {
    e.preventDefault();
    var itemData = $(e.currentTarget).serializeArray().reduce(function(acc, input) {
      acc[input.name] = input.value;
      return acc;
    }, {});

    this.Items.add(itemData);
  },
  bindEvents: function() {
    $('tbody').on('click', 'a', this.remove.bind(this));
    $('form').on('submit', this.addItem.bind(this));
    $('table + p a').on('click', this.deleteAll.bind(this));
    $('thead th').on('click', this.sortCollection.bind(this));
  },
  deleteAll: function(e) {
    e.preventDefault();
    this.Items.reset();
  },
  init: function() {
    this.Items = new ItemsCollection(items_json);
    this.Items.sortCollectionBy('name');
    this.Items.render();
    this.bindEvents();
  },
  template: Handlebars.compile($('#items').html()),
  remove: function(e) {
    e.preventDefault();

    var item = this.Items.get(+$(e.currentTarget).data('id'));
    this.Items.remove(item);
  },
  sortCollection: function(e) {
    this.Items.sortCollectionBy($(e.currentTarget).data('prop'));
  },
};

Handlebars.registerPartial('item', $('#item').html());

App.init();
