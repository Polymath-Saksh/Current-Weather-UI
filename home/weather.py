from secret import get_key
from geocoding import city_to_geocoding
import requests

# The program utilizes the OpenWeatherMap API to get the weather data

def Weather():
    # Get the key from the localkeys.py file
    API_KEY = get_key()

    # Get the city name from the user
    city = input("Enter the city name: ")
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

        # Get the temperature from the current data
        current_temperature = current_data["temp"]

        # Get the pressure from the current data
        current_pressure = current_data["pressure"]

        # Get the humidity from the current data
        current_humidity = current_data["humidity"]

        # Get the weather data from the JSON response
        weather_data = current_data["weather"]

        # Get the description from the weather data
        weather_description = weather_data[0]["description"]

        # Print the weather data and limit the decimal places to 2
        print(f"\nTemperature : {str(round(current_temperature - 273.15, 2))} \u2103")
        print(f"Atmospheric pressure: {str(round(current_pressure / 101325, 2))} atm")
        print(f"Humidity (in percentage): {str(current_humidity)}%")
        print(f"Description: {weather_description}")
        
    else:
        print("Weather data not found for the specified location.")
        exit()


try:
    # Call the Weather function
    Weather()
except KeyError:
    print("Invalid input")