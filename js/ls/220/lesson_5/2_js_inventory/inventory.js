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
      var $item = $(this.template.replace(/ID/g, item.id));

      $('#inventory').append($item);
    },
    remove: function(idx) {

    },
    deleteItem: function(e) {
      e.preventDefault();
      var item = $(e.target).closest('tr').remove();
      this.remove($item.find('input[type="hidden"]').val());
      // $($('input[name=item_id_1]').parent().parent().remove());
    },
    bindEvents: function() {
      $('#add_item').on("click", $.proxy(this.newItem, this));
      $('#inventory').on("click", ".delete", $.proxy(this.deleteItem, this));
    },
    cacheTemplate: function() {
      $inventoryTemplate = $('#inventory_item').remove();
      this.template = $inventoryTemplate.html();
    },
    init: function() {
      this.setDate();
      this.cacheTemplate();
      this.bindEvents();
    },
  };

})();

$(inventory.init.bind(inventory));
