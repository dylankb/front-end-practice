// Compile template & partial
var template = Handlebars.compile($('#items').html());
Handlebars.registerPartial('item', $('#item').html());

var Items = {
  addItem: function(e) {
    e.preventDefault();
    var itemData = $(e.currentTarget).serializeArray().reduce(function(acc, input) {
      acc[input.name] = input.value;
      return acc;
    }, {});

    var item = this.create(itemData);
    this.$output.append(Handlebars.partials.item(item.toJSON()));
  },
  bindEvents: function() {
    $('tbody').on('click', 'a', this.remove.bind(this));
    $('form').on('submit', this.addItem.bind(this));
    $('table + p a').on('click', this.deleteAll.bind(this));
    $('thead th').on('click', this.sortCollection.bind(this));
  },
  collection: [],
  create: function (itemData) {
    var item = new ItemModel(itemData);
    this.collection.push(item);

    return item;
  },
  deleteAll: function(e) {
    e.preventDefault();

    this.collection = [];
    this.render();
  },
  init: function() {
    this.seedCollection();
    this.sortCollectionBy('name');
    this.render();
    this.bindEvents();
  },
  $output: $('tbody'),
  remove: function(e) {
    e.preventDefault();

    var item = _(this.collection).findWhere({ id: +$(e.currentTarget).data('id') });
    this.collection = _(this.collection).without(item);

    this.render();
  },
  render: function() {
    this.$output.html(template({ items: this.collection }));
  },
  seedCollection: function() {
    items_json.forEach(function(item) {
      this.create(item);
    }, this);
  },
  sortCollection: function(e) {
    this.sortCollectionBy($(e.currentTarget).data('prop'));
  },
  sortCollectionBy: function(property) {
    this.collection = _.sortBy(this.collection, function(item) {
      return item.attributes[property];
    });
    this.render();
  },
};

var ItemModel = Backbone.Model.extend({
  defaults: {
    id: Items.collection.length + 1,
  }
});

Items.init();

console.log(Items.collection);
