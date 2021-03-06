$(document).ready(function() {
  let thermostat = new Thermostat()
  setTempDisplay();
  setPsDisplay();
  setLocalWeather();

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

  $('#city-updater').on('click', function() {
    setLocalWeather();
  })

  function setTempDisplay() {
    $('#temp-display').text(thermostat.currentTemp());
    $('#power-usage-display').attr('class', thermostat.currentUsage())
  }

  function setPsDisplay() {
    let content = thermostat.isPowerSaving() ? 'on' : 'off'
    $('#ps-display').text(content);
  }

  function setLocalWeather() {
    let url = 'http://api.openweathermap.org/data/2.5/weather?q='
    let city = $('#city-input').val()
    let units = '&units=metric'
    let token = '&APPID=28da720ac77959beb32c9a1a92ebf7d7'
    let req = url + city + units + token

    $.get(url + city + units + token, function(res) {
      $('#weather-location').text(res.name);
      $('#weather-temp').text(res.main.temp);
    })
  }
});
