function walk(node, callback) {
  callback(node);

  for (var i = 0; i < node.childNodes.length; i++) {
    walk(node.childNodes[i], callback);
  }
}

// 5)
// var imgCount = 0;
// var pngCount = 0;
// walk(document.body, function(node) {
//   if (node.nodeName === 'IMG') {
//     imgCount += 1;
//     var type = node.src.split('.').slice(-1).toString();
//     if (type === 'png') {
//       pngCount += 1;
//     }
//   }
// });
// console.log(imgCount);
// console.log(pngCount);

// 6
walk(document.body, function(node) {
  if (node.nodeName === 'A') {
    node.style.color = "red";
  }
});
