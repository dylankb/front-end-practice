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

var people = [];

people.push(me);
people.push(friend);
people.push(mother);
people.push(father);

console.log(people.length);

// function rollCall(collection) {
//   collection.forEach(function(item) {
//     fullName(item);
//  });
// }

function rollCall(collection) {
  collection.forEach(fullName);
}