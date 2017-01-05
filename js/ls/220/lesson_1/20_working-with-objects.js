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

// function fullName(person) {
//   console.log(person.firstName + " " + person.lastName);
// }

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
    if (this.isInvalidPerson(person)) { return; }
    this.collection.push(person);
  },
  remove: function(person) {
    var index = this.getIndex(person),
        leftSide, rightSide;

    if (this.isInvalidPerson(person)) { return; }

    leftSide = this.collection.slice(0, index);
    rightSide = this.collection.slice(index + 1);
    this.collection = leftSide.concat(rightSide);
  },
  getIndex: function(person) {
    var index = -1;
    this.collection.forEach(function(comparator, i) {
      if (comparator.firstName === person.firstName && comparator.lastName === person.lastName) {
        index = i;
      }
    });
    return index;
  },
  isInvalidPerson: function(person) {
    return typeof person.firstName !== "string" || typeof person.lastName !== "string";
  },
  get: function(person) {
    if (this.isInvalidPerson(person)) { return; }
    return this.collection[this.getIndex(person)];
  },
  update: function(person) {
    if (this.isInvalidPerson(person)) { return; }
    var existingPersonId = this.getIndex(person);

    if (existingPersonId === -1) { this.add(person); }
    else { this.collection[existingPersonId] = person; }
  }
};

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

// Add index to each new person

// ...
// add: function(person) {
//   if (this.isInvalidPerson(person)) { return; }
//   this.collection.push(person);
//   var index = this.getIndex(person);
//   person.index = index + 1;
// },

newPerson = { firstName: 'John', lastName: 'Jacob'};
people.update(newPerson);
console.log(people.collection);
