var basket = "empty";

function goShopping() {
  function shop1() {
    basket = "tv";
  }

  console.log(basket);

  function shop2() {
    basket = "computer";
  }

  function shop3() {
    var basket = "play station";
    console.log(basket);
  }

  shop1();
  console.log(basket + "After shop 1");
  shop2();
  console.log(basket + "After shop 2");
  shop3();

  console.log(basket);
}

goShopping();