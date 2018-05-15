describe('Thermostat', function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('starts with a temperature of 20', function() {
    expect(thermostat.currentTemp()).toEqual(20);
  });

  it('starts in power saving mode', function() {
    expect(thermostat.isPowerSaving()).toEqual(true);
  });

  describe('#togglePowerSaving', function() {
    it('switches power saving mode off', function() {
      thermostat.togglePowerSaving();
      expect(thermostat.isPowerSaving()).toEqual(false);
    });

    it('can switch power saving mode back on', function() {
      thermostat.togglePowerSaving();
      thermostat.togglePowerSaving();
      expect(thermostat.isPowerSaving()).toEqual(true);
    });
  });

  describe('#up', function() {
    it('raises the current temperature by 1', function() {
      thermostat.up();
      expect(thermostat.currentTemp()).toEqual(21);
    });

    it('will not raise the temperature above the maximum temperature', function() {
      var distanceFromMax = thermostat.maxTemp() - thermostat.currentTemp();
      for(var i = 0; i <= distanceFromMax; i++) {
        thermostat.up();
      }
      expect(thermostat.currentTemp()).toEqual(thermostat.maxTemp());
    });
  });

  describe('#down', function() {
    it('lowers the current temperature by 1', function() {
      thermostat.down();
      expect(thermostat.currentTemp()).toEqual(19);
    });

    it('will not lower the temperature below the minimum temperature', function() {
      var distanceFromMin = thermostat.currentTemp() - thermostat._minTemp;
      for(var i = 0; i <= distanceFromMin; i++) {
        thermostat.down();
      }
      expect(thermostat.currentTemp()).toEqual(thermostat._minTemp);
    });
  });

  describe('when in power saving mode', function() {
    describe('#maxTemp', function() {
      it('will return the power saving max temp', function() {
        expect(thermostat.maxTemp()).toEqual(thermostat._powerSavingMaxTemp);
      });
    });
  });

  describe('when not in power saving mode', function() {
    describe('#maxTemp', function() {
      it('will return the max temp', function() {
        thermostat.togglePowerSaving();
        expect(thermostat.maxTemp()).toEqual(thermostat._maxTemp);
      });
    });
  });
});
