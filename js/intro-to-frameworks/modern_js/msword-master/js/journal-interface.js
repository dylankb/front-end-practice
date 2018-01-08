var Entry = require('./../js/journal.js').entryModule;

$(document).ready(function() {
  $('form#entry').submit(function(event){
    event.preventDefault();
    var title = $('#title').val();
    var content = $('#content').val();
    var simpleEntry = new Entry;
    var wordNumber = simpleEntry.wordCount(content);
    var vowelNumber = simpleEntry.letterCount(content)[0];
    var consonantNumber = simpleEntry.letterCount(content)[1];
    var teaser = simpleEntry.getTeaser(content);
    $('#word_count').append(wordNumber);
    $('#vowel_count').append(vowelNumber);
    $('#consonant_count').append(consonantNumber);
    $('#teaser').append(teaser);
  });
});
