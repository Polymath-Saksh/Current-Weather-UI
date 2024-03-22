import geocoder

def get_user_location():
    try:
        g = geocoder.ip('me')
        if g.ok:
            city = g.json['city']
            return city
        else:
            return "London"
    except Exception:
        return "London"