$(document).ready(function() {
  var click_counter = 0;

    // $('section.images').click(function() {

  $("div").click(function(){
    var myClass = $(this).attr("class");
    console.log(myClass)
    $("."+myClass + " .question").hide();
    $("."+myClass + " .animal").toggle();
  });

//   });
});
