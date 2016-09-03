var me = {
  firstName: "Jane",
  lastName: "Doe"
};

var friend = {
  firstName: "John",
  lastName: "Smith"
};

var mother = {
  firstName: "Amber",
  lastName: "Doe"
};

var father = {
  firstName: "Shane",
  lastName: "Doe"
};

function fullName(person) {
  console.log(person.firstName + " " + person.lastName);
}

// var people = [];

// people.push(me);
// people.push(friend);
// people.push(mother);
// people.push(father);

// console.log(people.length);

var people = {
  collection: [me, friend, mother, father],
  fullName: function(person) {
    console.log(this.firstName + " " + this.lastName);
  },
  rollCall: function() {
    this.collection.forEach(this.fullName);
  },
  add: function(person) {
    this.collection.push(person);
  }
};

function rollCall(collection) {
  collection.forEach(fullName);
}

// function rollCall(collection) {
//   for (var i = 0, length = collection.length; i < length; i++) {
//     fullName(collection[i]);
//   }
// }

// function rollCall(collection) {
//   collection.forEach(function(item) {
//     fullName(item);
//  });
// }

// Since our forEach method expects a function, and that
// function will receive the current value in the array as the first argument,
// we can just pass a reference to the fullName function instead of creating
// a separate anonymous function solely to call the fullName function.
