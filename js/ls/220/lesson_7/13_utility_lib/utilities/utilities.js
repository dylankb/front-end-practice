(function() {
  var _ = function(element) {
    u = {
      first: function() {
        return element[0];
      },
      last: function() {
        return element[element.length - 1];
      },
      without: function() {
        var arr = [];
        var args = Array.prototype.slice.call(arguments);
        element.forEach(function(ele) {
          if (args.indexOf(ele) === -1) { arr.push(ele); }
        });

        return arr;
      },
      lastIndexOf: function(value) {
        return element.lastIndexOf(value);
      },
      sample: function() {
        var arr = [];
        var args = Array.prototype.slice.call(arguments);
        if (args.length === 0) {
          return element[0];
        } else {
          for (var i=0; i < element.length; i++) {
            if (arr.indexOf(element[i]) === -1) {
              arr.push(element[i]);
            }
          }
        }
        return arr;
      },
    };
    return u;
  };

  _.range = function(start, stop) {
    var arr = [];
    if (!stop) {
      stop = start;
      start = 0;
    }

    for (var i=start; i < stop; i++) {
      arr.push(i);
    }
    return arr;
  };

  window._ = _;
})();
