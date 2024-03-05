from weather.secret import get_key
from weather.geocoding import city_to_geocoding
import requests

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
    base_url = f"https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude=alerts,minutely,hourly,daily&appid={API_KEY}"

    # Get the response from the API call
    response = requests.get(base_url)

    # Convert the response to JSON format
    x = response.json()
    # If the "current" key exists in the response, retrieve the weather data
    if "current" in x:
        # Get the current data from the JSON response
        current_data = x["current"]
        current_temperature = current_data["temp"]
        current_pressure = current_data["pressure"]
        current_humidity = current_data["humidity"]
        weather_description = current_data["weather"][0]["description"]

        output = {
            "temp": current_temperature,
            "pressure": current_pressure,
            "humidity": current_humidity,
            "description": weather_description
            }
        return output
    else:
        return None
