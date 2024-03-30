import os
def get_key():
    API_KEY = os.environ.get('OPENWEATHER_API_KEY')
    return API_KEY