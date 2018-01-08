// 1)
// document.children[0].lastChild.children[0].style.color = 'red';
// document.children[0].lastChild.children[0].style.fontSize = '48px';

// 2)
function walk(node, callback) {
  callback(node);

  for (var i = 0; i < node.childNodes.length; i++) {
    walk(node.childNodes[i], callback);
  }
}

var pCount = 0;
var firstWords = [];
walk(document.body, function(node) {
  if (node.nodeName === 'P') {
    if (pCount !==0) {
      node.classList.add("stanza");
    }
    pCount += 1;
    console.log(node);

    firstWords.push(node.innerText.split(' ')[0]);
  }
});

console.log(pCount);
console.log(firstWords);
// 3)
