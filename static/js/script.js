window.onload = function() {
    var dir = Number(document.getElementById("wind-direction").innerText);
    var spd = document.getElementById("wind-speed").innerText;
    var object = document.getElementById("wind-degree-svg");
    var objectElement = document.getElementById('wind-beaufort');

    rotateObject(dir);

    var spd_arr = spd.split(" ");
    var magnitude = Number(spd_arr[0]);
    var idf;

    if (magnitude >= 0 && magnitude < 0.278) {
        idf = 0;
    } else if (magnitude >= 0.278 && magnitude < 1.389) {
        idf = 1;
    } else if (magnitude >= 1.389 && magnitude < 3.056) {
        idf = 2;
    } else if (magnitude >= 3.056 && magnitude < 5.278) {
        idf = 3;
    } else if (magnitude >= 5.278 && magnitude < 7.778) {
        idf = 4;
    } else if (magnitude >= 7.778 && magnitude < 10.556) {
        idf = 5;
    } else if (magnitude >= 10.556 && magnitude < 13.611) {
        idf = 6;
    } else if (magnitude >= 13.611 && magnitude < 16.994) {
        idf = 7;
    } else if (magnitude >= 16.994 && magnitude < 20.556) {
        idf = 8;
    } else if (magnitude >= 20.556 && magnitude < 24.444) {
        idf = 9;
    } else if (magnitude >= 24.444 && magnitude < 28.333) {
        idf = 10;
    } else if (magnitude >= 28.333 && magnitude < 32.5) {
        idf = 11;
    } else if (magnitude >= 32.5 && magnitude <= 36.944) {
        idf = 12;
    }

    var url = "icon/wind-beaufort-"+idf+".svg";
    objectElement.setAttribute('data', url);

    function rotateObject(degrees) {
        object.style.transform = "rotate(" + degrees + "deg)";
    }

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
    else if (condition === "Cloud") {
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

    var url_2 = "icon/"+idf_2+".svg";
    icon.setAttribute('data', url_2)

    var time_current = document.getElementById('time-info').innerText;
    var sunrise_time = document.getElementById('sunrise-time-value').innerText;
    var sunset_time = document.getElementById('sunset-time-value').innerText;
    var sunrise_arr = sunrise_time.split(":");
    var time_arr = time_current.split(":");
    var sunset_arr = sunset_time.split(":");
    var currentHour = Number(time_arr[0]);
    var sunriseHour = Number(sunrise_arr[0]);
    var sunsetHour = Number(sunset_arr[0]);
    document.getElementById('time-info').innerText = time_current;

    function leapYear(yr) {
        if (yr % 100 == 0) {
            if (yr % 400 == 0) {
                return true; 
            }
            else {
                return false;
            }
        }
        else {
            if (yr % 4 == 0) {
                return true;
            }
            else {
                return false;
            }
        }
    }

    async function updateTime() {
        while (true) {
            await sleep(1000);
            var hours = Number(time_arr[0]);
            var minutes = Number(time_arr[1]);
            var seconds = Number(time_arr[2]) + 1;
            if (seconds >= 60) {
                seconds = 0;
                minutes++;
                if (minutes >= 60) {
                    minutes = 0;
                    hours++;
                    if (hours >= 24) {
                        var date = document.getElementById('date-info').innerText;
                        var yr = Number(document.getElementById('year').innerText);
                        var date_arr = date.split(" ");
                        var month = date_arr[0];
                        var day = Number(date_arr[1]);
                        var daysInMonth = getDaysInMonth(month, yr);
                        if (day + 1 > daysInMonth) {
                            day = 1;
                            var nextMonthIndex = (months.indexOf(month) + 1) % 12;
                            month = months[nextMonthIndex];
                        } else {
                            day++;
                        }
                        document.getElementById('date-info').innerText = month + " " + (day < 10 ? "0" + day : day);
                        hours = 0;
                    }
                }
            }
            hours = hours < 10 ? "0" + hours : hours;
            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;
            document.getElementById('time-info').innerText = hours + ":" + minutes + ":" + seconds;
            time_arr = [hours, minutes, seconds];
            if (hours > sunriseHour + 1 && hours < sunsetHour - 1) {
                document.body.style.backgroundImage = "url('./img/day.jpg')";
            } else if (hours >= sunriseHour - 1 && hours <= sunriseHour + 1) {
                document.body.style.backgroundImage = "url('./img/sunrise.jpg')";
            } else if (hours >= sunsetHour - 1 && hours <= sunsetHour + 1) {
                document.body.style.backgroundImage = "url('./img/sunset.jpg')";
            } else {
                document.body.style.backgroundImage = "url('./img/night.jpeg')";
            }
        }
    }
    function getDaysInMonth(month, year) {
        if (month === "FEB" && leapYear(year)) {
            return 29;
        }
        return daysInMonth[month];
    }
    const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
    const daysInMonth = {
        "JAN": 31,
        "FEB": 28,
        "MAR": 31,
        "APR": 30,
        "MAY": 31,
        "JUN": 30,
        "JUL": 31,
        "AUG": 31,
        "SEP": 30,
        "OCT": 31,
        "NOV": 30,
        "DEC": 31
    };
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    updateTime();
}    