function Thermostat(){
  this._currentTemp = 20;
  this._minTemp = 10;
  this._isPowerSaving = true;
}

Thermostat.prototype.currentTemp = function() {
  return this._currentTemp;
}

Thermostat.prototype.isPowerSaving = function() {
  return this._isPowerSaving;
}

Thermostat.prototype.togglePowerSaving = function() {
  this._isPowerSaving = !this._isPowerSaving;
}

Thermostat.prototype.up = function() {
  this._currentTemp++;
}

Thermostat.prototype.down = function() {
  if (this.currentTemp() > this._minTemp) {
    this._currentTemp--;
  }
}
