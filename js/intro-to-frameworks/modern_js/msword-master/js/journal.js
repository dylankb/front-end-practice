function Entry(){};

Entry.prototype.wordCount = function(entry) {
  return entry.split(" ").length;
}

Entry.prototype.letterCount = function(entry) {
  letters = entry.split("");
  var counter_vowels = 0;
  var counter_consonants = 0;
  for (i = 0; i < letters.length; i++)
  if (letters[i] === "a" || letters[i] === "e" || letters[i] === "i" || letters[i] === "o" || letters[i] === "u") {
   counter_vowels ++;
 } else if (letters[i] === " ") {
   counter_vowels += 0;
   counter_consonants += 0;
  }  else {
   counter_consonants ++;
  }
  // debugger;
  return [counter_vowels, counter_consonants];
};

Entry.prototype.getTeaser = function(entry) {
  var index = entry.indexOf(".");
  var teaser = entry.slice(0, index+1);
  if (teaser.split(" ").length < 8) {
    return teaser;
  } else {
    return teaser.split(" ").slice(0,8).join(" ")
  }
}

exports.entryModule = Entry;
