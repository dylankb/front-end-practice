$(function() {

  var catalog = [{
    "title": "The Legend of Zelda: Majora's Mask 3D",
    "id": 1,
    "category": "Nintendo 3DS"
  }, {
    "title": "Super Smash Bros.",
    "id": 2,
    "category": "Nintendo 3DS"
  }, {
    "title": "Super Smash Bros.",
    "id": 3,
    "category": "Nintendo WiiU"
  }, {
    "title": "LEGO Batman 3: Beyond Gotham",
    "id": 4,
    "category": "Nintendo WiiU"
  }, {
    "title": "LEGO Batman 3: Beyond Gotham",
    "id": 5,
    "category": "Xbox One"
  }, {
    "title": "LEGO Batman 3: Beyond Gotham",
    "id": 6,
    "category": "PlayStation 4"
  }, {
    "title": "Far Cry 4",
    "id": 7,
    "category": "PlayStation 4"
  }, {
    "title": "Far Cry 4",
    "id": 8,
    "category": "Xbox One"
  }, {
    "title": "Call of Duty: Advanced Warfare",
    "id": 9,
    "category": "PlayStation 4"
  }, {
    "title": "Call of Duty: Advanced Warfare",
    "id": 10,
    "category": "Xbox One"
  }];

  var $categories = $('input');
  var $titles = $('li');

  $categories.on('change', function() {
    // Get toggled checkbox, value, and checked state
    var $checkbox = $(this);
    var category = $checkbox.val();
    var checked = $checkbox.is(":checked");

    // First solution (text matching)
    // if ($(this).is(':checked')) {
    //   $('li').filter(':contains(' + category + ')').show();
    // } else {
    //   $('li').filter(':contains(' + category + ')').hide();
    // }

    // Get JSON objects matching chechbox value (category)
    var $categoryItems = catalog.filter(function(item) {
      return item.category === category;
    });

    // Show or hide DOM elements with matching IDs based on their previous show/hide state (toggle)
    $categoryItems.forEach(function(item) {
      $titles.filter("[data-id=" + item.id + "]").toggle(checked);
    });

  });
});
