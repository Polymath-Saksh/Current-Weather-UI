import requests
from weather.secret import *

def city_to_geocoding(city):
    # Get the key from the localkeys.py file
    API_KEY = get_key()

    # Format the URL for the Geocoding API call
    base_url = f"http://api.openweathermap.org/geo/1.0/direct?q={city}&appid={API_KEY}"

    try:
        # Get the response from the API call
        response = requests.get(base_url)
        response.raise_for_status()  # Raise an exception for unsuccessful requests
        x = response.json()
        # If the response is an empty list, the city is not found
        if x:
            # Get the main data from the JSON response
            y = x[0]
            # Get the latitude and longitude from the main data
            lat = y["lat"]
            lon = y["lon"]
            return str(lat), str(lon)
        else:
            # Print the error message
            print("City Not Found")
            return None, None
    except requests.exceptions.RequestException as e:
        print("Error during API request:", e)
        return None, None
