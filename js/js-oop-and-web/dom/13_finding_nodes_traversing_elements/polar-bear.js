// 1
// var wordCount = [];
// var h2s = document.getElementsByTagName('h2');
// h2Array = Array.prototype.slice.call(h2s);

// for (var i=0; i < h2s.length; i++) {
//   wordCount.push(h2s[i].textContent.split(' ').length);
// }
//
// console.log(wordCount);

// 2
// console.log(document.getElementsByClassName('toc'));
// console.log(document.getElementById('toc'));
//
// document.querySelectorAll('.toc')[0];

// 3
// var links = document.getElementById('toc').getElementsByClassName('toctext');
// var linksArray = Array.prototype.slice.call(links);
//
// linksArray.forEach(function(link) {
//   link.style.color = 'green';
// });

// 4)
// var text = [];
// var thumbs = document.querySelectorAll('.thumbcaption');
// var thumbsArray = Array.prototype.slice.call(thumbs);
//
// thumbsArray.forEach(function(caption) {
//   text.push(caption.textContent);
// });
//
// console.log(text);

// 5)

var dict = {};
var table = document.getElementsByClassName('infobox biota')[0];
var rows = Array.prototype.slice.call(table.firstElementChild.children);
rows.slice(5, -5).forEach(function(row) {
  var pair = row.textContent.trim().split(':\n');
  dict[pair[0]] = pair[1];
});

console.log(dict);
