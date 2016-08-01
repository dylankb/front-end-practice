
function compareNames(name1, name2) {
  if (name1[0] > name2[0]) {
    return 1;
  }
  else if (name1[0] === name2[0]) {
    return 0;
  }
  else {
    return -1;
  }
}