# Current Weather Forcast using OpenWeatherMap API

This project utilizes the OpenWeatherMap Geocoding API to convert a city name to its corresponding latitude and longitude coordinates. It provides a simple way to retrieve the geographic information of a city using the OpenWeatherMap service.


## Prerequisites

Before running this program, ensure you have the following prerequisites:

- Python 3 installed
- requests library installed (can be installed via pip install requests)
- Create a file called localkeys.py in the same directory as the main code file.
     This file will contain the API key for the OpenWeatherMap API. The API key is stored in the variable API_KEY.
- An API key from OpenWeatherMap. You can sign up for a free account at [OpenWeatherMap](https://openweathermap.org/) and obtain an API key.

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
