function Thermostat(){
  this._currentTemp = 20;
  this._minTemp = 10;
  this._isPowerSaving = true;
  this._powerSavingMaxTemp = 25;
  this._maxTemp = 32;
}

Thermostat.prototype = {
  currentTemp: function() {
    return this._currentTemp;
  },

  maxTemp: function() {
    return this.isPowerSaving() ? this._powerSavingMaxTemp : this._maxTemp
  },

  isPowerSaving: function() {
    return this._isPowerSaving;
  },

  isPowerSaving: function() {
    return this._isPowerSaving;
  },

  togglePowerSaving: function() {
    this._isPowerSaving = !this._isPowerSaving;
  },

  currentUsage: function() {
    if (this.currentTemp() > 24) {
      return "hi";
    } else if (this.currentTemp() >= 18) {
      return "mid";
    }
    return "low"
  },

  up: function() {
    if (this.currentTemp() < this.maxTemp()) {
      this._currentTemp++;
    }
  },

  down: function() {
    if (this.currentTemp() > this._minTemp) {
      this._currentTemp--;
    }
  }
}
