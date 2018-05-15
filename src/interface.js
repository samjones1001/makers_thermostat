$(document).ready(function() {
  let thermostat = new Thermostat()

  $('#temp-display').text(function() {
    setTempDisplay();
  });

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

  function setTempDisplay() {
    $('#temp-display').text(thermostat.currentTemp());
  }
});
