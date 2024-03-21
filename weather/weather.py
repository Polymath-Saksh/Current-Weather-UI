from weather.secret import get_key
from weather.geocoding import city_to_geocoding
import requests
from datetime import datetime

# The program utilizes the OpenWeatherMap API to get the weather data

def program(location):
    # Get the key from the localkeys.py file
    API_KEY = get_key()

    # Get the city name from the user
    city = location
    lat, lon = city_to_geocoding(city)

    # If latitude and longitude are None, city not found
    if lat is None or lon is None:
        print("City Not Found")
        exit()

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
        current_pressure = current_data["pressure"]
        current_humidity = current_data["humidity"]
        weather_description = current_data["weather"][0]["main"]
        cloudiness = current_data["clouds"]
        visibility = current_data["visibility"]
        wind_speed = current_data["wind_speed"]
        wind_direction = current_data["wind_deg"]
        max_temp = x["daily"][0]["temp"]["max"]
        min_temp = x["daily"][0]["temp"]["min"]
        #Capture sunrise and sunset and convert to 00:00 in 24 hour format
        sunrise = datetime.fromtimestamp(x["daily"][0]["sunrise"])
        sunset = datetime.fromtimestamp(x["daily"][0]["sunset"])
        curr_date = date_converter(str(sunrise).split()[0])
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
            "year": curr_date[2]
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

def day_night(sunrise,sunset,current_time):
    if sunrise < current_time < sunset:
        return "Day"
    else:
        return "Night"