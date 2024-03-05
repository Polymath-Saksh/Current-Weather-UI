from django.shortcuts import render,redirect

# Create your views here.
## return the index.html file
def index(request):
    if request.method == 'POST':
        return redirect('home')
    else:
        return render(request, 'index.html')
