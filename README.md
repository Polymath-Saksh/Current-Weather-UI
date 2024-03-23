# Current Weather Forcast using OpenWeatherMap API

This project utilizes the OpenWeatherMap Geocoding API to convert a city name to its corresponding latitude and longitude coordinates. It provides a simple way to retrieve the geographic information of a city using the OpenWeatherMap service.

## Usage

### Disclaimer: Add your API Key, refer to the Prerequisites section

To use this program, run the following command line interface:

python
python weather.py

It will ask you to enter the name of the city. Enter the name of the city and press enter. It will return the latitude and longitude of the city.

### Example

python
Enter the city name: London
Input the city name, for example, London. Use only ISO 3166 country codes, as per Geocoding API documentation.
For others, it fetch a placeholder data.

### Output

python
Enter the city name: London

Temperature: 19.43 ℃
Atmospheric pressure: 0.01 atm
Humidity (in percentage): 80%
Description: clear sky

## Architectural Diagram

    +------------------+
    |   User Interface |
    +------------------+
             |
             | City Name
             V
    +-------------------+
    |  City Geocoding  |
    +-------------------+
             |
             | Latitude, Longitude
             V
    +------------------+
    | OpenWeatherMap   |
    |     API          |
    +------------------+
             |
             | Weather Data
             V
    +------------------+
    |    Weather       |
    |    Display       |
    +------------------+

## Prerequisites

Before running this program, ensure you have the following prerequisites:

- Python 3 installed
- requests library installed (can be installed via pip install requests)
- Create a file called localkeys.py in the same directory as the main code file.
     This file will contain the API key for the OpenWeatherMap API. The API key is stored in the variable API_KEY.
- An API key from OpenWeatherMap. You can sign up for a free account at [OpenWeatherMap](https://openweathermap.org/) and obtain an API key.

## File Description

### geocoding.py

    - This file contains the code for the geocoding function.
    - The geocoding function takes in a city name as a parameter and returns the latitude and longitude of the city.

### secret.py (To be created)

    - This file contains the API key for the OpenWeatherMap API.
    - The API key is stored in the variable API_KEY.
    - Disclaimer: This file is not included in the repository for security reasons. You will have to create this file yourself, and not include it in the repository. To do so, create a .gitignore file and add localkeys.py to it.

### weather.py

    - This file contains the code for the main program.
    - The main program takes in a city name as a parameter and returns the weather data for that city.
    - The main program utilizes the geocoding function to get the latitude and longitude of the city.
    - The main program utilizes the OpenWeatherMap API to retrieve weather data for the city.

## Usage of GitHub Copilot

- *GitHub Copilot* was used to generate the code for the geocoding as well as weather function.
- *Autocomplete suggestions* were provided by Copilot, which reduced the time taken to write the code.

- *Parsing*: The responses recieved from OpenWeatherMap had many fields, but based on our requirement, Copilot was able to parse the response and provide us with the only required fields non-erroneously.

- *Exception Handling*: Copilot was able to provide us with the correct exception handling code for the API key error.

## Features

This program includes the following features:

- A user-defined function called get_key where the API key is stored in the variable API_KEY and returns the value of the API key to the main code.

python
def get_key():
    API_KEY = "Your API Key"
    return API_KEY

- The geocoding function is used to get the latitude and longitude of a given city.
- The program utilizes the OpenWeatherMap API to retrieve weather data.
- The program constructs the URL for the Weather API call and retrieves the response from it.
- Exception handling is used to handle any key errors that may occur.

## Usage(Continued)

To use this program, follow these steps:

- Install the required dependencies by running the following command:

    pip install -r requirements.txt

- Update the localkeys.py file with your OpenWeatherMap API key. Replace "Your API Key" with your actual API key.

- In your Python code, import the necessary libraries and the get_key and geocoding functions:

## Contributing Authors

- Saksham Kumar ([Polymath-Saksh](https://github.com/Polymath-Saksh))
- Aloukik Joshi ([aloukikjoshi](https://github.com/aloukikjoshi))
- Nihal Pandey ([neurotoxin5060](https://github.com/neurotoxin5060))
- Ankit Raj ([ankitraj5670](https://github.com/ankitraj5670))

## License

This project is licensed under MIT License - see the [LICENSE](LICENSE) file for details.

Copyright &copy; to the contributing authors.
