var dayImageUrl = "{% static 'img/day.jpg' %}";
var sunriseImageUrl = "{% static 'img/sunrise.jpg' %}";
var sunsetImageUrl = "{% static 'img/sunset.jpg' %}";
var nightImageUrl = "{% static 'img/night.jpeg' %}";

if (hours > sunriseHour + 1 && hours < sunsetHour - 1) {
    document.body.style.backgroundImage = "url(" + dayImageUrl + ")";
} else if (hours >= sunriseHour - 1 && hours <= sunriseHour + 1) {
    document.body.style.backgroundImage = "url(" + sunriseImageUrl + ")";
} else if (hours >= sunsetHour - 1 && hours <= sunsetHour + 1) {
    document.body.style.backgroundImage = "url(" + sunsetImageUrl + ")";
} else {
    document.body.style.backgroundImage = "url(" + nightImageUrl + ")";
}