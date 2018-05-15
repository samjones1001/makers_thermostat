$(document).ready(function() {
  let thermostat = new Thermostat()
  setTempDisplay();
  setPsDisplay();

  $('#temp-up').on('click', function() {
    thermostat.up();
    setTempDisplay();
  });

  $('#temp-down').on('click', function() {
    thermostat.down();
    setTempDisplay();
  });

  $('#reset').on('click', function() {
    thermostat.reset();
    setTempDisplay();
  });

  $('#ps-toggle').on('click', function() {
    thermostat.togglePowerSaving();
    setPsDisplay();
    setTempDisplay();
  });

  function setTempDisplay() {
    $('#temp-display').text(thermostat.currentTemp());
  }

  function setPsDisplay() {
    let content = thermostat.isPowerSaving() ? 'on' : 'off'
    $('#ps-display').text(content);
  }
});
