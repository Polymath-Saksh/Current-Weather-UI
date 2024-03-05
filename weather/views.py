from django.shortcuts import render
from weather.weather import program as output_weather
def index(request):
    # Handle form submission
    if request.method == 'POST':
        location = request.POST.get('location', '')
        
        # Assume you have a function 'get_weather_data' to retrieve weather data
        weather_data = output_weather(location)
        
        return render(request, 'location_input.html', {'weather_data': weather_data, 'location': location})

    # Render the initial page
    return render(request, 'location_input.html')
