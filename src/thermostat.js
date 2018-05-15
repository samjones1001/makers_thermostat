function Thermostat(){
  this._currentTemp = 20;
}

Thermostat.prototype.currentTemp = function() {
  return this._currentTemp;
}
