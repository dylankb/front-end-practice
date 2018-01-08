// var Vehicles = require('./vehicles');

function Honda (model) {
  this.model = model;

  if (!this.checkModel(model)) { return; }

  this.make = "Honda";
  this.price = Honda.getPrice(this.model);
};

Honda.prototype = Object.create(Vehicle.prototype);

Honda.prototype.checkModel = function(model) {
  if (Honda.getModels().indexOf(model) !== -1) {
    return true;
  } else {
    throw new Error('Model ' + this.model + ' does not exist');
    return;
  }
}
Honda.getModels = function() {
  return ["Accord", "Civic", "Crosstour", "CR-V", "CR-Z", "Fit", "HR-V", "Insight", "Odyssey", "Pilot"];
},

Honda.getPrice = function(model) {
  var prices = [16500, 14500, 21000, 15800, 12000, 13100, 16000,  18100, 22500, 19300];
  // debugger;
  return prices[Honda.getModels().indexOf(model)];
};

// Honda.prototype.constructor = Honda;

// var honda = new Honda('CRV');
