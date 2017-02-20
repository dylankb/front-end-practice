$(function() {

  $('nav a').on('click', function(e) {
    e.preventDefault();
    var $clickedTab = $(this).parent();
    var index = $tabs.index($clickedTab);

    setTab(index);
    localStorage.setItem('index', index);
  });

  $(':radio').on('change', function(e) {
    var color = $(this).val();

    $(document.body).css('background', color);
    localStorage.setItem('color', color);
  });

  $(window).unload(function() {
    localStorage.setItem('note', $('textarea').val());
  });

  setBackgroundColor(localStorage.getItem('color'));
  setTab(localStorage.getItem('index'));
  setNote(localStorage.getItem('note'));
});

function setTab(savedIndex) {
  if (savedIndex === null) { return; }
  toggleTab(savedIndex);
  updateContent(savedIndex);
}
  // Toggle active class
function toggleTab(index) {
  $('nav a').removeClass();
  $('nav a').eq(index).addClass('active');
}

// Reveal contents matching tab clicked
function updateContent(index) {
  $('#tabs').children().hide().eq(index).show();
}

function setBackgroundColor(color) {
  if (color === null) { return; }
  $("[value=" + color + "]").prop("checked", true).change();
}

function setNote(savedNote) {
  $('textarea').text(savedNote);
}

/**
  1) Initial page load - set... functions execute. They will pass in nil parameters, so they will exit early and not do any page updates
  2) After an action has happened set... functions will execute. Inside the function bodies the DOM will update and the values will be saved to local storage.
*/

// functions called by setTab could also be included in callback, and set tab could just trigger the `click()`

// function setTab(savedIndex) {
//   if (savedIndex === null) { return; }
//   $('nav a').eq(idx).click();
// }
