$(function() {
  $('form').on('submit', function(e) {
    e.preventDefault();

    var itemName = $('.name').val();
    var itemQuantity = $('.quantity').val() || 1;

    $('.list').append('<li>' + itemQuantity + ' ' + itemName +  '</li>');

    $form = $(this);
    $form.get(0).reset();
  });
});
