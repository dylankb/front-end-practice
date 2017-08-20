var path = require('path');
var fs = require('fs');
var filePath = path.resolve(path.dirname(__dirname), 'data/albums.json');

module.exports = {
  __readFile: function() {
    return JSON.parse(fs.readFileSync(filePath, 'utf8'));
  },
  getLastId: function() {
    return this.__readFile().last_id;
  },
  get: function() {
    return this.__readFile().data;
  },
  set: function(data, increment) {
    data.id = this.getLastId();
    if (increment) { data.id += 1; }
    fs.writeFileSync(filePath, JSON.stringify({
      last_id: data.id,
      data: data,
    }), 'utf8');
  },
};
