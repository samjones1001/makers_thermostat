function Thermostat(){
  this._currentTemp = 20;
  this._minTemp = 10;
  this._isPowerSaving = true;
  this._powerSavingMaxTemp = 25;
  this._maxTemp = 32;
}

Thermostat.prototype.currentTemp = function() {
  return this._currentTemp;
}

Thermostat.prototype.maxTemp = function() {
  return this.isPowerSaving() ? this._powerSavingMaxTemp : this._maxTemp
}

Thermostat.prototype.isPowerSaving = function() {
  return this._isPowerSaving;
}

Thermostat.prototype.togglePowerSaving = function() {
  this._isPowerSaving = !this._isPowerSaving;
}

Thermostat.prototype.up = function() {
  if (this.currentTemp() < this.maxTemp()) {
    this._currentTemp++;
  }
}

Thermostat.prototype.down = function() {
  if (this.currentTemp() > this._minTemp) {
    this._currentTemp--;
  }
}
