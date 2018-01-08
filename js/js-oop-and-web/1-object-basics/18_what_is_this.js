// WHAT IS THIS? Exercises

function whatIsMyContext() {
  return this;
}

whatIsMyContext();  // window

function foo() {
  function bar() {
    function baz() {
      console.log(this);
    }
    baz();
  }
  bar();
}

// foo();  // window

var obj = {
  count: 2,
  method: function() {
    return this.count;
  }
};

// obj - the object the method is attached to
console.log(obj.method()); // 2

// What does the program log out?

function foo() {
  console.log(this.a);
}

var a = 2;
foo();  // this
        // foo is called on the implicit window object. a is defined on the window object.


var a = 1;

function bar() {
  console.log(this.a);
}

var obj = {
  a: 2,
  foo: bar,
};

obj.foo(); // 2
           // Line 12 calls function foo with its context set to obj. foo points to function bar, therefore invoking function bar with context of obj as well.

var foo = {
 a: 1,
 bar: function() {
   console.log(this.baz());
 },
 baz: function() {
   return this;
 }
};

foo.bar(); // { a: 1, bar: [Function], baz: [Function] }
           // Line 11 sets this in bar to the foo object, and logging out the result of calling foo's baz method, which returns foo itself, and logged out on line 4. Line 13 calls bar function with the implicit context of window, causing the error message.
