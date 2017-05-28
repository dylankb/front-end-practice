var ItemModel = Backbone.Model.extend({
  initialize: function() {
    this.set('id', this.collection.nextId);
    this.collection.nextId += 1;
  }
});

var ItemsCollection = Backbone.Collection.extend({
  model: ItemModel,
  nextId: 0,
  totalQuantity: 0,
  initialize: function() {
    this.on('add', function() {
      this.sortCollectionBy('name');
      this.getTotal();
    });
    this.on('remove reset', function() {
      this.getTotal();
    });
  },
  sortCollectionBy: function(property) {
    this.comparator = property;
    this.sort();
  },
  getTotal: function() {
    this.totalQuantity = this.pluck('quantity').reduce(function(acc, quant) {
      return acc + Number(quant);
    }, 0);
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
    this.Items.getTotal();
    this.bindEvents();
    this.View = new ItemsView({ collection: App.Items });
    this.Quantity = new QuantityView({ collection: App.Items });
  },
  sortCollection: function(e) {
    this.Items.sortCollectionBy($(e.currentTarget).data('prop'));
  },
};

var ItemsView = Backbone.View.extend({
  el: $('tbody'),
  events: {
    'click a': 'remove',
  },
  template: Handlebars.compile($('#items').html()),
  remove: function(e) {
    e.preventDefault();

    var item = this.collection.get(+$(e.currentTarget).data('id'));
    this.collection.remove(item);
  },
  render: function () {
    this.$el.html(this.template({ items: this.collection.toJSON() }));
  },
  initialize: function(options) {
    // this.collection = options.collection;
    this.render();
    this.listenTo(this.collection, 'remove sort reset', this.render);
  }
});

var QuantityView = Backbone.View.extend({
  el: $('tfoot'),
  template: Handlebars.compile($('#quantity').html()),
  render: function() {
    this.$el.html(this.template(this.collection.totalQuantity));
  },
  initialize: function(options) {
    // this.collection = options.collection;
    this.render();
    this.listenTo(this.collection, 'add remove reset', this.render);
  }
});

Handlebars.registerPartial('item', $('#item').html());

App.init();
