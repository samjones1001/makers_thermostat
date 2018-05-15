function Thermostat(){
  this._currentTemp = 20;
  this._minTemp = 10;
}

Thermostat.prototype.currentTemp = function() {
  return this._currentTemp;
}

Thermostat.prototype.up = function() {
  this._currentTemp++;
}

Thermostat.prototype.down = function() {
  if (this.currentTemp() > this._minTemp) {
    this._currentTemp--;
  }
}

Thermostat.prototype.isPowerSaving = function() {
  return true;
}
