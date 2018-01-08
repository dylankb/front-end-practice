var inventory;

(function() {
  inventory = {
    lastID: 0,
    collection: [],
    setDate: function() {
      var date = new Date();
      $('#order_date').text(date.toUTCString());
    },
    add: function() {
      this.lastID++;
      var item = {
        id: this.lastID,
        name: '',
        stockNumber: '',
        quantity: 1,
      };
      this.collection.push(item);
      return item;
    },
    newItem: function(e) {
      e.preventDefault();
      var item = this.add();
      var itemForm = this.template(item);

      $('#inventory').append(itemForm);
    },
    findParent: function(target) {
      return $(target).closest('tr');
    },
    findId: function(item) {
      return item.find('input[type="hidden"]').val();
    },
    getItem: function(id) {
      var foundItem = inventory.collection.filter(function(item, index) {
        return item.id === Number(id);
      });

      return foundItem[0];
    },
    remove: function(idx) {
      this.collection = inventory.collection.filter(function(item, index) {
        return item.id !== Number(idx);
      });
    },
    deleteItem: function(e) {
      e.preventDefault();
      var item = this.findParent(e.target).remove();
      this.remove(this.findId(item));
    },
    update: function(id, target) {
      var item = this.getItem(id);

      if (target.name.match(/name/)) {
        item.name = $(target).val();
      }
      else if (target.name.match(/stock/)) {
        item.stockNumber = $(target).val();
      }
      else if (target.name.match(/quantity/)) {
        item.quantity = $(target).val();
      }
    },
    updateItem: function(e) {
      // debugger;
      var id = this.findId(this.findParent(e.target));
      this.update(id, e.target);
      // Could consider sending parent object into update instead
    },
    bindEvents: function() {
      $('#add_item').on("click", $.proxy(this.newItem, this));
      $('#inventory').on("click", ".delete", $.proxy(this.deleteItem, this));
      $('#inventory').on("keyup", "input", $.proxy(this.updateItem, this));
    },
    cacheTemplate: function() {
      var inventoryTemplate = $('#inventory_item').html();
      this.template = Handlebars.compile(inventoryTemplate);
    },
    init: function() {
      this.setDate();
      this.cacheTemplate();
      this.bindEvents();
    },
  };

})();

$(inventory.init.bind(inventory));
