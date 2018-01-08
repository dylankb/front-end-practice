$(function() {
  $("nav a").on("mouseenter", function() {
    $(this).next("ul").toggleClass('display');
  });

  $(".button").on("click", function(e) {
    e.preventDefault();

    $(this).addClass("clicked");
  });

  $("button").on("click", function() {
    $(this).addClass("clicked");
  });

  $(".toggle").on("click", function(e) {
    e.preventDefault();

    $(this).next(".accordion").toggleClass("opened");
  });

  $("form").on("submit", function(e) {
    e.preventDefault();
    var cc_number = $(this).find("[type=text]").val(),

    cc_number = cc_number.split("").reverse();

    var odd_total;
    var even_total;

    function getOddEvenDigits(cc_number) {
      var odd_total = 0;
      var even_total = 0;

      for (var i = 0, len = cc_number.length; i < len; i++) {
        if (i % 2 == 1) {
          cc_number[i] = (+cc_number[i] * 2) + "";
          if (cc_number[i].length > 1) {
            cc_number[i] = +cc_number[i][0] + +cc_number[i][1];
          }
          else {
            cc_number[i] = +cc_number[i];
          }
          odd_total += cc_number[i];
        }
        else {
          even_total += +cc_number[i];
        }
      }
      return [odd_total, even_total];
    }

    [odd_total, even_total] = getOddEvenDigits(cc_number);

    var isValid = ((odd_total + even_total) % 10 === 0) ? true : false;

    $(this).find(".success").toggle(isValid)
    $(this).find(".error").toggle(!isValid);
  });

  $("ul a").on("click", function(e) {
    e.preventDefault();

    var month_text = {
      "January": "garnet",
      "February": "amethyst",
      "March": "aquamarine or bloodstone",
      "April": "diamond",
      "May": "emerald",
      "June": "pearl, moonstone, or alexandrite",
      "July": "ruby",
      "August": "peridot",
      "September": "sapphire",
      "October": "opal or tourmaline",
      "November": "topaz or citrine",
      "December": "turquoise, zircon, or tanzanite"
    };

    var month = $(this).text(),
    $stone = $("#birthstone");

    $stone.text(month_text[month]);
    // My over-engineered attempt

    // var birthstoneMonths = [
    //   { month : "January", birthstone : "garnet" },
    //   { month : "February", birthstone : "amethyst" },
    //   { month : "March", birthstone : "aquamarine or bloodstone" },
    //   { month : "April", birthstone : "diamond" },
    //   { month : "May", birthstone : "emerald" },
    //   { month : "June", birthstone : "pearl, moonstone, or alexandrite" },
    //   { month : "July", birthstone : "ruby" },
    //   { month : "August", birthstone : "peridot" },
    //   { month : "September", birthstone : "sapphire" },
    //   { month : "October", birthstone : "opal or tourmaline" },
    //   { month : "November", birthstone : "topaz or citrine" },
    //   { month : "December", birthstone : "turquoise, zircon, or tanzanite" },
    // ];

    // function findBirthstone(birthstoneMonths, month) {
    //   var stones = birthstoneMonths.filter(function(stone) {
    //     return stone.month === month;
    //   });
    //   return stones[0].birthstone;
    // }
    //
    // var stoneName = findBirthstone(birthstoneMonths, month);

    // $stone.text(stoneName);
  });
});
