from django.shortcuts import render

# Create your views here.
## return the index.html file
def index(request):
    return render(request, 'index.html')