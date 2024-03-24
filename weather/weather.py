from weather.secret import get_key
from weather.geocoding import city_to_geocoding
from weather.curr_city import get_user_location
from datetime import datetime , timedelta, timezone
import pytz
import requests
# The program utilizes the OpenWeatherMap API to get the weather data

def program(location):
    # Get the key from the localkeys.py file
    API_KEY = get_key()

    # Get the city name from the user do error handling, the default location for no input is N/A
    if location == '.':
        city = get_user_location()
    else:
        city = location
    lat, lon = city_to_geocoding(city)

    # If latitude and longitude are None, city not found
    if lat is None or lon is None:
        lat, lon = city_to_geocoding("London")
        city = "London"

    # Get the URL for the Weather API call
    base_url = f"https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&appid={API_KEY}&units=metric"

    # Get the response from the API call
    response = requests.get(base_url)

    # Convert the response to JSON format
    x = response.json()
    # If the "current" key exists in the response, retrieve the weather data
    if x:
        # Get the current data from the JSON response
        current_data = x["current"]
        current_temperature = current_data["temp"]
        current_pressure = round(current_data["pressure"]/1013.25,3)
        current_humidity = current_data["humidity"]
        weather_description = current_data["weather"][0]["main"]
        cloudiness = current_data["clouds"]
        visibility = current_data["visibility"]
        wind_speed = current_data["wind_speed"]
        wind_direction = current_data["wind_deg"]
        max_temp = x["daily"][0]["temp"]["max"]
        min_temp = x["daily"][0]["temp"]["min"]
        # Get the timezone from the API response
        timezone = pytz.timezone(x["timezone"])

        # Capture sunrise and sunset and convert to datetime objects in the city's timezone
        sunrise = datetime.fromtimestamp(x["daily"][0]["sunrise"], tz=timezone)
        sunset = datetime.fromtimestamp(x["daily"][0]["sunset"], tz=timezone)
        curr_date = date_converter(str(sunrise).split()[0])
        time_zone_offset = x["timezone_offset"]
        current_time = get_current_time(time_zone_offset,tz = timezone)
        #Convert sunrise and sunset to timestamp format then check if it is day or night
        day_or_night = day_night(sunrise.timestamp(),sunset.timestamp(),current_time.timestamp(), timezone)

        output = {
            "temp": current_temperature,
            "pressure": current_pressure,
            "humidity": current_humidity,
            "description": weather_description,
            "cloudiness": cloudiness,
            "visibility": visibility/1000,
            "wind_speed": wind_speed,
            "wind_direction": wind_direction,
            "max_temp": max_temp,
            "min_temp": min_temp,
            "sunrise": str(sunrise).split()[1][:5],
            "sunset": str(sunset).split()[1][:5],
            "curr_date": f'{curr_date[1]} {curr_date[0]}',
            "year": curr_date[2],
            "day_night": day_or_night,
            "curr_time": str(current_time).split()[1][:8],
            "city": ' '.join([w.capitalize() for w in city.split(' ')])
            }
        return output
    else:
        return None
def date_converter(date):
    dat = date.split('-')
    day = dat[-1]
    mth = dat[-2]
    yr = dat[-3]
    months = {
        "01": "JAN",
        "02": "FEB",
        "03": "MAR",
        "04": "APR",
        "05": "MAY",
        "06": "JUN",
        "07": "JUL",
        "08": "AUG",
        "09": "SEP",
        "10": "OCT",
        "11": "NOV",
        "12": "DEC"
    }
    return [day, months[mth], yr]

from datetime import datetime, timedelta

from datetime import datetime, timedelta

def day_night(sunrise_timestamp, sunset_timestamp, current_time_timestamp, tz):
    # Convert Unix timestamps to datetime objects in the city's timezone
    sunrise = datetime.fromtimestamp(sunrise_timestamp, tz=tz)
    sunset = datetime.fromtimestamp(sunset_timestamp, tz=tz)
    current_time = datetime.fromtimestamp(current_time_timestamp, tz=tz)

    # Determine if it's sunrise, sunset, day, or night
    sunrise_range_start = sunrise - timedelta(hours=1)
    sunrise_range_end = sunrise + timedelta(hours=1)
    sunset_range_start = sunset - timedelta(hours=1)
    sunset_range_end = sunset + timedelta(hours=1)

    if sunrise_range_start <= current_time <= sunrise_range_end:
        return "Sunrise"
    elif sunset_range_start <= current_time <= sunset_range_end:
        return "Sunset"
    elif sunrise <= current_time <= sunset:
        return "Day"
    else:
        return "Night"


def get_current_time(time_zone_offset, tz):
    # Get the current time in UTC
    current_utc_time = datetime.now(timezone.utc)

    # Convert the current time to the city's timezone
    current_time = current_utc_time.astimezone(tz)

    return current_time