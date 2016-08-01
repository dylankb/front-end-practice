$(document).ready(function() {
  $("#blanks form").submit(function(event) {

    var firstName = $("#first-name").val();
    var lastName = $("#last-name").val();
    var age = $("#age").val();
    var beverage = parseInt($("#beverage").val());


    $(".first-name").text(firstName)
    $(".last-name").text(lastName);
    $(".age").text(age);
    $(".beverage").text(beverage);

    // alert(typeof beverage)

    $(".intro").show();

    event.preventDefault();
  });
});