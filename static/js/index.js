function updateTime() {
      var currentTimeElement = document.getElementById('time-info');
      var currentTimeString = currentTimeElement.innerHTML;
      var timeParts = currentTimeString.split(':');

      var hours = parseInt(timeParts[0]);
      var minutes = parseInt(timeParts[1]);
      var seconds = parseInt(timeParts[2]);

      // Calculate the next second
      seconds++;
      if (seconds >= 60) {
        seconds = 0;
        minutes++;
        if (minutes >= 60) {
          minutes = 0;
          hours++;
          if (hours >= 24) {
            hours = 0;
          }
        }
      }

      // Format the time parts to ensure leading zeros if needed
      hours = (hours < 10 ? "0" : "") + hours;
      minutes = (minutes < 10 ? "0" : "") + minutes;
      seconds = (seconds < 10 ? "0" : "") + seconds;

      // Update the time in the HTML element
      currentTimeElement.innerHTML = hours + ":" + minutes + ":" + seconds;

      // Call this function again after 1 second
      setTimeout(updateTime, 1000);
    }

    // Call the function once to start the timer
updateTime();

// Change background image based on the value of id day-time

function changeBackground() {
      var dayTimeElement = document.getElementById('day-time');
      var background = 'images/day.jpg'; // Default background image

      // Check the value of the day-time element and set the background accordingly
      if (dayTimeElement.innerHTML.trim() === 'Day') {
        background = 'images/day.jpg'; // Change this to the path of your day background image
      } else if (dayTimeElement.innerHTML.trim() === 'Night') {
        background = 'images/night.jpg'; // Change this to the path of your night background image
      }
      else if (dayTimeElement.innerHTML.trim() === 'Sunrise') {
        background = 'images/sunrise.jpg'; // Change this to the path of your sunrise background image
      }
      else if (dayTimeElement.innerHTML.trim() === 'Sunset') {
        background = 'images/sunset.jpg'; // Change this to the path of your sunset background image
      }

      // Apply the background image to the body
      document.body.style.backgroundImage = "url('static/" + background + "')";
    }

    // Call the function once to set the initial background
    changeBackground();


function rotateCompass() {
    // Get the wind direction value
    var windDirection = document.getElementById('wind-direction').innerHTML;
    
    // Get the compass container
    var degreeContainer = document.getElementById('wind-degree-svg');
    
    // Set the rotation angle based on wind direction
    var rotationAngle = parseFloat(windDirection); // Assuming wind direction is in degrees
    
    // Apply the rotation to the compass container
    degreeContainer.style.transform = 'rotate(' + rotationAngle + 'deg)';
}

// Call the rotateCompass function to rotate the compass initially
rotateCompass();

function beaufort(){
    var wind_speed_dat = document.getElementById('wind-speed').innerHTML;
    var windSpeed = Number(wind_speed_dat.split(" ")[0]);
    var beaufortValue = 0;
    if (windSpeed >= 0 && windSpeed < 0.278) {
        beaufortValue = 0;
    } else if (windSpeed >= 0.278 && windSpeed < 1.389) {
        beaufortValue = 1;
    } else if (windSpeed >= 1.389 && windSpeed < 3.056) {
        beaufortValue = 2;
    } else if (windSpeed >= 3.056 && windSpeed < 5.278) {
        beaufortValue = 3;
    } else if (windSpeed >= 5.278 && windSpeed < 7.778) {
        beaufortValue = 4;
    } else if (windSpeed >= 7.778 && windSpeed < 10.556) {
        beaufortValue = 5;
    } else if (windSpeed >= 10.556 && windSpeed < 13.611) {
        beaufortValue = 6;
    } else if (windSpeed >= 13.611 && windSpeed < 16.994) {
        beaufortValue = 7;
    } else if (windSpeed >= 16.994 && windSpeed < 20.556) {
        beaufortValue = 8;
    } else if (windSpeed >= 20.556 && windSpeed < 24.444) {
        beaufortValue = 9;
    } else if (windSpeed >= 24.444 && windSpeed < 28.333) {
        beaufortValue = 10;
    } else if (windSpeed >= 28.333 && windSpeed < 32.5) {
        beaufortValue = 11;
    } else if (windSpeed >= 32.5 && windSpeed <= 36.944) {
        beaufortValue = 12;
    }

    var url = "/static/icons/wind-beaufort-"+beaufortValue+".svg";
    //Set the value of wind-beaufort to the url of the icon
    document.getElementById('wind-beaufort').data = url;
}

// Call the beaufort function to set the initial beaufort value
beaufort();


function center(){
  var condition = document.getElementById('temp-desc').innerText;
    var dayTime = document.getElementById('day-time').innerText;
    var icon = document.getElementById('weather-svg');
    var cloudpct = document.getElementById('cloud-percent').innerText;
    var idf_2;

    if (condition === "Clear") {
        if (dayTime === "Day") {
            idf_2 = "clear-day";
        }
        else {
            idf_2 = "clear-night";
        }
    }
    else if (condition === "Clouds") {
        if (cloudpct >= 90) {
            idf_2 = "cloudy";
        }
        else if (cloudpct >= 70 && dayTime === "Day") {
            idf_2 = "overcast-day";
        }
        else if (cloudpct >= 70 && dayTime === "Night"){
            idf_2 = "overcast-night";
        }
        else if (dayTime === "Day") {
            idf_2 = "partly-cloudy-day";
        }
        else {
            idf_2 = "partly-cloudy-night";
        }
    }
    else if (condition === "Rain") {
        if (cloudpct > 70) {
            idf_2 = "rain";
        }
        else if (cloudpct <= 70 && dayTime === "Day") {
            idf_2 = "partly-cloudy-day-rain";
        }
        else {
            idf_2 = "partly-cloudy-night-rain";
        }
    }
    else if (condition === "Drizzle") {
        if (cloudpct > 70) {
            idf_2 = "drizzle";
        }
        else if (cloudpct <= 70 && dayTime === "Day") {
            idf_2 = "partly-cloudy-day-drizzle";
        }
        else {
            idf_2 = "partly-cloudy-night-drizzle";
        }
    }
    else if (condition === "Thunderstorm") {
        if (dayTime === "Day") {
            idf_2 = "thunderstorm-day";
        }
        else {
            idf_2 = "thunderstorm-night"
        }
    }
    else if (condition === "Snow") {
        if (cloudpct > 70) {
            idf_2 = "snow";
        }
        else if (cloudpct <= 70 && dayTime === "Day") {
            idf_2 = "partly-cloudy-day-snow";
        }
        else {
            idf_2 = "partly-cloudy-night-snow";
        }
    }
    else if (condition === "Mist") {
        idf_2 = "mist";
    }
    else if (condition === "Smoke") {
        if (cloudpct > 70) {
            idf_2 = "smoke";
        }
        else if (cloudpct <= 70 && dayTime === "Day") {
            idf_2 = "partly-cloudy-day-smoke";
        }
        else {
            idf_2 = "partly-cloudy-night-smoke";
        }
    }
    else if (condition === "Haze") {
        if (cloudpct >= 90) {
            idf_2 = "haze";
        }
        else if (cloudpct >= 70) {
            if (dayTime === "Day") {
                idf_2 = "partly-cloudy-day-haze";
            }
            else {
                idf_2 = "partly-cloudy-night-haze";
            }
        }
        else {
            if (dayTime === "Day") {
                idf_2 = "haze-day";
            }
            else {
                idf_2 = "haze-night";
            }
        }
    }
    else if (condition === "Dust") {
        if (cloudpct >= 70) {
            idf_2 = "dust";
        }
        else {
            if (dayTime === "Day") {
                idf_2 = "dust-day";
            }
            else {
                idf_2 = "dust-night";
            }
        }
    }
    else if (condition === "Tornado") {
        idf_2 = "tornado";
    }
    else if (condition === "Fog"){
        if (cloudpct >= 90) {
            idf_2 = "fog";
        }
        else if (cloudpct >= 70) {
            if (dayTime === "Day") {
                idf_2 = "partly-cloudy-day-fog";
            }
            else {
                idf_2 = "partly-cloudy-night-fog";
            }
        }
        else {
            if (dayTime === "Day") {
                idf_2 = "fog-day";
            }
            else {
                idf_2 = "fog-night";
            }
        }
    }
    else {
        idf_2 = "not-available"
    }

    var url_2 = "static/icons/"+idf_2+".svg";
    icon.setAttribute('data', url_2)
}

center();

window.onload = function() {
    var formSubmitted = sessionStorage.getItem("formSubmitted");
    if (!formSubmitted) {
        document.getElementById("location").value = ".";
        document.getElementById("search-form").submit();
        sessionStorage.setItem("formSubmitted", true);
    }
    fitText();
}

document.getElementById( 'search-button' ).addEventListener("submit", function(event) {
    sessionStorage.removeItem("formSubmitted");
    this.submit();
});

function fitText() {
    var container = document.getElementById('city-name');
    var text = document.getElementById('city');
    var containerWidth = container.offsetWidth;
    var textWidth;
    do {
        var fontSize = parseFloat(window.getComputedStyle(text, null).getPropertyValue('font-size'));
        var newFontSize = fontSize - 1;
        text.style.fontSize = newFontSize + 'px';
        textWidth = text.offsetWidth;
    } while (textWidth > (containerWidth - 10) && newFontSize > 0);
}

