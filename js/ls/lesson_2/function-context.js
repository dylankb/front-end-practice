var temperatures = [53, 86, 12, 43];

function average() {
  var total = 0;

  for (var i = this.length - 1; i >= 0; i--) {
    total += this[i];
  }

  return total / this.length;
}

// Explicit call for temperatures as context for average

console.log(average.call(temperatures));      
console.log(average.apply(temperatures));

// Bind array as the caller

var averageTemperature = average.bind(temperatures);

console.log(averageTemperature());

// Create method as property on array object

temperatures.average = average
console.log(temperatures.average());

// What is this?

function whatIsMyContext() {
  return this;
}

whatIsMyContext();

//  Global window object

function foo() {
  function bar() {
    function baz() {
      console.log(this);
    }
    baz();
  }
  bar();
}

foo();

// window

function foo() {
  console.log(this.a);
}

var a = 2;
foo();

// 2

var a = 1;

function bar() {
  console.log(this.a);
}

// 2

var obj = {
  a: 2,
  foo: bar,
};

obj.foo();

//  2

var my_object = {
  count: 1,
  my_child_object: {
    myMethod: function() {
      return this.count;
    }
  }
};

my_object.my_child_object.myMethod.call(my_object);

// 1

var computer = {
  price: 30000,
  shipping: 2000,
  total: function() {
    var tax = 3000;

    function specialDiscount() {
      if (this.price > 20000) {
        return 1000;
      } else {
        return 0;
      }
    }.bind(this);
    return this.price + this.shipping + this.tax - specialDiscount();
  },
}

console.log(computer.total());


Front End Development with JavaScriptLesson 2: JavaScript ObjectsExercises: What is this? (2)
Give us your feedback
Exercises: What is this? (2)

What will this point to in the code below?

var my_object = {
  count: 1,
  my_child_object: {
    myMethod: function() {
      return this.count;
    }
  }
};

my_object.my_child_object.myMethod();
Solution
In the previous example, how would we change the context, or the value of this, to be the parent my_object?

Solution
What will the following code log out?

var person = {
  first_name: "Peter",
  last_name: "Parker",
  fullName: function() {
    console.log(this.first_name + " " + this.last_name + " is the Amazing Spiderman!");
  }
}

var whoIsSpiderman = person.fullName.bind(person);
whoIsSpiderman();
Solution
Peter Parker is the Amazing Spiderman!
The bind method permanently binds the this in the fullName method to the person object itself.
What will the following code log out?

var a = 1;

obj = {
  a: 2,
  func: function() {
    console.log(this.a);
  }
}

obj.func();
obj.func.call();
obj.func.call(this);
obj.func(obj);

var obj2 = {a: 3};

obj.func.call(obj2);
Solution
2
1
1
2
3
Line 10 calls the func method in the context of obj, therefore this points to the obj object. Both line 11 and line 12 are calling func with implicit context, which is the global object. Line 13 is similar to line 10, just with an argument, which has no effect on the function's context. Line 17 calls the function with an explicit context object which is obj2, and that'll be this in the function.
What will the following code log out?

var a = 1;

function Foo() {
  this.a = 2;
  this.bar = function() {
    console.log(this.a);
  };
  this.bar();
}

var foo = new Foo();

foo.bar();
Foo();

obj = {};
Foo.call(obj);
obj.bar();

console.log(this.a);
Solution
2
2
2
2
2
2
Line 11 creates a new object foo with the constructor function. The constructor function calls the bar function while constructing the object, which prints 2 out. foo.bar() prints the next 2. With Foo(), we're calling the Foo function with the global object context which changes the global object's a to 2, and printed out the next 2. Foo.call(obj) adds the a property and the bar method to the obj object, then called the bar method, printing out the next 2. At this point, we can now call the bar method direclty on obj so this prints out the fifth 2. Finally, since the global object's a property is already changed to 2, the last 2 is printed out.
What will the following code log out?

var computer = {
  price: 30000,
  shipping: 2000,
  total: function() {
    var tax = 3000;
    function specialDiscount() {
      if (this.price > 20000) {
        return 1000;
      } else {
        return 0;
      }
    }
    return this.price + this.shipping + this.tax - specialDiscount();
  },
}

console.log(computer.total())
If you want this code to log out 34000, how would you fix it?

Solution
As it's written now, the code logs out NaN, because tax is defined as a local variable, not a property on computer, therefore this.tax is undefined, which causes line 13 to return NaN. Also, the specialDiscount function's this is the global object, since it's called with the implicit context and therefore specialDiscount returns 0. It is very common that when you invoke a method in an object, and if there's function inside the method, it doesn't pick up its surrounding context for this.

One way to fix it to save this into the function's lexical scope as a variable:

var computer = {
  price: 30000,
  shipping: 2000,
  total: function() {
    var tax = 3000,
        self = this;

    function specialDiscount() {
      if (self.price > 20000) {
        return 1000;
      } else {
        return 0;
      }
    }
    return this.price + this.shipping + tax - specialDiscount();
  },
}

console.log(computer.total());
The other way is to pass the this context into the specialDiscount function with bind, so its this is aligned with its surrounding's this.

var computer = {
  price: 30000,
  shipping: 2000,
  total: function() {
    var tax = 3000;

    var specialDiscount= function () {
      if (this.price > 20000) {
        return 1000;
      } else {
        return 0;
      }
    }.bind(this);

    return this.price + this.shipping + tax - specialDiscount();
  },
}

console.log(computer.total());



var RECTANGLE = {
  area: function() {
    return this.width * this.height;
  },
  circumference: function() {
    return 2 * (this.width + this.height);
  },
};

function Rectangle(width, height) {
  this.width = width;
  this.height = height;
  this.area = RECTANGLE.area.call(this);
  this.circumference = RECTANGLE.circumference.call(this);
}

var rect1 = new Rectangle(2, 3);


