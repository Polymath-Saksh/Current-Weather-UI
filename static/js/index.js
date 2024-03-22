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
      var background = 'day.jpg'; // Default background image

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