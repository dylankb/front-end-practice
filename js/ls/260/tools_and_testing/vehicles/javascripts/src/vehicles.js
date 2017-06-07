var Vehicle = function (info) {
  this.make = info.make || '';
  this.model = info.model || '';
}

Vehicle.prototype.toString = function () {
  return this.make + ' ' + this.model;
}

Vehicle.prototype.honkHorn = function () {
  return 'Beep beep!';
}
